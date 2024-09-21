"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Database } from "@/types/supabase";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<
  Database["public"]["Tables"]["purchase_orders"]["Row"]
>[] = [
  {
    accessorKey: "po_number", // PO number for purchase orders
    header: "PO Number",
  },
  {
    accessorKey: "vendor", // Vendor for purchase orders
    header: "Vendor",
  },
  {
    accessorKey: "item", // Item name for purchase orders
    header: "Item",
  },
  {
    accessorKey: "quantity_ordered", // Quantity ordered for purchase orders
    header: "Quantity Ordered",
  },
  {
    accessorKey: "price", // Price per item for purchase orders
    header: "Price",
    cell: (info) => `$${info.getValue()}`, // Format price as currency
  },
  {
    accessorKey: "total", // Total amount for purchase orders
    header: "Total",
    cell: (info) => `$${info.getValue()}`, // Format total as currency
  },
  {
    accessorKey: "delivery_date", // Delivery date for purchase orders
    header: "Delivery Date",
    cell: (info) => new Date(info.getValue() as string).toLocaleDateString(), // Format date
  },
];
