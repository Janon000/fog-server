import Anomolies from "@/components/Anomolies";
import Circle from "@/components/Swarm";
import Compliance from "@/components/Compliance";
import {Uptime} from "@/components/Uptime";
import { excelToObject } from "@/libs/ExcelToData";
import Swarm from "@/components/Swarm";

async function Stats() {
  const data = await excelToObject();
  return (
    <div className="h-full bg-[#0A133A]">
      <div className="flex flex-wrap justify-center text-[#DDDFE3]">
        <div className=" shadow-lg rounded-lg h-[300px] w-[500px] m-5 p-2 flex flex-col bg-[#0E2162] ">
          <div className="w-full text-center font-semibold">Uptime</div>
          <Uptime uptime={data["Uptime"]} />
        </div>
        <div className=" shadow-lg rounded-lg h-[300px] w-[500px] m-5 p-2 flex flex-col bg-[#0E2162]">
          <div className="w-full text-center font-semibold">
            Recent Anomolies
          </div>
          <Anomolies anomolies={data["Alerts"]} />
        </div>
        <div className=" shadow-lg rounded-lg h-[300px] w-[500px] m-5 p-2 flex flex-col bg-[#0E2162] ">
          <div className="w-full text-center font-semibold">Compliance</div>
          <Compliance compliance={data["Alerts"]} />
        </div>
        <div className=" shadow-lg rounded-lg h-[300px] m-5 p-2 bg-[#0E2162] w-[500px] 3xl:flex-grow 3xl:mx-8">
          <div className="w-full text-center font-semibold">Network</div>
          <Swarm network={data['Devices']}/>
        </div>
      </div>
    </div>
  );
}

export default Stats;
