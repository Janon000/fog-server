"use client";

import { Icon } from "@iconify/react";
import { Uptime } from "./Uptime";

function Device({ data, deviceId }: { data?: any; deviceId?: string }) {
  const device = data["Devices"].find((item: any) => item.Id === deviceId);
  const version = data["Alerts"].find(
    (item: any) => item.DeviceID === deviceId
  );
  const uptime = data["Uptime"].find((item: any) => item.Id === deviceId);

  return (
    <div className="flex flex-wrap justify-center">
      <div className="m-5 bg-[#0E2162] h-[400px] w-[400px] rounded-lg flex flex-col justify-center items-center text-white">
        <div className="">
          <Icon height={"100px"} className="mx-1" icon="ion:bulb-outline" />
        </div>
        <div>Name: {device.Name}</div>
        <div>IP: {device.IP}</div>
        <div>Location: {device.Location}</div>
        <div>Site: {device.Room}</div>
        <div>Status:{device.Status}</div>
      </div>
      <div className="m-5 bg-[#0E2162] h-[400px] w-[400px] rounded-lg flex flex-col justify-center items-center text-white">
        <div className="flex flex-col">
          <div>Registered:{device.Registered}</div>
          <div>Version: {version.Current}</div>
          <button className="bg-blue-600 text-white rounded p-1 m-1">
            Check for Update
          </button>
          <button className="bg-red-600 text-white rounded p-1 m-1">
            Reset
          </button>
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
