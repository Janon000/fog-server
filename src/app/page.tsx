
import DeviceTable from "@/components/DeviceTable";
import { excelToArray } from "@/libs/excelToArray";


export default async function Home() {
  // const data = await excelToArray()
  return (
    <main className="">
      <div className="mx-2">
        <div className="text-[2.5rem]">Device List</div>
        <DeviceTable />
      </div>
    </main>
  );
}
