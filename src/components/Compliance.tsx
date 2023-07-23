import React from "react";

type Props = {
  compliance?: any;
};
function Compliance({ compliance }: Props) {
  const data = compliance.filter(
    (row: any) =>
      row.AnalyticModule === "Compliance" &&
      row.AlertMessage === "Firmware Upgrade Available"
  );

  return (
    <div className="text-sm overflow-y-scroll ">
      {data.map((row: any, i: any) => (
        <div
          key={i}
          className="flex justify-center items-center bg-[gray-50] shadow mx-10 my-2 p-4 cursor-pointer bg-[#091239] rounded-lg"
        >
          <p>{row.Name}</p>
          <div className="flex justify-between items-center mx-5">
            <p className="mr-">Version {row.Current}</p>
            <div className="bg-blue-400 rounded text-white mx-2 shadow p-1">Upgrade</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Compliance;
