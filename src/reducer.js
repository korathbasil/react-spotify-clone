export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  null: null,
  token:
    "BQAJS32dILBziXFZV9Jw-7ZRV3YTYCDBD1viIKwbk5XdDJ_K3iDU61qbx4Tww7jyZac3WIhjeH6Dq5VoRLwQqXf9JZxdjmz29ZoMnXxyjD8GQ3eLfIBCmJyJlxmsGrqO5zYmKb_yxrDrerBehFRLPzXVtEf4ac5irNL4S01nx7_DBjp3",
  playlists: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};
