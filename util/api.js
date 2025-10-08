const API_KEY = process.env.PARCEL_PUBLIC_API_KEY;

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};
