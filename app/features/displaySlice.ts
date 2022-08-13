import { RootState } from "../store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchStatus } from "./showComponentAPI";
import { Me } from "../../data/about";

export enum PathLine {
  phone = "phone",
  laptop = "laptop",
  monitors = "monitors",
  tv = "tv",
  tablet = "tablet",
}

export enum MeDesc {
  Objective = "Objective",
  Education = "Education",
  Experience = "Experience",
  Skills = "Skills",
}

type InitState = {
  path?: PathLine;
  orthCamStatus: boolean;
  showComponents: boolean;
  me?: Me | null;
  meDisplay: MeDesc;
  screen1Src: string;
  screen2Src: string;
  activeLoader: boolean;
};

const initialState: InitState = {
  path: undefined,
  orthCamStatus: false,
  showComponents: false,
  me: null,
  meDisplay: MeDesc.Objective,
  screen1Src: "./images/bg.jpg",
  screen2Src: "./logo-720.png",
  activeLoader: true,
};

export const setShowCompTrueAsync = createAsyncThunk(
  "showComp/fetchStatus",
  async (status: boolean) => {
    const response = await fetchStatus(status);

    return response.updateStatus;
  }
);

export const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    setPath: (state, action: PayloadAction<PathLine>) => {
      state.path = action.payload;
    },
    activateOrthCam: (state) => {
      state.orthCamStatus = true;
    },
    deactivateOrthCam: (state) => {
      state.orthCamStatus = false;
    },
    deactivateShowComp: (state) => {
      state.showComponents = false;
    },
    setMeInfo: (state, action: PayloadAction<Me>) => {
      state.me = action.payload;
    },
    setMeDisplay: (state, action: PayloadAction<MeDesc>) => {
      state.meDisplay = action.payload;
    },
    setScreen1Display: (state, action: PayloadAction<string>) => {
      state.screen1Src = action.payload;
    },
    setScreen2Display: (state, action: PayloadAction<string>) => {
      state.screen2Src = action.payload;
    },
    deActiveLoaderStatus: (state) => {
      state.activeLoader = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(setShowCompTrueAsync.fulfilled, (state) => {
      state.showComponents = true;
    });
  },
});

export const {
  setPath,
  activateOrthCam,
  deactivateOrthCam,
  deactivateShowComp,
  setMeInfo,
  setMeDisplay,
  setScreen1Display,
  setScreen2Display,
  deActiveLoaderStatus,
} = displaySlice.actions;

export const selectPath = (state: RootState) => state.displayReducer.path;
export const selectActiveLoader = (state: RootState) =>
  state.displayReducer.activeLoader;
export const selectMe = (state: RootState) => state.displayReducer.me;
export const selectScreen1 = (state: RootState) =>
  state.displayReducer.screen1Src;
export const selectScreen2 = (state: RootState) =>
  state.displayReducer.screen2Src;
export const selectMeDis = (state: RootState) => state.displayReducer.meDisplay;
export const selectShowComponent = (state: RootState) =>
  state.displayReducer.showComponents;

export const selectOrthCam = (state: RootState) =>
  state.displayReducer.orthCamStatus;

export const displayReducer = displaySlice.reducer;
