
import DeviceTable from "@/components/DeviceTable";
import { excelToObject } from "@/libs/ExcelToData";
import { useExcelStore } from "@/state/deviceData";


export default async function Home() {
  const data = await excelToObject()

  return (  
    <main className="">
      <div className="mx-2">
        <div className="text-[2.5rem] text-center">Device List</div>
        {data.Devices.length===0 ? (<>Loading..</>):(<DeviceTable data={data['Devices']}/>)}
        {/* <DeviceTable data={data['Devices']}/> */}
      </div>
    </main>
  );
}
