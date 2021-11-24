import { createContext, useReducer, useState } from "react";
import { MessageReducer } from "../Reducer/message_reducer";
import {
  FIND_MESSAGE,
  MESSAGES_LOADED_FAIL,
  MESSAGES_LOADED_SUCCESS,
} from "../Utils/constants";
import messageApi from "../Api/message_api";

export const MessageContext = createContext();

const MessageContextProvider = ({ children }) => {
  // State
  const [messageState, dispatch] = useReducer(MessageReducer, {
    message: null,
    messages: [],
    messagesLoading: true,
    maxPage: null,
  });
  const [showMessageModal, setShowMessageModal] = useState(false);
  const getAllMessage = async (page) => {
    try {
      const response = await messageApi.getAllMessage(page);
      if (response.data) {
        dispatch({
          type: MESSAGES_LOADED_SUCCESS,
          payload: {
            messages: response.data.contacts,
            maxPage: response.data.maxPage,
          },
        });
      }
    } catch (err) {
      dispatch({ type: MESSAGES_LOADED_FAIL });
    }
  };

  const findMessage = (messageId) => {
    const message = messageState.messages.find(
      (message) => message._id === messageId
    );
    dispatch({ type: FIND_MESSAGE, payload: message });
  };

  // message context data
  const MessageContextData = {
    messageState,
    getAllMessage,
    findMessage,
    showMessageModal,
    setShowMessageModal,
  };

  return (
    <MessageContext.Provider value={MessageContextData}>
      {children}
    </MessageContext.Provider>
  );
};

export default MessageContextProvider;
