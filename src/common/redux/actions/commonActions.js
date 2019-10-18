export const fetchDataAction = action => {
  const actionTemplate = {
    type: "",
    dataType: ""
  };

  return { DATA_ACTION: { ...actionTemplate, ...action } };
};
