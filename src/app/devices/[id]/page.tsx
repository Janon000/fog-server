import Device from "@/components/Device"
import { excelToObject } from "@/libs/ExcelToData"

async function DevicePage({ params }: { params: { id: string } }) {

  const data = await excelToObject()
  const deviceId = params.id

  return (
    <div className="flex w-full h-full justify-center items-center bg-[#091239]">
      <Device data={data} deviceId={deviceId}/>
    </div>
  )
}

export default DevicePage