import type { LocationResponseType } from "@/types/location-response";
import { location_api } from "./location.instance";

export const getLocation = async (position: GeolocationPosition) =>
  await location_api.get<LocationResponseType>(`${position.coords?.latitude},${position.coords?.longitude}.json?`, {
      params: {
          language: 'EN'
      }
  });