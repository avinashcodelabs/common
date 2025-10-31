import { Subjects } from "./subjects";
import { OrderStatus } from "./types/order-status";

export interface OrderCreateEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    expiredAt: string;
    ticket: {
      id: string;
      price: number;
    };
  };
}
