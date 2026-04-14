"use client";
import ClientStackedCards from "./variants/ClientsStackedCards";
import ClientSlider from "./variants/ClientSlider";
import { client_option } from "@/data/config";

const Clients = () => {
  return client_option === "stacked-sticky-cards" ? (
    <ClientStackedCards />
  ) : (
    <ClientSlider />
  );
};

export default Clients;
