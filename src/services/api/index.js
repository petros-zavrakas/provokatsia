import data from "./database/data.json";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchData = type =>
  delay(500).then(() => {
    if (!data[type] || data[type].length < 1)
      throw new Error(`No data found of type "${type}"`);

    return data[type];
  });
