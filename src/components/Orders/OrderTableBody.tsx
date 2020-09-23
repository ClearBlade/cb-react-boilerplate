import { CircularProgress, TableCell, TableRow } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useEffect } from "react";
import { useOrders } from "./hooks";

export const OrderTableBody: React.FC = () => {
  const { start, result, error, started } = useOrders();
  useEffect(() => {
    start();
  }, [start]);
  if (error) {
    return <Alert severity="error">Uh oh! Failed to fetch orders :(</Alert>;
  }
  if (started) {
    return <CircularProgress />;
  }
  if (result) {
    return (
      <>
        {result.map((row) => (
          <TableRow key={row.item_id}>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.ship_to}</TableCell>
            <TableCell>{row.payment_method}</TableCell>
            <TableCell align="right">{row.sale_amount}</TableCell>
          </TableRow>
        ))}
      </>
    );
  }
  return null;
};
