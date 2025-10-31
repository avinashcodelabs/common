import { Subjects } from "./subjects";

export interface OrderCancelEvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    ticket: {
      id: string;
    };
  };
}
