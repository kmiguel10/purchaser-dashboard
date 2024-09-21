import { Database } from "@/types/supabase";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useEffect, useState } from "react";
import { supabaseClient } from "@/lib/supabaseClient";

export default function PurchaseOrderTable() {
  const [purchaseOrders, setPurchaseOrders] = useState<
    Database["public"]["Tables"]["purchase_orders"]["Row"][]
  >([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabaseClient
          .from("purchase_orders")
          .select("*");

        if (error) throw error;
        setPurchaseOrders(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={purchaseOrders} />
    </div>
  );
}
