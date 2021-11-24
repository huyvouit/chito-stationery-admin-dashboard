import {
  MESSAGES_LOADED_FAIL,
  MESSAGES_LOADED_SUCCESS,
  FIND_MESSAGE,
} from "../Utils/constants";

export const MessageReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case MESSAGES_LOADED_SUCCESS:
      return {
        ...state,
        messages: payload.messages,
        messagesLoading: false,
        maxPage: payload.maxPage,
      };

    case MESSAGES_LOADED_FAIL:
      return {
        ...state,
        messages: [],
        messagesLoading: false,
      };

    case FIND_MESSAGE:
      return {
        ...state,
        message: payload,
      };

    default:
      return state;
  }
};
