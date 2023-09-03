"use client";
import { LinkProps, ResponsiveNetwork } from "@nivo/network";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CustomLinkComponent2 = ({ link }: LinkProps<any, any>) => {
  // Calculate the angle of the link
  const angle = Math.atan2(
    link.target.y - link.source.y,
    link.target.x - link.source.x
  );
  // Calculate the arrowhead size
  
  const arrowSize = 8
  // Calculate the distance between the arrow and the node
  const distanceToNode = 1;

  // Calculate the starting position of the arrowhead
  const startX = link.target.x - (arrowSize + distanceToNode) * Math.cos(angle);
  const startY = link.target.y - (arrowSize + distanceToNode) * Math.sin(angle);

  return (
    <>
      {/* Render the link */}
      <line
        x1={link.source.x}
        y1={link.source.y}
        x2={link.target.x}
        y2={link.target.y}
        stroke={"gray"}
        strokeWidth={link.thickness}
        strokeLinecap="round"
      />
      {/* Render the arrowhead at the target start */}
      <path
        d={`M${startX - arrowSize * Math.cos(angle - Math.PI / 6)},${
          startY - arrowSize * Math.sin(angle - Math.PI / 6)
        } L${startX},${startY} L${
          startX - arrowSize * Math.cos(angle + Math.PI / 6)
        },${startY - arrowSize * Math.sin(angle + Math.PI / 6)}`}
        fill={"gray"}
        stroke="none"
      />
    </>
  );
};

// const CustomLinkComponent = ({ link }: LinkProps<Node, Link>) => (
//   <line
//       x1={link.source.x}
//       y1={link.source.y}
//       x2={link.target.x}
//       y2={link.target.y}
//       stroke={link.color}
//       strokeWidth={link.thickness}
//       strokeDasharray="5 7"
//       strokeLinecap="round"

//   />
// )

