export default {
  Objective: {
    name: "Mj Khodadadi",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis commodi quod consectetur. Tempore aspernatur provident reprehenderit ex doloremque consectetur? Modi cupiditate recusandae veniam laudantium minima qui vitae reiciendis molestias incidunt voluptatem inventore expedita dolorum facere, deleniti beatae animi dignissimos perferendis at atque voluptate rerum dicta delectus eius? Cumque, tempora nostrum beatae animi dignissimos perferendis at atque voluptate rerum dicta delectus eius? Cumque, tempora nostrum `,
    image: "./logo-720.png",
  },
  Education: {
    image: "./images/bg.jpg",
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
    image: "./logo-720.png",
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
    { name: "ts", Icon: "./icons/ts.png", value: 90 },
    { name: "react", Icon: "./icons/react.png", value: 95 },
    { name: "next", Icon: "./icons/next.png", value: 85 },
    { name: "redux", Icon: "./icons/redux.png", value: 95 },
    { name: "recoil", Icon: "./icons/recoil.png", value: 100 },
    { name: "material-ui", Icon: "./icons/materialui.png", value: 98 },
    { name: "mantine-ui", Icon: "./icons/mantineui.png", value: 95 },
    { name: "tailwindcss", Icon: "./icons/tailwindcss.png", value: 96 },
    { name: "bootstrap", Icon: "./icons/bootstrap.png", value: 100 },
    { name: "nodejs", Icon: "./icons/nodejs.png", value: 78 },
    { name: "express", Icon: "./icons/express.png", value: 80 },
    { name: "mongodb", Icon: "./icons/mongodb.png", value: 95 },
    { name: "firebase", Icon: "./icons/firebase.png", value: 80 },
    { name: "apollo", Icon: "./icons/apollo.svg", value: 70 },
    { name: "graphql", Icon: "./icons/graphql.png", value: 80 },
    { name: "restapi", Icon: "./icons/restapi.png", value: 90 },
    { name: "three", Icon: "./icons/three.png", value: 50 },
    { name: "blender", Icon: "./icons/blender.png", value: 50 },
    { name: "photoshop", Icon: "./icons/photoshop.png", value: 35 },
  ],
  Services: [
    {
      name: "Web Development",
      image: "./svgs/webDevelopment.svg",
      description:
        "Creating stunning website and webapp using React and Next frameworks.",
    },
    {
      name: "Responsive Web Design",
      image: "./svgs/responsiveWebDesign.svg",
      description:
        "Building website that are compatible with every device display.",
    },
    {
      name: "Develop REST APIs",
      image: "./svgs/restapi.svg",
      description:
        "Building strong REST apis using express with jwt authentication.",
    },
    {
      name: "Develop graphQl Apis",
      image: "./svgs/graphql.svg",
      description:
        "Creating graphql Apis using Apollo server with jwt authentication.",
    },
  ],
} as Me;

export type Me = {
  Objective: Objective;
  Education: {
    image: string;
    description: EducationInfo[];
  };
  Experience: {
    image: string;
    description: JobDesc[];
  };
  Skills: Skill[];
  Services: Objective[];
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
export type Objective = {
  name: string;
  description: string;
  image: string;
};
export type EducationInfo = {
  name: string;
  Univercity: string;
  date: string;
  site: string;
  description: string;
  location: string;
};
