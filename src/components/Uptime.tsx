"use client";
import { ResponsiveBar } from "@nivo/bar";
import { useRouter } from "next/navigation";

const data = [
  {
    country: "AD",
    "hot dog": 34,
    "hot dogColor": "hsl(250, 70%, 50%)",
    burger: 181,
    burgerColor: "hsl(355, 70%, 50%)",
    sandwich: 0,
    sandwichColor: "hsl(296, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 158,
    "hot dogColor": "hsl(58, 70%, 50%)",
    burger: 8,
    burgerColor: "hsl(224, 70%, 50%)",
    sandwich: 103,
    sandwichColor: "hsl(251, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 73,
    "hot dogColor": "hsl(326, 70%, 50%)",
    burger: 1,
    burgerColor: "hsl(228, 70%, 50%)",
    sandwich: 93,
    sandwichColor: "hsl(283, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 27,
    "hot dogColor": "hsl(153, 70%, 50%)",
    burger: 164,
    burgerColor: "hsl(285, 70%, 50%)",
    sandwich: 158,
    sandwichColor: "hsl(313, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 142,
    "hot dogColor": "hsl(184, 70%, 50%)",
    burger: 54,
    burgerColor: "hsl(321, 70%, 50%)",
    sandwich: 36,
    sandwichColor: "hsl(203, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 157,
    "hot dogColor": "hsl(253, 70%, 50%)",
    burger: 112,
    burgerColor: "hsl(244, 70%, 50%)",
    sandwich: 134,
    sandwichColor: "hsl(186, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 118,
    "hot dogColor": "hsl(149, 70%, 50%)",
    burger: 19,
    burgerColor: "hsl(90, 70%, 50%)",
    sandwich: 178,
    sandwichColor: "hsl(83, 70%, 50%)",
  },
];

type Props = {
  uptime?: any;
};

export const Uptime = ({ uptime }: Props) => {
  const router = useRouter();

  const MyResponsiveBar = () => (
    <ResponsiveBar
      data={uptime}
      theme={{
        "axis": {
            "domain": {
                "line": {
                    "stroke": "#777777",
                    "strokeWidth": 1
                }
            },
            "legend": {
                "text": {
                    "fontSize": 12,
                    "fill": "#ffffff",
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            },
            "ticks": {
                "line": {
                    "stroke": "#777777",
                    "strokeWidth": 1
                },
                "text": {
                    "fontSize": 11,
                    "fill": "#ffffff",
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            }
        },
        "legends": {
            "title": {
                "text": {
                    "fontSize": 11,
                    "fill": "#ffffff",
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            },
            "text": {
                "fontSize": 11,
                "fill": "#ffffff",
                "outlineWidth": 0,
                "outlineColor": "transparent"
            },
            "ticks": {
                "line": {},
                "text": {
                    "fontSize": 10,
                    "fill": "#333333",
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            }
        },
        "annotations": {
            "text": {
                "fontSize": 13,
                "fill": "#333333",
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            },
            "link": {
                "stroke": "#000000",
                "strokeWidth": 1,
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            },
            "outline": {
                "stroke": "#000000",
                "strokeWidth": 2,
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            },
            "symbol": {
                "fill": "#000000",
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            }
        },
      
    }}
      keys={["Online", "Disconnects", "Offline"]}
      indexBy="Id"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.8}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={["#4CBB17", " #FFC300 ", "#FF0000"]}
      onClick={(n,e)=>router.push(`/devices/${n.data.Id}`)}
      // defs={[
      //   {
      //     id: "dots",
      //     type: "patternDots",
      //     background: "inherit",
      //     color: "#38bcb2",
      //     size: 4,
      //     padding: 1,
      //     stagger: true,
      //   },
      //   {
      //     id: "lines",
      //     type: "patternLines",
      //     background: "inherit",
      //     color: "#eed312",
      //     rotation: -45,
      //     lineWidth: 6,
      //     spacing: 10,
      //   },
      //   {
      //     id: "online",
      //     background: "#4CBB17",
      //     color: "#4CBB17",
      //   },
      // ]}
      // fill={[
      //   {
      //     match: {
      //       id: "fries",
      //     },
      //     id: "dots",
      //   },
      //   {
      //       match: {
      //           id: 'sandwich'
      //       },
      //       id: 'lines'
      //   }
      // ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
    //   axisBottom={{
    //     tickSize: 5,
    //     tickPadding: 5,
    //     tickRotation: 0,
    //     legend: "Count",
    //     legendPosition: "middle",
    //     legendOffset: 32,
    //   }}
      axisBottom={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Hours",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableGridY={false}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
  return (
    <div className="h-[300px] w-[500px] cursor-pointer">
      <MyResponsiveBar />
    </div>
  );
}


