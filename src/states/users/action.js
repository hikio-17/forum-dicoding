import api from "../../utils/api"

const ActionType = {
   RECEIVE_USERS: 'RECEIVE_USERS',
}

function receiveUsersActionCreator(users) {
   return {
      type: ActionType.RECEIVE_USERS,
      payload: {
         users
      }
   }
}

function asyncReceiveUsers() {
   return async (dispatch) => {
      try {
         const users = await api.getAllUsers();
         dispatch(receiveUsersActionCreator(users));
      } catch (err) {
         alert(err.message);
      }
   }
}

function asyncReceiveUser({ name, email, password }) {
   return async () => {
      try {
         await api.register({ name, email, password });
      } catch (err) {
         alert(err.message)
      }
   }
}

export {
   ActionType,
   receiveUsersActionCreator,
   asyncReceiveUser,
   asyncReceiveUsers
}