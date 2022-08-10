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

type InitState = {
  path?: PathLine;
  orthCamStatus: boolean;
  showComponents: boolean;
  me?: Me | null;
};

const initialState: InitState = {
  path: undefined,
  orthCamStatus: false,
  showComponents: false,
  me: null,
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
} = displaySlice.actions;

export const selectPath = (state: RootState) => state.displayReducer.path;
export const selectMe = (state: RootState) => state.displayReducer.me;
export const selectShowComponent = (state: RootState) =>
  state.displayReducer.showComponents;

export const selectOrthCam = (state: RootState) =>
  state.displayReducer.orthCamStatus;

export const displayReducer = displaySlice.reducer;
