import {useDispatch} from 'react-redux';
export const useReduxApi = () => {

  const dispatch = useDispatch();

  const dispatchApi = async (fun, request) => {
    let _resConfig = {};
    _resConfig.API_URL = process.env.BASE_URL;
    _resConfig.ENVIRONMENT = process.env.ENVIRONMENT;

    // if (!request?.skipToken) {
    //   await Storage.getLocalItem('accessToken').then(token => {
    //     _resConfig.TOKEN = token;
    //   });
    // }
    return dispatch(fun(request, _resConfig));
  };

  return {
    dispatch,
    dispatchApi,
  };
};
