export default {
  me: {
    Objective: {
      name: "Mj Khodadadi",
      description: `I'm a full stack web developer`,
      image: "",
    },
    Education: {
      image: "",
      Bs: {
        Univercity: "Shahrood Univercity",
        date: "2014-2018",
        site: "www.shahrood ui.com",
        description: "some thing ",
        location: "Iran",
      },
      Ms: {},
    },
    Experience: {
      image: "",
      description: [
        {
          name: "freelance",
          date: "2021-2022",
          description: "I was a freelancer",
          image: "",
        },
      ],
    },
    Skills: [
      { name: "HTML/CSS", Icon: "", value: 90 },
      { name: "HTML/CSS", Icon: "", value: 90 },
      { name: "HTML/CSS", Icon: "", value: 90 },
      { name: "HTML/CSS", Icon: "", value: 90 },
    ],
  },
} as Me;

export type Me = {
  me: {
    Objective: {
      name: string;
      description: string;
      image: string;
    };
    Education: {
      image: string;
      Bs: EducationInfo;
      Ms: EducationInfo;
    };
    Experience: {
      image: string;
      description: JobDesc[];
    };
    Skills: Skill[];
  };
};

export type JobDesc = {
  name: string;
  date: string;
  description: string;
  image: string;
};

export type Skill = {
  name: string;
  Icon: string;
  value: number;
};

export type EducationInfo = {
  Univercity: string;
  date: string;
  site: string;
  description: string;
  location: string;
};
