"use client";

import { useRouter } from "next/navigation";

type Props = {
  anomolies?: any;
  type?: string;
};
function Anomolies({ anomolies, type }: Props) {
  const router = useRouter();
  const data = anomolies.filter((row: any) => {
    if (type) {
      // Check if 'type' is truthy
      return row.AnalyticModule === "Anomaly" && row.Priority === type;
    } else {
      // If 'type' is falsy, only filter by 'AnalyticModule'
      return row.AnalyticModule === "Anomaly";
    }
  });
  console.log(data);
  return (
    <div className="text-sm overflow-y-scroll w-full ">
      {data.map((row: any, i: any) => (
        <div
          key={i}
          className="flex flex-col bg-[#091239] shadow mx-10 my-2 p-2 cursor-pointer rounded-lg"
          onClick={(e) => router.push(`/devices/${row.DeviceID}`)}
        >
          <div className="flex justify-between">
            <p>{row.Name}</p>
            {row.Priority === "Low" ? (
              <p className="rounded bg-yellow-400 text-white p-1">
                {row.Priority}
              </p>
            ) : row.Priority === "Medium" ? (
              <p className="rounded bg-orange-400 text-white p-1">
                {row.Priority}
              </p>
            ) : (
              <p className="rounded bg-red-600 text-white p-1">
                {row.Priority}
              </p>
            )}
          </div>
          <p>{row.AlertMessage}</p>
        </div>
      ))}
    </div>
  );
}

export default Anomolies;
