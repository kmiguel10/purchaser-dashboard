"use client";

import { useState, useEffect } from "react";
import { supabaseClient } from "../lib/supabaseClient";

export default function TestConnection() {
  const [testMessage, setTestMessage] = useState("");

  useEffect(() => {
    async function testSupabase() {
      try {
        // Test query: Fetch the current timestamp from Supabase
        const { data, error } = await supabaseClient
          .from("purchase_orders")
          .select("po_number");

        if (error) throw error;

        setTestMessage(
          `Connection successful! First PO number: ${data[0].po_number}`
        );
      } catch (error: unknown) {
        console.error("Error:", error);
        setTestMessage(`Connection failed: ${error}`);
      }
    }

    testSupabase();
  }, []);

  return (
    <div>
      <h1>Supabase Connection Test</h1>
      <div>{JSON.stringify(testMessage)}</div>
    </div>
  );
}
