import AlertTable from '@/components/AlertTable'
import { excelToObject } from '@/libs/ExcelToData'
import React from 'react'

async function page({ params }: { params: { id: string } }) {

    
 const data = await excelToObject()
 const idData = data['Alerts']
 const test = idData.filter((row)=>row.DeviceID === params.id)
 console.log(test)

  return (
    <main className="">
      <div className="mx-2">
        <div className="text-[2.5rem] text-center">Alert Log</div>
        <AlertTable data={test}/>
      </div>
    </main>
  )
}

export default page