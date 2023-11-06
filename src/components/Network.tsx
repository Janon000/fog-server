"use client";
import { Icon } from "@iconify/react";
import {
  LinkProps,
  ResponsiveNetwork,
  NodeProps,
  NodeTooltipProps,
} from "@nivo/network";
import { useTooltip } from "@nivo/tooltip";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CustomNodeCircle from "./CustomNodeCircle";
import { Tooltip } from "flowbite-react";

const CustomLinkComponent2 = ({ link }: LinkProps<any, any>) => {
  console.log();
  // Calculate the angle of the link
  const angle = Math.atan2(
    link.target.y - link.source.y,
    link.target.x - link.source.x
  );
  // Calculate the arrowhead size
  const arrowSize = 8;
  // Calculate the distance between the arrow and the node
  const distanceToNode = 5;

  // Calculate the starting position of the arrowhead
  const startX = link.target.x - distanceToNode * Math.cos(angle);
  const startY = link.target.y - distanceToNode * Math.sin(angle);

  return (
    <>
      {/* Render the link line*/}
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

const CustomNodeTooltipComponent = ({ node }: NodeTooltipProps<any>) => (
  <div
    style={{
      background: "#0A133A",
      color: "#ffffff",
      padding: "6px 9px",
      borderRadius: "2px",
      boxShadow: "0 3px 9px rgba(0, 0, 0, .35)",
    }}
  >
    <strong>ID: {node.id}</strong>
  </div>
);

const CustomNodeComponent = ({ node, animated }: NodeProps<any>) => {
  const { showTooltipFromEvent, hideTooltip } = useTooltip();
  const router = useRouter();
  if (node.id.startsWith("Fog")) {
    return (
      <>
        <Icon
          icon="icon-park-solid:server"
          x={node.x - 12}
          y={node.y - 18}
          className={`text-[25px] hover:text-[40px] transition-all duration-300 text-[#42A422] absolute`}
          onMouseEnter={(event) =>
            showTooltipFromEvent(
              <CustomNodeTooltipComponent node={node} />,
              event
            )
          }
          onMouseLeave={() => hideTooltip()}
          onMouseMove={(event) =>
            showTooltipFromEvent(
              <CustomNodeTooltipComponent node={node} />,
              event
            )
          }
          onClick={(e) => {
            node.data.DeviceID !== "fog-server-11" &&
              router.push(`/devices/${node.data.DeviceID}`);
          }}
        />
      </>
    );
  } else if (node.id.startsWith("Cloud")) {
    return (
      <Icon
        icon="ic:twotone-cloud"
        x={node.x - 12}
        y={node.y - 18}
        className={`text-[40px] hover:text-green-400 transition-all duration-300 text-[#42A422]`}
        onMouseEnter={(event) =>
          showTooltipFromEvent(
            <CustomNodeTooltipComponent node={node} />,
            event
          )
        }
        onMouseLeave={() => hideTooltip()}
        onMouseMove={(event) =>
          showTooltipFromEvent(
            <CustomNodeTooltipComponent node={node} />,
            event
          )
        }
        onClick={(e) => {
          node.data.DeviceID !== "fog-server-11" &&
            router.push(`/devices/${node.data.DeviceID}`);
        }}
      />
    );
  } else {
    return <CustomNodeCircle node={node} animated={animated} />;
  }
};

function Network({ network }: { network: any[] }) {
  const [nodeInfo, setNodeInfo] = useState({
    classification: "",
    description: "",
  });
  //console.log(network)
  const [test, setTest] = useState("");
  const itemsToMap = network.slice();
  //console.log(itemsToMap)
  const links = itemsToMap.map((node: any) => {
    return {
      source: node.TargetDeviceName,
      target: node.Name,
      distance: node.Name.startsWith("Fog") ? 100 : 60,
    };
  });
  const nodeData = { nodes: network, links: links };
  console.log(links)

  const MyResponsiveNetwork = () => (
    <ResponsiveNetwork
      layers={["links", "nodes", "annotations"]}
      data={nodeData}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      linkDistance={(e) => e.distance}
      centeringStrength={0.3}
      repulsivity={6}
      nodeSize={(n) => (n.id.startsWith("Fog") ? 30 : 10)}
      nodeComponent={(n) => CustomNodeComponent(n)}
      activeNodeSize={(n) => (n.size = 35)}
      nodeColor={(e) =>
        e.Classification === "Normal"
          ? "fill-[#42A422]"
          : e.Classification === "Anomaly"
          ? "fill-[#FFC300]"
          : "fill-[#FF0000]"
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
      onMouseEnter={(n, e) => {
        n.data.Description ? setTest(n.data.Description) : setTest("");
      }}
      onMouseLeave={(n, e) => setTest("")}
      // onClick={(n, e) =>
      //   n.data.DeviceID !== "fog-server-11"
      //     ? router.push(`/devices/${n.data.DeviceID}`)
      //     : ""
      // }
    />
  );

  return (
    <div className="h-[270px] cursor-pointer border flex relative justify-center rounded border-green-500">
      <MyResponsiveNetwork />
      <div className=" mx-1 absolute bottom-0 left-0">{test}</div>
      <div className=" mx-1 mb-1 absolute bottom-0 right-0 text-xs">
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
