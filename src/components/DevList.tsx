"use client"

import { useRouter } from "next/navigation";

type Props = {
  data?: any;
  filter: string;
};
function DevList({ data, filter }: Props) {
  const router = useRouter()
  const data2 = data.filter((row: any) => row.DTYPE === filter);

  return (
    <div className="text-sm overflow-y-scroll ">
      {data2.map((row: any, i: any) => (
        <div
          key={i}
          className="flex flex-col bg-[#091239] shadow mx-10 my-2 p-2 cursor-pointer rounded-lg"
          onClick={(e)=>router.push(`/devices/${row.Id}`)}
        >
          <div className="flex flex-col justify-between">
            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">{row.Id}</p>
            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">{row.IP}</p>
            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">{row.Location}</p>
          </div>
          <div>{row.Status === "Online" ? (<p className="text-[#42A422]">Online</p>):(<p className="text-[#FF0000]">Offline</p>)}</div>
          <p>{row.AlertMessage}</p>
        </div>
      ))}
    </div>
  );
}

export default DevList;
