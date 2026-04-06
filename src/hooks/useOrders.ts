import { useEffect, useState } from "react";
import type { OrderListItem } from "../models/order.model";
import { fetchOrder, fetchOrders } from "../api/order.api";

export const useOrders = () => {
  const [orders, setOrders] = useState<OrderListItem[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  useEffect(() => {
    fetchOrders().then((items) => {
      setOrders(items);
    });
  }, []);

  const selectOrderItem = (orderId: number) => {
    const target = orders.find((item) => item.id === orderId);
    if (!target) return;

    if (target.detail) {
      setSelectedItemId(orderId);
      return;
    }

    fetchOrder(orderId).then((detail) => {
      setSelectedItemId(orderId);
      setOrders((prev) =>
        prev.map((item) =>
          item.id === orderId ? { ...item, detail } : item
        )
      );
    });
  };

  return { orders, selectedItemId, selectOrderItem };
};
