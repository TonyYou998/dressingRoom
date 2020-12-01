let initialState = {
  defaultTopClothes: "./images/allbody/bikini_branew.png",
  defaultBotClothes: "./images/allbody/bikini_pantsnew.png",
  topclothes: "",
  botclothes: "",
  shoes: "",
  handbags: "",
  necklaces: "",
  hairstyle: "",
  background: "",
};
const ModelReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CLOTH":
      state[action.payload.type] = action.payload.img;
      return { ...state };
    case "SET_NAKED":
      state.topclothes = action.payload.img;
      state.botclothes = action.payload.img;
      state.shoes = action.payload.img;
      state.handbags = action.payload.img;
      state.handbags = action.payload.img;
      state.necklaces = action.payload.img;
      state.defaultTopClothes = action.payload.img;
      state.defaultBotClothes = action.payload.img;
    default:
      return { ...state };
  }
};
export default ModelReducer;
