import axios from "axios";

export default {
  getSuggestions(word) {
    return axios.get(word).then(response => {
      return response.data;
    });
  }
};
