"use client"
import DeviceTable from "@/components/DeviceTable";


export default function Home() {
  return (
    <main className="">
      <div className="mx-2">
        <div className="text-[2.5rem]">Device List</div>
        <DeviceTable />
      </div>
    </main>
  );
}
