export interface Order {
  item_id: string;
  date: string;
  name: string;
  sale_amount: number | null;
  ship_to: string;
  payment_method: string;
}
