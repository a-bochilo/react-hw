import { combineReducers } from "redux";

const initialFormDataState = {
  formData: {
    name: "",
    email: "",
    phone: "",
    message: "",
  },
};

const formDataReducer = (state = initialFormDataState, action) => {
  switch (action.type) {
    case "FORM_DATA":
      return { ...state, formData: action.payload };
    default:
      return state;
  }
};

export const rootReducer = combineReducers(
  formDataReducer;
);