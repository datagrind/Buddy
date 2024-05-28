

const photoExtraReducers = (getUrlResultActionTypes) => ({
  [getUrlResultActionTypes.pending]: (state) => {
    state.getUrlStatus = "loading";
    state.getUrlError = null;
  },
  [getUrlResultActionTypes.fulfilled]: (state, action) => {
    state.getUrlStatus = "succeeded";
    state.getUrlError = null;
    state.data.photos = action.payload;
  },
  [getUrlResultActionTypes.rejected]: (state, action) => {
    state.getUrlStatus = "failed";
    state.getUrlError = action.error.message;
  },
});

export default photoExtraReducers;
