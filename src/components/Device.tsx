"use client";

import { Icon } from "@iconify/react";
import { Uptime } from "./Uptime";

function Device({ data, deviceId }: { data?: any; deviceId?: string }) {
  const device = data["Devices"].find((item: any) => item.Id === deviceId);
  //console.log(device)
  const alerts = data["Alerts"].find((item: any) => item.DeviceID === deviceId);
  const uptime = data["Uptime"].find((item: any) => item.Id === deviceId);

  const priorityClasses: any = {
    Low: "bg-yellow-400",
    Medium: "bg-orange-400",
    High: "bg-red-600",
  };

  const selectedClass = alerts
    ? priorityClasses[alerts.Priority] || "bg-red-600"
    : "bg-red-600";
  console.log(deviceId,device )
  return (
    <div className="flex flex-wrap justify-center">
      <div className="m-5 py-3 bg-[#0E2162] h-[460px] w-[400px] rounded-lg flex flex-col justify-center items-center text-white">
        <div className="">
          {device.Name.startsWith("Fog") ? (
            <Icon height={"100px"} className="mx-1" icon="uil:server" />
          ) : device.Name.startsWith("Cloud") ? (
            <Icon height={"100px"} className="mx-1" icon="ic:twotone-cloud" />
          ) : (
            <Icon height={"100px"} className="mx-1" icon="ri:device-line" />
          )}
        </div>
        <div className="grid grid-cols-2 gap-x-4">
          <div className="text-right font-bold">Name:</div>
          <div>{device.Name}</div>
          <div className="text-right font-bold">IP:</div>
          <div>{device.IP}</div>
          {!device.Name.startsWith("Cloud") && (
            <>
              <div className="text-right font-bold">Registered:</div>
              <div>{device.Registered}</div>
            </>
          )}

          <div className="text-right font-bold">Layer:</div>
          <div>{device.Layer}</div>
          <div className="text-right font-bold">Location:</div>
          <div>{device.Location}</div>
          <div className="text-right font-bold">Site:</div>
          <div>{device.Room}</div>
          <div className="text-right font-bold">Status:</div>
          <div>{device.Status}</div>
          <div className="text-right font-bold">CPU %:</div>
          <div>{device.CPU}</div>
          <div className="text-right font-bold">Type:</div>
          <div>{device.Type}</div>
          <div className="text-right font-bold">{`Latency (ms):`}</div>
          <div>{device.Latency}</div>
          {!device.Name.startsWith("Cloud") && (
            <>
              <div className="text-right font-bold">Version:</div>
              <div>{alerts ? alerts.Current : "Unknown"}</div>
            </>
          )}
        </div>
        {!device.Name.startsWith("Cloud") && (
          <>
            <button className="bg-blue-600 text-white rounded p-1 m-1">
              Check for Update
            </button>
            <button className="bg-red-600  text-white rounded p-1 m-1">
              Reset
            </button>
          </>
        )}
      </div>
      <div className="m-5 bg-[#0E2162] h-[460px] w-[400px] rounded-lg flex flex-col items-center text-white">
        {device.Name.startsWith("Cloud") ? (
          <div className="">
            <div className="my-5 text-center">Services</div>
            <div className=" bg-[#091239] text-sm w-[300px] shadow p-2 rounded divide-y-2 divide-slate-400/25 ">
              <div className="py-1">Data Storage: Running</div>
              <div className="py-1">Analytics: Running </div>
              <div className="py-1">Remote Control: Running </div>
            </div>
          </div>
        ) : (
          device.Name.startsWith("Fog") && (
            <div className="">
              <div className="my-5 text-center">Services</div>
              <div className=" bg-[#091239] text-sm w-[300px] shadow p-2 rounded divide-y-2 divide-slate-400/25 ">
                <div className="py-1">Data Processing: Running</div>
                <div className="py-1">Automation: Running </div>
                <div className="py-1">Device Control: Running </div>
              </div>
            </div>
          )
        )}
        <div className="my-5">Anomaly History</div>
        <div className=" bg-[#091239] text-sm w-[300px] shadow  p-2 rounded divide-y-4 divide-slate-400/25">
          {alerts && alerts.AnalyticModule === "Anomaly" ? (
            <div>
              {" "}
              <div className="flex justify-between mb-3">
                <p>{alerts.Name}</p>
                <p className={`rounded text-white p-1 ${selectedClass}`}>
                  {alerts.Priority}
                </p>
              </div>
              <div className="py-2">
                <p className="font-bold">Description</p>
                <p>{alerts.AlertMessage}</p>
              </div>
              <div className="py-2">
                <p className="font-bold">Time Seen</p>
                <p>{alerts.TimeStamp}</p>
              </div>
            </div>
          ) : (
            <p className="text-center">None Found</p>
          )}
        </div>
      </div>
      <div
        id="uptime"
        className="m-5 bg-[#0E2162] h-[400px] w-[845px] rounded-lg flex flex-col justify-center items-center text-white"
      >
        <p>Uptime</p>
        <Uptime uptime={[uptime]} />
        <div className="flex">
          <p className="text-green-500 mx-2">Uptime %{uptime["UpPercent"]}</p>
          <p className="text-green-500">Avg % 89</p>
        </div>
        <div className="flex">
          {" "}
          <p className="text-red-500 mx-2">Downtime %{uptime["DownPercent"]}</p>
          <p className="text-red-500">Avg % 10</p>
        </div>
      </div>
    </div>
  );
}

export default Device;
