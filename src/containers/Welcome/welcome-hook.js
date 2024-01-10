import { useEffect, useState } from "react";
import { useReduxApi } from "../../hooks";
import { useSelector } from "react-redux";
import { getQuestions } from "../../store/welcome/action";

export const useWelcome = () => {
  const imageCarousel = useSelector((state) => state.welcome?.imageCarousel);
  const questionsData = useSelector((state) => state.welcome?.questions);
  const blogsData = useSelector((state) => state.welcome?.blogs);

  const { dispatchApi } = useReduxApi();
  const [questions, setQuestions] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);


  const getQuestionsData = () => {
    dispatchApi(getQuestions);
  };
  useEffect(() => {
    if (questionsData?.length > 0) {
      setQuestions(questionsData);
    }
  }, [questionsData]);

  return {
    questions,
    imageCarousel,
    isModalVisible,
    blogsData,
    getQuestionsData,
    setIsModalVisible
  };
};
