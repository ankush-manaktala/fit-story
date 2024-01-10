/**
 API Mocking process
 */
 import _meals from "./dummyWelcome.json";
 const Welcome = {
    getWelcomeData: (getFrom) => getFrom(_meals),
  };
 export default Welcome;
 