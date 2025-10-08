import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.API_KEY;

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};
