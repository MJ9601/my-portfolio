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
      {
        name: "freelance",
        date: "2021-2022",
        description: "I was a freelancer",
        image: "",
      },
      {
        name: "freelance",
        date: "2021-2022",
        description: "I was a freelancer",
        image: "",
      },
      {
        name: "freelance",
        date: "2021-2022",
        description: "I was a freelancer",
        image: "",
      },
    ],
  },
  Skills: [
    { name: "html", Icon: "./icons/html.png", value: 100 },
    { name: "css", Icon: "./icons/css.png", value: 100 },
    { name: "js", Icon: "./icons/js.png", value: 100 },
    { name: "ts", Icon: "./icons/ts.png", value: 100 },
    { name: "react", Icon: "./icons/react.png", value: 100 },
    { name: "next", Icon: "./icons/next.png", value: 100 },
    { name: "redux", Icon: "./icons/redux.png", value: 100 },
    { name: "recoil", Icon: "./icons/recoil.png", value: 100 },
    { name: "material-ui", Icon: "./icons/materialui.png", value: 100 },
    { name: "mantine-ui", Icon: "./icons/mantineui.png", value: 100 },
    { name: "tailwindcss", Icon: "./icons/tailwindcss.png", value: 100 },
    { name: "bootstrap", Icon: "./icons/bootstrap.png", value: 100 },
    { name: "nodejs", Icon: "./icons/nodejs.png", value: 100 },
    { name: "express", Icon: "./icons/express.png", value: 100 },
    { name: "mongodb", Icon: "./icons/mongodb.png", value: 100 },
    { name: "firebase", Icon: "./icons/firebase.png", value: 100 },
    { name: "apollo", Icon: "./icons/apollo.svg", value: 100 },
    { name: "graphql", Icon: "./icons/graphql.png", value: 100 },
    { name: "restapi", Icon: "./icons/restapi.png", value: 100 },
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
  location?: string;
  company?: string;
  site?: string;
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
