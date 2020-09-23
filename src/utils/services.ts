import { Order } from "./types";

export const fetchOrders = (): Promise<Order[]> => {
  return new Promise((res, rej) => {
    window.CB_PORTAL.ClearBlade.Collection<Order>({
      collectionName: "orders",
    }).fetch(window.CB_PORTAL.ClearBlade.Query(), (err, data) => {
      if (err) {
        rej(data);
      } else {
        res(data.map((d) => d.data));
      }
    });
  });
};
