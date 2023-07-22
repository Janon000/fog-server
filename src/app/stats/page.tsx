import Anomolies from "@/components/Anomolies";
import Circle from "@/components/Swarm";
import Compliance from "@/components/Compliance";
import Uptime from "@/components/Uptime";
import { excelToObject } from "@/libs/ExcelToData";
import Swarm from "@/components/Swarm";

async function Stats() {
  const data = await excelToObject();
  return (
    <div className="h-full bg-gray-200">
      <div className="flex flex-wrap justify-center">
        <div className="border shadow-lg rounded h-[300px] w-[500px] m-5 p-2 flex flex-col bg-white ">
          <div className="w-full text-center font-semibold">Uptime</div>
          <Uptime uptime={data["Uptime"]} />
        </div>
        <div className="border shadow-lg rounded h-[300px] w-[500px] m-5 p-2 flex flex-col bg-white">
          <div className="w-full text-center font-semibold">Recent Anomolies</div>
          <Anomolies anomolies={data["Alerts"]} />
        </div>
        <div className="border shadow-lg rounded h-[300px] w-[500px] m-5 p-2 flex flex-col bg-white ">
          <div className="w-full text-center font-semibold">Compliance</div>
          <Compliance compliance={data["Alerts"]} />
        </div>
        <div className="border shadow-lg rounded h-[300px] m-5 p-2 bg-white w-[500px] 3xl:flex-grow 3xl:mx-8">
          <div className="w-full text-center font-semibold">Network</div>
          <Swarm />
        </div>
      </div>
    </div>
  );
}

export default Stats;
