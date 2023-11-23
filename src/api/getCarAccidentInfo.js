import axios from "axios";

const apiUrl =
  "001/Upload/25/opendataback/9059/1570/d5ecdffd-39cb-4b82-922c-1c908dd59709.json";

export const getCarAccidentInfo = async () => {
  try {
    const response = await axios.get('/api' + apiUrl);
    return response.data
  } catch (error) {
    console.error("[Get car accident Info failed]:", error);
  }
};
