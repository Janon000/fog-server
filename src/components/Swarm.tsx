"use client";
import { ResponsiveSwarmPlot } from "@nivo/swarmplot";


const data = [
  {
    "id": "0.0",
    "group": "group A",
    "price": 153,
    "volume": 12
  },
  {
    "id": "0.1",
    "group": "group A",
    "price": 241,
    "volume": 30
  },

]

function Swarm() {
  const MyResponsiveSwarmPlot = () => (
    <ResponsiveSwarmPlot
        data={data}
        onClick={(data) => {
          console.log(
            `all the people that ${data["id"]} for ${data["group"]}`
          );
        }}
        groups={[ 'group A',]}
        value="price"
        valueFormat="$.2f"
        valueScale={{ type: 'linear', min: 0, max: 500, reverse: false }}
        size={{
            key: 'volume',
            values: [
                4,
                20
            ],
            sizes: [
                6,
                20
            ]
        }}
        spacing={7}
        forceStrength={4}
        simulationIterations={100}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.6
                ],
                [
                    'opacity',
                    0.5
                ]
            ]
        }}
        margin={{ top: 80, right: 100, bottom: 80, left: 100 }}
        enableGridX={false}
        enableGridY={false}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
    />
)
  return (
    <div className="h-[300px] w-[500px] cursor-pointer"><MyResponsiveSwarmPlot/></div>
 
  );
}

export default Swarm;
