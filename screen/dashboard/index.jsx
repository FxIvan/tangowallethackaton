"use client";

import AmountAndButtons from "app/components/dashboard/AmountAndButtons";
import History from "app/components/dashboard/History";

export default function ScreenDashboard() {
  return (
    <div className="flex flex-col h-screen">
      <AmountAndButtons />
      <History />
    </div>
  );
}
