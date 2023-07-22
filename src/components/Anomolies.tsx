import React from "react";

type Props = {
  anomolies?: any;
};
function Anomolies({ anomolies }: Props) {
  const data = anomolies.filter((row: any) => row.AnalyticModule === "Anomaly");

  return (
    <div className="text-sm overflow-y-scroll ">
      {data.map((row: any, i: any) => (
        <div
          key={i}
          className="flex flex-col bg-[gray-50] shadow mx-10 my-2 p-2 cursor-pointer bg-white "
        >
          <div className="flex justify-between">
            <p>{row.Name}</p>
            {row.Priority === "Low" ? (
              <p className="rounded bg-yellow-400 text-white p-1">{row.Priority}</p>
            ) : row.Priority === "Medium" ? (
              <p className="rounded bg-orange-400 text-white p-1">{row.Priority}</p>
            ) : (
              <p className="rounded bg-red-600 text-white p-1">{row.Priority}</p>
            )}
          </div>
          <p>{row.AlertMessage}</p>
        </div>
      ))}
    </div>
  );
}

export default Anomolies;
