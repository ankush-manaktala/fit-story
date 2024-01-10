import { WelcomeSection } from "../../utils/Constants/constants";
import * as types from "./actionTypes";

const initialState = {
  loading: false,
  questions: [],
  header: [],
  imageCarousel: [],
  blogs: [],
  disclaimer: null,
  footer: [],
};

const welcomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.WELCOME_SUCCESS: {
      const header = action.payload?.find(
        (x) => x.type === WelcomeSection.Header
      )?.elements;
      const imageCarousel = action.payload?.find(
        (x) => x.type === WelcomeSection.ImageCarousel
      )?.elements;
      const blogs = action.payload?.find(
        (x) => x.type === WelcomeSection.Blogs
      )?.elements;
      const disclaimer = action.payload?.find(
        (x) => x.type === WelcomeSection.Disclaimer
      )?.elements[0]?.title;
      const footer = action.payload?.find(
        (x) => x.type === WelcomeSection.Footer
      )?.elements;

      return {
        ...state,
        loading: true,
        header,
        imageCarousel,
        blogs,
        disclaimer,
        footer,
      };
    }
    case types.WELCOME_ERROR: {
      return {
        ...state,
        loading: true,
        header: [],
        imageCarousel: [],
        blogs: [],
        disclaimer: [],
        footer: [],
      };
    }
    case types.QUESTIONS_SUCCESS: {
      return {
        ...state,
        loading: true,
        questions: action.payload,
      };
    }
    case types.QUESTIONS_ERROR: {
      return {
        ...state,
        questions: [],
      };
    }
    default:
      return state;
  }
};

export default welcomeReducer;
