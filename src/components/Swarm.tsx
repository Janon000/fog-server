"use client";
import { ResponsiveSwarmPlot } from "@nivo/swarmplot";
import { useRouter } from "next/navigation";

function getRandomInt(min:number, max:number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Swarm({ network }: { network?: any }) {
  const data = network.map((device: any, i: number) => ({
    ...device,
    Count: getRandomInt(10,20),
    group: device.Status === "Offline" ? 20 : 5,
  }));
  const groups = [
    ...new Set(data.map((device: { [key: string]: string }) => device.Room)),
  ] as string[];

  const router = useRouter();
  const handleNodeClick = (data: any) => {
    //console.log(data);
    router.push(`/devices/${data['id']}`)
  };

  const theme = {
    axis: {
      textColor: "#eee",
      fontSize: "14px",
      tickColor: "#eee",
    },
  };

  const MyResponsiveSwarmPlot = () => (
    <ResponsiveSwarmPlot
      data={data}
      onClick={(data) => handleNodeClick(data)}
      groups={groups}
      isInteractive={true}
      // onMouseEnter={(node, event)=>{node.color="#00000"}}
      groupBy={"Room"}
      id={"Name"}
      //layout="horizontal"
      value="Count"
      colors={["#00D100", "#FF0000"]}
      colorBy={"size"}
      // valueFormat="$.2f"
      // valueScale={{ type: 'linear', min: 0, max: 500, reverse: false }}
      size={{
        key: "group",
        values: [5, 20],
        sizes: [20, 35,],
      }}
      spacing={7}
      forceStrength={4}
      simulationIterations={100}
      borderColor={{
        from: "color",
        modifiers: [
          ["darker", 0.6],
          ["opacity", 0.5],
        ],
      }}
      margin={{ top: 80, right: 100, bottom: 80, left: 100 }}
      enableGridX={false}
      enableGridY={false}
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={null}
    />
  );
  return (
    <div className="h-[250px] cursor-pointer border flex justify-center rounded border-green-500">
      <MyResponsiveSwarmPlot />
    </div>
  );
}

export default Swarm;
