import ApiMethod from "../ApiMethod";

export const AccountAPI = {
  getDummyData(headerConfig) {
    return ApiMethod.get(headerConfig, "");
  },
};
