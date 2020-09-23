import { useAsyncTask } from "react-hooks-async";
import { fetchOrders } from "../../utils/services";

export function useOrders() {
  return useAsyncTask(fetchOrders);
}
