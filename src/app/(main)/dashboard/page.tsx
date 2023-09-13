import Anomolies from "@/components/Anomolies";
import Compliance from "@/components/Compliance";
import { Uptime } from "@/components/Uptime";
import { excelToObject } from "@/libs/ExcelToData";
import Network from "@/components/Network";
import Unregistered from "@/components/Unregistered";
import Pie from "@/components/Pie";
import PieComply from "@/components/PieComply";
import PieUnreg from "@/components/PieUnreg";


async function Stats() {
  const data = await excelToObject( );
  return (
    <div className="h-full bg-[#0A133A]">
      <div className="flex flex-wrap justify-center text-[#DDDFE3]">
        <div className=" shadow-lg rounded-lg h-[300px] m-5 p-2 bg-[#0E2162] w-[500px] 3xl:flex-grow 3xl:mx-8">
          <div className="w-full text-center font-semibold">Network</div>
          <Network network={data["Network"]} />
        </div>
        <div className=" shadow-lg rounded-lg h-[300px] w-[500px] m-5 p-2 flex flex-col bg-[#0E2162] ">
          <div className="w-full text-center font-semibold">Uptime</div>
          <Uptime uptime={data["Uptime"]} />
        </div>
        <div className=" shadow-lg rounded-lg h-[300px] w-[500px] m-5 p-2 flex flex-col bg-[#0E2162] ">
          <div className="w-full text-center font-semibold">Anomalies</div>
          <Pie anomolies={data["Alerts"]}/>
        </div>
        <div className=" shadow-lg rounded-lg h-[300px] w-[500px] m-5 p-2 flex flex-col bg-[#0E2162] ">
          <div className="w-full text-center font-semibold">Compliance</div>
          <PieComply compliance={data["Alerts"]} />
        </div>
        <div className=" shadow-lg rounded-lg h-[300px] w-[500px] m-5 p-2 flex flex-col bg-[#0E2162] ">
          <div className="w-full text-center font-semibold">Devices</div>
          <PieUnreg unreg={data["Devices"]} />
        </div>
        
      </div>
    </div>
  );
}

export default Stats;
