export default {
  Objective: {
    name: "Mj Khodadadi",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis commodi quod consectetur. Tempore aspernatur provident reprehenderit ex doloremque consectetur? Modi cupiditate recusandae veniam laudantium minima qui vitae reiciendis molestias incidunt voluptatem inventore expedita dolorum facere, deleniti beatae animi dignissimos perferendis at atque voluptate rerum dicta delectus eius? Cumque, tempora nostrum beatae animi dignissimos perferendis at atque voluptate rerum dicta delectus eius? Cumque, tempora nostrum `,
    image: "",
  },
  Education: {
    image: "",
    description: [
      {
        name: "B.s Mechnical Engineering",
        Univercity: "Shahrood Univercity",
        date: "2014-2018",
        site: "www.shahrood ui.com",
        description:
          "I am what I am, I am a mechenical engineer that spend four years",
        location: "Iran",
      },
      {
        name: "M.s Mechnical Engineering",
        Univercity: "Shahrood Univercity",
        date: "2014-2018",
        site: "www.shahrood ui.com",
        description:
          "I am what I am, I am a mechenical engineer that spend four years",
        location: "Iran",
      },
    ],
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
} as Me;

export type Me = {
  Objective: {
    name: string;
    description: string;
    image: string;
  };
  Education: {
    image: string;
    description: EducationInfo[];
  };
  Experience: {
    image: string;
    description: JobDesc[];
  };
  Skills: Skill[];
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
  name: string;
  Univercity: string;
  date: string;
  site: string;
  description: string;
  location: string;
};
