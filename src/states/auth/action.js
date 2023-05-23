import api from '../../utils/api';

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

function setAuthUserActionCreator(authUser) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
}

function unsetAuthUserActionCreator() {
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: {
      authUser: null,
    },
  };
}

function asynAuthUser({ email, password }) {
  return async (dispatch) => {
    try {
      const token = await api.login({ email, password });

      api.putAccessToken(token);

      console.log(localStorage.getItem('accessToken'));

      const user = await api.getOwnProfile();
      // const response = await fetch('https://forum-api.dicoding.dev/v1/users/me', {
      //   headers: {
      //     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      //   }
      // });
      // const responseJson = await response.json();
      // const { data: { user }} = responseJson;
      dispatch(setAuthUserActionCreator(user));
    } catch (err) {
      alert(err.message);
    }
  };
}

function asyncUnsetAuthUser() {
  return (dispatch) => {
    dispatch(unsetAuthUserActionCreator());
    api.putAccessToken('');
  };
}

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asynAuthUser,
  asyncUnsetAuthUser,
};