import AlertTable from "@/components/AlertTable";
import { excelToObject } from "@/libs/ExcelToData";


async function Alerts() {

  const data = await excelToObject()

  return (
    <main className="">
      <div className="mx-2">
        <div className="text-[2.5rem] text-center">Alert Log</div>
        <AlertTable data={data['Alerts']}/>
      </div>
    </main>
  );
}

export default Alerts;