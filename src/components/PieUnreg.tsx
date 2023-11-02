"use client";
import { FC, useState } from "react";
import { ResponsivePie } from "@nivo/pie";
import Anomolies from "./Anomolies";
import Compliance from "./Compliance";
import Unregistered from "./Unregistered";
import DevList from "./DevList";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

interface PieProps {
  unreg: any;
}

const Pie: FC<PieProps> = ({ unreg }: PieProps) => {
  //console.log(unreg);
  const [selectPriority, setSelectPriority] = useState("");
  // Create an object to count priority occurrences
  const deviceCounts: any = { Server: 0, Node: 0, Unregistered: 0 };
  const deviceColorMap: any = {
    Unregistered: "#5A5A5A", // Yellow
    Server: "#b900ff", // Green
    Node: "hsl(120, 100%, 60%)", 
  };

  for (const item of unreg) {
    if (item.DTYPE === "Unregistered") {
      deviceCounts["Unregistered"]++;
    } else if(item.DTYPE == "Node") {
      deviceCounts["Node"]++;
    } else if(item.DTYPE == "Server") {
      deviceCounts["Server"]++;
    }
  }

  //console.log(deviceCounts);
  // Transform the counts object into the desired format
  const data2 = Object.keys(deviceCounts).map((priority) => ({
    color: deviceColorMap[priority] || "hsl(120, 100%, 50%)",
    id: priority,
    label: priority,
    value: deviceCounts[priority],
  }));

  //console.log(data2);

  const handlePieClick = (d: any, e: any) => {
    e.stopPropagation();
    //console.log(d);
    setSelectPriority(d.id as string);
  };
  const MyResponsivePie = () => (
    <ResponsivePie
      data={data2}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      colors={({ id, data }) => data["color"]}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      onClick={handlePieClick}
      enableArcLinkLabels={false}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#ffffff"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      //   defs={[
      //     {
      //       id: "dots",
      //       type: "patternDots",
      //       background: "inherit",
      //       color: "rgba(255, 255, 255, 0.3)",
      //       size: 4,
      //       padding: 1,
      //       stagger: true,
      //     },
      //     {
      //       id: "lines",
      //       type: "patternLines",
      //       background: "inherit",
      //       color: "rgba(255, 255, 255, 0.3)",
      //       rotation: -45,
      //       lineWidth: 6,
      //       spacing: 10,
      //     },
      //   ]}
      //   fill={[
      //     {
      //       match: {
      //         id: "ruby",
      //       },
      //       id: "dots",
      //     },
      //     {
      //       match: {
      //         id: "c",
      //       },
      //       id: "dots",
      //     },
      //     {
      //       match: {
      //         id: "go",
      //       },
      //       id: "dots",
      //     },
      //     {
      //       match: {
      //         id: "python",
      //       },
      //       id: "dots",
      //     },
      //     {
      //       match: {
      //         id: "scala",
      //       },
      //       id: "lines",
      //     },
      //     {
      //       match: {
      //         id: "lisp",
      //       },
      //       id: "lines",
      //     },
      //     {
      //       match: {
      //         id: "elixir",
      //       },
      //       id: "lines",
      //     },
      //     {
      //       match: {
      //         id: "javascript",
      //       },
      //       id: "lines",
      //     },
      //   ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );

  const handleParentClick = (e: any) => {
    setSelectPriority("");
  };

  return (
    <div
      onClick={handleParentClick}
      className="h-[250px] cursor-pointer border flex relative justify-center rounded border-green-500"
    >
      {selectPriority === "Unregistered" ? (
        <Unregistered unreg={unreg} />
      ) : selectPriority === "Node" ? (
        <DevList data={unreg} filter="Node" />
      ) : selectPriority === "Server" ? (
        <DevList data={unreg} filter="Server" />
      ) : (
        <MyResponsivePie />
      )}
    </div>
  );
};

export default Pie;