function Network({ network }: { network: any[] }) {
  const router = useRouter();
  const [nodeInfo, setNodeInfo] = useState({
    classification: "",
    description: "",
  });
  //console.log(network)
  const [test, setTest] = useState("");
  const itemsToMap = network.slice(1);
  //console.log(itemsToMap)
  const links = itemsToMap.map((node: any) => {
    return {
      source: node.TargetDeviceName,
      target: node.Name,
      distance: node.Name == "Fog Server2" ? 100:60,
    };
  });
  const nodeData = { nodes: network, links: links };
  console.log(nodeData)

  const data = {
    nodes: [
      {
        id: "Node 1",
        height: 1,
        size: 24,
        color: "rgb(97, 205, 187)",
      },
      {
        id: "Node 2",
        height: 1,
        size: 24,
        color: "rgb(97, 205, 187)",
      },
      {
        id: "Node 3",
        height: 1,
        size: 24,
        color: "rgb(97, 205, 187)",
      },
      {
        id: "Node 4",
        height: 1,
        size: 24,
        color: "rgb(97, 205, 187)",
      },
      {
        id: "Node 5",
        height: 1,
        size: 24,
        color: "rgb(97, 205, 187)",
      },
      {
        id: "Node 6",
        height: 1,
        size: 24,
        color: "rgb(97, 205, 187)",
      },
      {
        id: "Node 7",
        height: 1,
        size: 24,
        color: "rgb(97, 205, 187)",
      },
      {
        id: "Node 8",
        height: 1,
        size: 24,
        color: "rgb(97, 205, 187)",
      },
      {
        id: "Node 9",
        height: 1,
        size: 24,
        color: "rgb(97, 205, 187)",
      },
      {
        id: "Node 10",
        height: 1,
        size: 24,
        color: "rgb(97, 205, 187)",
      },
      {
        id: "Node 0",
        height: 2,
        size: 32,
        color: "rgb(244, 117, 96)",
      },
      {
        id: "Node 1.0",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 1.1",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 1.2",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 1.3",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 1.4",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 1.5",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 1.6",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 2.0",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 2.1",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 2.2",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 2.3",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 2.4",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 3.0",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 3.1",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 3.2",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 3.3",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 3.4",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 3.5",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 3.6",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 4.0",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 4.1",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 4.2",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 4.3",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 4.4",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 4.5",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 4.6",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 5.0",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 5.1",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 5.2",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 5.3",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 5.4",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 6.0",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 6.1",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 6.2",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 6.3",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 6.4",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 6.5",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 6.6",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 6.7",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.0",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.1",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.2",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.3",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 8.0",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 8.1",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 8.2",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 9.0",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 9.1",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 9.2",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 9.3",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 9.4",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 9.5",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 9.6",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 9.7",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 10.0",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 10.1",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 10.2",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 10.3",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
    ],
    links: [
      {
        source: "Node 0",
        target: "Node 1",
        distance: 80,
      },
      {
        source: "Node 1",
        target: "Node 7",
        distance: 80,
      },
      {
        source: "Node 1",
        target: "Node 1.0",
        distance: 50,
      },
      {
        source: "Node 1",
        target: "Node 1.1",
        distance: 50,
      },
      {
        source: "Node 1",
        target: "Node 1.2",
        distance: 50,
      },
      {
        source: "Node 1",
        target: "Node 1.3",
        distance: 50,
      },
      {
        source: "Node 1",
        target: "Node 1.4",
        distance: 50,
      },
      {
        source: "Node 1",
        target: "Node 1.5",
        distance: 50,
      },
      {
        source: "Node 1",
        target: "Node 1.6",
        distance: 50,
      },
      {
        source: "Node 0",
        target: "Node 2",
        distance: 80,
      },
      {
        source: "Node 2",
        target: "Node 4",
        distance: 80,
      },
      {
        source: "Node 2",
        target: "Node 2.0",
        distance: 50,
      },
      {
        source: "Node 2",
        target: "Node 2.1",
        distance: 50,
      },
      {
        source: "Node 2",
        target: "Node 2.2",
        distance: 50,
      },
      {
        source: "Node 2",
        target: "Node 2.3",
        distance: 50,
      },
      {
        source: "Node 2",
        target: "Node 2.4",
        distance: 50,
      },
      {
        source: "Node 0",
        target: "Node 3",
        distance: 80,
      },
      {
        source: "Node 3",
        target: "Node 3.0",
        distance: 50,
      },
      {
        source: "Node 3",
        target: "Node 3.1",
        distance: 50,
      },
      {
        source: "Node 3",
        target: "Node 3.2",
        distance: 50,
      },
      {
        source: "Node 3",
        target: "Node 3.3",
        distance: 50,
      },
      {
        source: "Node 3",
        target: "Node 3.4",
        distance: 50,
      },
      {
        source: "Node 3",
        target: "Node 3.5",
        distance: 50,
      },
      {
        source: "Node 3",
        target: "Node 3.6",
        distance: 50,
      },
      {
        source: "Node 0",
        target: "Node 4",
        distance: 80,
      },
      {
        source: "Node 4",
        target: "Node 2",
        distance: 80,
      },
      {
        source: "Node 4",
        target: "Node 8",
        distance: 80,
      },
      {
        source: "Node 4",
        target: "Node 4.0",
        distance: 50,
      },
      {
        source: "Node 4",
        target: "Node 4.1",
        distance: 50,
      },
      {
        source: "Node 4",
        target: "Node 4.2",
        distance: 50,
      },
      {
        source: "Node 4",
        target: "Node 4.3",
        distance: 50,
      },
      {
        source: "Node 4",
        target: "Node 4.4",
        distance: 50,
      },
      {
        source: "Node 4",
        target: "Node 4.5",
        distance: 50,
      },
      {
        source: "Node 4",
        target: "Node 4.6",
        distance: 50,
      },
      {
        source: "Node 0",
        target: "Node 5",
        distance: 80,
      },
      {
        source: "Node 5",
        target: "Node 5.0",
        distance: 50,
      },
      {
        source: "Node 5",
        target: "Node 5.1",
        distance: 50,
      },
      {
        source: "Node 5",
        target: "Node 5.2",
        distance: 50,
      },
      {
        source: "Node 5",
        target: "Node 5.3",
        distance: 50,
      },
      {
        source: "Node 5",
        target: "Node 5.4",
        distance: 50,
      },
      {
        source: "Node 0",
        target: "Node 6",
        distance: 80,
      },
      {
        source: "Node 6",
        target: "Node 6.0",
        distance: 50,
      },
      {
        source: "Node 6",
        target: "Node 6.1",
        distance: 50,
      },
      {
        source: "Node 6",
        target: "Node 6.2",
        distance: 50,
      },
      {
        source: "Node 6",
        target: "Node 6.3",
        distance: 50,
      },
      {
        source: "Node 6",
        target: "Node 6.4",
        distance: 50,
      },
      {
        source: "Node 6",
        target: "Node 6.5",
        distance: 50,
      },
      {
        source: "Node 6",
        target: "Node 6.6",
        distance: 50,
      },
      {
        source: "Node 6",
        target: "Node 6.7",
        distance: 50,
      },
      {
        source: "Node 0",
        target: "Node 7",
        distance: 80,
      },
      {
        source: "Node 7",
        target: "Node 10",
        distance: 80,
      },
      {
        source: "Node 7",
        target: "Node 7.0",
        distance: 50,
      },
      {
        source: "Node 7",
        target: "Node 7.1",
        distance: 50,
      },
      {
        source: "Node 7",
        target: "Node 7.2",
        distance: 50,
      },
      {
        source: "Node 7",
        target: "Node 7.3",
        distance: 50,
      },
      {
        source: "Node 0",
        target: "Node 8",
        distance: 80,
      },
      {
        source: "Node 8",
        target: "Node 7",
        distance: 80,
      },
      {
        source: "Node 8",
        target: "Node 8.0",
        distance: 50,
      },
      {
        source: "Node 8",
        target: "Node 8.1",
        distance: 50,
      },
      {
        source: "Node 8",
        target: "Node 8.2",
        distance: 50,
      },
      {
        source: "Node 0",
        target: "Node 9",
        distance: 80,
      },
      {
        source: "Node 9",
        target: "Node 9.0",
        distance: 50,
      },
      {
        source: "Node 9",
        target: "Node 9.1",
        distance: 50,
      },
      {
        source: "Node 9",
        target: "Node 9.2",
        distance: 50,
      },
      {
        source: "Node 9",
        target: "Node 9.3",
        distance: 50,
      },
      {
        source: "Node 9",
        target: "Node 9.4",
        distance: 50,
      },
      {
        source: "Node 9",
        target: "Node 9.5",
        distance: 50,
      },
      {
        source: "Node 9",
        target: "Node 9.6",
        distance: 50,
      },
      {
        source: "Node 9",
        target: "Node 9.7",
        distance: 50,
      },
      {
        source: "Node 0",
        target: "Node 10",
        distance: 80,
      },
      {
        source: "Node 10",
        target: "Node 10.0",
        distance: 50,
      },
      {
        source: "Node 10",
        target: "Node 10.1",
        distance: 50,
      },
      {
        source: "Node 10",
        target: "Node 10.2",
        distance: 50,
      },
      {
        source: "Node 10",
        target: "Node 10.3",
        distance: 50,
      },
    ],
  };

  const MyResponsiveNetwork = () => (
    <ResponsiveNetwork
      data={nodeData}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      linkDistance={(e) => e.distance}
      centeringStrength={0.3}
      repulsivity={6}
      nodeSize={(n) => (n.id.startsWith('Fog') ? 30 : 10)}
      activeNodeSize={(n) => 35}
      nodeColor={(e) =>
        e.Classification === "Normal"
          ? "green"
          : e.Classification === "Anomaly"
          ? "orange"
          : "red"
      }
      nodeBorderWidth={1}
      nodeBorderColor={{
        from: "color",
        modifiers: [["darker", 0.8]],
      }}
      linkThickness={(n) => 2 + 2 * n.target.data.height}
      linkBlendMode="multiply"
      linkComponent={CustomLinkComponent2}
      motionConfig="wobbly"
      onMouseEnter={(n, e) =>
        n.data.Description ? setTest(n.data.Description) : setTest("")
      }
      onMouseLeave={(n, e) => setTest("")}
      onClick={(n, e) =>
        n.data.DeviceID !== "fog-server-1"
          ? router.push(`/devices/${n.data.DeviceID}`)
          : ""
      }
    />
  );

  return (
    <div className="h-[250px] cursor-pointer border flex relative justify-center rounded border-green-500">
      <MyResponsiveNetwork />
      <div className=" mx-1 absolute bottom-0 left-0">{test}</div>
      <div className=" mx-1 mb-1 absolute top-0 right-0 text-xs">
        <div className="flex">
          <div className="h-5 w-5 bg-[#42A422]"></div>
          <p className="ml-3">Online</p>
        </div>
        <div className="flex">
          <div className="h-5 w-5 bg-[#FF0000]"></div>
          <p className="ml-3">Offline</p>
        </div>
        <div className="flex">
          <div className="h-5 w-5 bg-[#FFC300]"></div>
          <p className="ml-3">Anomaly</p>
        </div>
      </div>
    </div>
  );
}

export default Network;
