"use client";

import { Icon } from "@iconify/react";

function Device({ data, deviceId }: { data?: any; deviceId?: string }) {

  const device = data['Devices'].find((item:any) => item.Id === deviceId);
  const version = data['Alerts'].find((item:any) => item.DeviceID === deviceId);
  return (
    <div className="">
      <div className="bg-[#0E2162] h-[400px] w-[400px] rounded-lg flex flex-col justify-center items-center text-white">
        <div className="">
          <Icon height={"100px"} className="mx-1" icon="ion:bulb-outline" />
        </div>
        <div>Name: {device.Name}</div>
        <div>IP: {device.IP}</div>
        <div>Location: {device.Location}</div>
        <div>Site: {device.Room}</div>
        <div>Status:{device.Status}</div>
        <div>Registered:{device.Registered}</div>
        <div>Version: {version.Current}</div>
        
      </div>
    </div>
  );
}

export default Device;
