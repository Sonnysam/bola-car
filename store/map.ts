import { MapStore } from "@/types/type";
import { create } from "zustand";

const useMapStore = create<MapStore>(
  (set): MapStore => ({
    origin: { description: "", location: null },
    destination: { description: "", location: null },
    location: { description: "", location: null },
    travelTimeInformation: null,
    createMap: () => set((state) => state),
    updateMap: (payload) =>
      set({
        origin: {
          description: payload.origin.description,
          location: payload.origin.location,
        },
        destination: {
          description: payload.destination.description,
          location: payload.destination.location,
        },
        location: {
          description: payload.description,
          location: payload.origin.location,
        },
      }),
    updateTravelTimeInformation: (travelTimeInformation) =>
      set({ travelTimeInformation }),
    deleteMap: () =>
      set({
        origin: { description: "", location: null },
        destination: { description: "", location: null },
        location: { description: "", location: null },
        travelTimeInformation: null,
      }),
  })
);

export default useMapStore;
