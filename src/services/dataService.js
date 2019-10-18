import * as api from "./api";

const getData = type => {
  return api.fetchData(type);
};

const getDataById = id => {
  return api.fetchData().filter(item => item.id === id);
};

export default { getData, getDataById };
