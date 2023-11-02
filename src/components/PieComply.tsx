"use client";
import { FC, useState } from "react";
import { ResponsivePie } from "@nivo/pie";
import Anomolies from "./Anomolies";
import Compliance from "./Compliance";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.



interface PieProps {
  compliance: any;
}

const Pie: FC<PieProps> = ({ compliance }: PieProps) => {
  
  const [selectPriority, setSelectPriority] = useState("")
  // Create an object to count priority occurrences
  const priorityCounts: any = { "Ok":0, "Compliance":0 };
  const priorityColorMap: any = {
    "Compliance": "hsl(50, 100%, 60%)", // Yellow
    "Ok": "hsl(120, 100%, 60%)", // Orange
  };

  for (const item of compliance) {
    const AnalyticModule = item.AnalyticModule;
    if (AnalyticModule == "Compliance") {
      priorityCounts["Compliance"]++;
    } else {
      priorityCounts["Ok"]++;
    }
  }
  
  
  // Transform the counts object into the desired format
  const data2 = Object.keys(priorityCounts).map((priority) => ({
    
    color: priorityColorMap[priority] || 'hsl(120, 100%, 50%)',
    id: priority,
    label: priority,
    value: priorityCounts[priority],
    
  }));

  //console.log(data2);

  const handlePieClick = (d:any, e:any)=>{
    e.stopPropagation()
    // console.log(d)
    setSelectPriority(d.id as string)
  }
  const MyResponsivePie = () => (
    <ResponsivePie
      data={data2}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      colors={({id, data}) => data['color']}
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

  const handleParentClick = (e:any) =>{
    setSelectPriority("")
  }
  
  return (
    <div onClick={handleParentClick}className="h-[250px] cursor-pointer border flex relative justify-center rounded border-green-500">
      
      { selectPriority==="Compliance" ? (<Compliance compliance={compliance} type={selectPriority} />) : <MyResponsivePie />}
      
    </div>
  );
};

export default Pie;
