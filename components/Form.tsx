import { useRouter } from "next/router";
import React, { FormEvent, useEffect, useState } from "react";
import socialMedia from "../data/socialMedia";
import axios from "axios";

const Form = () => {
  const [copy, setCopy] = useState(false);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const payload = { name, subject, email, message };
    if (!name || !subject || !email || !message) {
      setErr(true);
    } else {
      setErr(false);
      console.log(payload);
      const response = await (await axios.post("/api", payload)).data;
      console.log(response);

      if (response) setSuccess(true);
    }

    setName("");
    setSubject("");
    setMessage("");
    setEmail("");
    return;
  };

  useEffect(() => {
    const setStatus = async () => {
      if (success) {
        await setTimeout(() => {
          setSuccess(false);
        }, 1000);
      }
    };

    setStatus();
  });

  return (
    <div className={"flex flex-wrap  h-full mx-1 lg:mx-0 scrollbar-desc"}>
      <div className="form-wrapper">
        <form className="w-[100%] space-y-3 h-fit " onSubmit={onSubmit}>
          <h3 className="form-title uppercase">Send Me a Note</h3>
          <label htmlFor="" className="label">
            <h6 className="title">Name</h6>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
            />
          </label>
          <label htmlFor="" className="label">
            <h6 className="title">Email</h6>
            <input
              type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="" className="label">
            <h6 className="title">Subject</h6>
            <input
              type="text"
              className="input"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </label>
          <label htmlFor="" className="label">
            <h6 className="title">Message</h6>
            <textarea
              className="input textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <label htmlFor="" className="label">
            <input type="submit" value="Send" className="input submit" />
          </label>
          {err && (
            <div className=" rounded-md bg-red-500 text-white w-fit  py-2 px-5">
              All fields are required!
            </div>
          )}
          {success && (
            <div className=" rounded-md bg-green-500 text-white w-fit  py-2 px-5">
              Message sent.
            </div>
          )}
        </form>
      </div>

      <div className="w-full h-fit lg:w-[38%] flex flex-col gap-1 ">
        <h2 className="form-title">Find Me Here</h2>
        <div className="relative flex justify-around mb-3 lg:flex-col gap-5 ml-3">
          {socialMedia.map((link, index) => (
            <a
              key={index}
              target={link.link && "_blank"}
              rel="noreferrer"
              href={link.link && link.link}
              className="relative cursor-pointer flex gap-2 group  justify-start items-center"
              onClick={() => {
                !link.link && navigator.clipboard.writeText(link.userName);
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 700);
              }}
            >
              <img src={link.icon} className="icons" />
              <h4 className="icons-text">{link.userName}</h4>
            </a>
          ))}
          {copy && (
            <div className="absolute bg-black -bottom-3 right-10 px-1  text-white">
              copied to clipboard!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
