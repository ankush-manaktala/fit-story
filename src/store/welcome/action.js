import * as types from "./actionTypes";
import DummyQuestions from "../../service/dummyData/dummyQuestions";
import dummyWelcome from "../../service/dummyData/dummyWelcome";

export const getWelcomeAction = (request, headerConfig) => {
  return async (dispatch) => {
    return await dummyWelcome.getWelcomeData((data)=>{
      if (data?.body?.widgets?.length > 0) {
        dispatch({
          type: types.WELCOME_SUCCESS,
          payload: data?.body?.widgets,
        });
       
      }else{
        dispatch({
          type: types.WELCOME_ERROR,
        });
      }
    })  
  };
};

export const getQuestions = (request, headerConfig) => {
  return async (dispatch) => {
    return await DummyQuestions.getQuestions((data)=>{
      if (data?.body?.length > 0) {
        dispatch({
          type: types.QUESTIONS_SUCCESS,
          payload: data?.body,
        });
       
      }else{
        dispatch({
          type: types.QUESTIONS_ERROR,
        });
      }
    })  
  };
};

