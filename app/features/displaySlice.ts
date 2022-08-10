import { RootState } from "../store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchStatus } from "./showComponentAPI";

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
};

const initialState: InitState = {
  path: undefined,
  orthCamStatus: false,
  showComponents: false,
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
} = displaySlice.actions;

export const selectPath = (state: RootState) => state.displayReducer.path;
export const selectShowComponent = (state: RootState) =>
  state.displayReducer.showComponents;

export const selectOrthCam = (state: RootState) =>
  state.displayReducer.orthCamStatus;

export const displayReducer = displaySlice.reducer;
