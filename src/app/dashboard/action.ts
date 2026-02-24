"use server";

import { db } from "@/db";
import { OrderStatus } from "@/generated/prisma/edge";

export default async function changeOrderStatus({
  id,
  newStatus,
}: {
  id: string;
  newStatus: OrderStatus;
}) {
  await db.order.update({
    where: { id },
    data: { status: newStatus },
  });
}
