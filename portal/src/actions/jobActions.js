import axios from "axios";

export const addOpening = (jobData) => {
  axios
    .post("/api/openings/", jobData)
};