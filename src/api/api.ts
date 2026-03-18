import axios from "axios";

const API = axios.create({
  baseURL: "https://mahisticketbookingservice.onrender.com/",
});
type CreateShowPayload = {
  name: string;
  start_time: string;
  total_seats: number;
};

export const getShows = () => API.get("/shows");
export const createShow = (data: CreateShowPayload) =>
  API.post("/shows", data, { headers: { role: "admin" } });
export const getSeats = (id: string) => API.get(`/shows/${id}/seats`);
export const bookSeats = (data: { show_id: number; seats: number }) =>
  API.post("/bookings", data);