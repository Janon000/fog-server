import { excelToObject } from "@/libs/ExcelToData";


async function Alerts() {

  const data = await excelToObject()

  return (
    <>
      <div>{JSON.stringify(data['Alerts'])}</div>
    </>
  );
}

export default Alerts;
