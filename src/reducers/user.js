const INITIAL_STATE = {
  users: {},
  currentUser: null
};

const applySetUsers = (state, action) => ({
  ...state,
  users: action.users
});

const applySetAuthUser = (state, action) => ({
  ...state,
  currentUser: action.user
});

function userReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'USERS_SET': {
      return applySetUsers(state, action);
    }
    case 'CURRENT_USER_SET': {
      return applySetAuthUser(state, action);
    }
    default: return state;
  }
}

export default userReducer;