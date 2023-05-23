import api from "../../utils/api"

const ActionType = {
   RECEIVE_THREADS: 'RECEIVE_THREADS'
}

function receiveThreadsActionCreator(threads) {
   return {
      type: ActionType.RECEIVE_THREADS,
      payload: {
         threads,
      }
   }
}

function asyncReceiveThreads() {
   return async (dispatch) => {
      try {
         const threads = await api.getThreads();
         dispatch(receiveThreadsActionCreator(threads));
      } catch (err) {
         alert(err.message);
      }
   }
}

export {
   ActionType,
   receiveThreadsActionCreator,
   asyncReceiveThreads,
}