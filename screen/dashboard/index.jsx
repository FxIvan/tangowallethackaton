"use client";

import AmountAndButtons from "app/components/dashboard/AmountAndButtons";
import History from "app/components/dashboard/History";

export default function ScreenDashboard({ userInfo }) {
  return (
    <div className="flex flex-col justify-start items-start self-stretch flex-grow h-[97vh]  gap-8 p-4">
      <AmountAndButtons userInfo={userInfo} />
      <History />
    </div>
  );
}
