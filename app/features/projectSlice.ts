import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type InitState = {
  projects: Project[];
  currentProject: Project | null;
};

export type Project = {
  _id: string;
  name: string;
  description: string;
  tags: string[];
  teches: string[];
  videoSrc: string;
  demoLink?: string;
  repoLink: string;
  img: string;
};

const initialState: InitState = {
  projects: [],
  currentProject: null,
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setCurrentProject: (state, action: PayloadAction<Project>) => {
      state.currentProject = action.payload;
    },
    setAllProject: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload;
    },
  },
});

export const { setAllProject, setCurrentProject } = projectSlice.actions;

export const selectAllProjects = (state: RootState) =>
  state.projectReducer.projects;
export const selectCurrentProject = (state: RootState) =>
  state.projectReducer.currentProject;

export const projectReducer = projectSlice.reducer;
