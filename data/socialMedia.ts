export default [
  {
    name: "GitHub",
    icon: "./svgs/github.svg",
    userName: "MJ9601",
    link: "https://www.github.com/MJ9601",
  },
  {
    name: "Linkedin",
    icon: "./svgs/linkedin.svg",
    userName: "Mj Khodadadi",
    link: "https://www.linkedin.com/in/mj-khodadadi-934ba2203/",
  },
  {
    name: "Whatsapp",
    icon: "./svgs/whatsapp.svg",
    userName: "+98 903 548 5401",
  },
  {
    name: "Email1",
    icon: "./svgs/google.svg",
    userName: "mj.khodadadi.1996@gmail.com",
  },
  {
    name: "Email1",
    icon: "./svgs/google.svg",
    userName: "javadkhodadadi25@gmail.com",
  },
] as SocialMedias;

type SocialMedia = {
  name: string;
  icon: string;
  userName: string;
  link: string;
};

type SocialMedias = SocialMedia[];
