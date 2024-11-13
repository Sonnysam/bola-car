import { Order, OrderStore } from "@/types/type";
import { create } from "zustand";

const useOrderStore = create<OrderStore>(
  (set): OrderStore => ({
    userInfo: {},
    // getOrderRequest: null,
    amount: null,
    truckType: null,
    location: null,
    amt: null,
    title: null,
    activeOrders: [],
    historyOrders: [],
    availableOrders: [],
    activeOrder: null,
    getOrders: (payload) =>
      set((state) => {
        const activeOrders: Order[] = [];
        const historyOrders: Order[] = [];
        const availableOrders = [...payload];

        payload.forEach((order, index) => {
          if (order.completed) {
            if (order.courierInfo.Uid === state.userInfo.Uid) {
              historyOrders.push(order);
            }
          } else {
            if (
              order.accept_ride &&
              order.courierInfo.Uid === state.userInfo.Uid
            ) {
              availableOrders.splice(index, 1);
              activeOrders.push(order);
            }
          }
        });

        return {
          activeOrders,
          historyOrders,
          availableOrders,
        };
      }),
    createOrder: () => set((state) => state),
    getOrderRequest: (payload) => set({ getOrderRequest: payload }),
    updateAvailableOrder: (payload) =>
      set((state) => ({
        availableOrders: state.availableOrders.filter(
          (_, index) => index !== payload.index
        ),
        activeOrders: [...state.activeOrders, payload.item],
      })),
    removeItem: (payload) =>
      set((state) => ({
        activeOrders: state.activeOrders.filter(
          (order) => order.uid !== payload.uid
        ),
      })),
    removeActiveOrder: () => set({ activeOrder: null, getOrderRequest: null }),
    setActiveOrder: (payload) => set({ activeOrder: payload }),
    deleteOrder: () => set((state) => state),
  })
);

export default useOrderStore;
