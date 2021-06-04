import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTemplates } from "../api";
import { data } from "../utility/data";
// const url =
//   "https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates";

export const fetchTemplates = createAsyncThunk(
  "template/getList",
  async (_, { rejectWithValue }) => {
    try {
      const list = await getTemplates();
      return list;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

const templates = createSlice({
  name: "template",
  initialState: {
    list: data,
    status: "",
    error: "",
    currentRequestId: "",
    filterd: data ? data : [],
  },
  reducers: {
    getCategories: (state, { payload }) => {
      state.filterd = state.list.filter((item) =>
        item.category.includes(payload)
      );
    },
    getDate: (state, { payload }) => {
      state.filterd = state.filterd.sort((a, b) => {
        if (payload === "Descending") {
          return new Date(a.created) - new Date(b.created);
        } else {
          return new Date(b.created) - new Date(a.created);
        }
      });
    },
    getByOrder: (state, { payload }) => {
      state.filterd = state.filterd.sort((a, b) => {
        if (payload === "Descending") {
          return b.name - a.name;
        } else {
          return a.name - b.name;
        }
      });
    },
  },

  extraReducers: {
    [fetchTemplates.pending]: (state, { meta }) => {
      state.status = meta.requestStatus;
      state.currentRequestId = meta.requestId;
    },
    [fetchTemplates.fulfilled]: (state, { meta, payload }) => {
      if (meta.requestId === state.currentRequestId) {
        state.currentRequestId = meta.requestId;
        state.list = payload;
        state.filterd = payload;
        state.status = meta.requestStatus;
      }
    },
    [fetchTemplates.rejected]: (state, { meta, error, payload }) => {
      if (meta.requestId === state.currentRequestId) {
        state.status = meta.requestStatus;
        state.error = error;
        state.currentRequestId = meta.requestId;
      }
    },
  },
});

export const { getCategories, getByOrder, getDate } = templates.actions;

export default templates.reducer;
