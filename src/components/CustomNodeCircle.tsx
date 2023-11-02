import { FC, useState, MouseEvent } from "react";
import { ComputedNode, InputNode, NodeProps, NodeTooltipProps } from "@nivo/network";
import { useRouter } from "next/navigation";
import { useTooltip } from "@nivo/tooltip";


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
  
const CustomNodeCircle = <Node extends InputNode>({
  node,
  animated,
  onClick,
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
}: NodeProps<Node>) => {
  const router = useRouter();
  const { showTooltipFromEvent, hideTooltip } = useTooltip();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (node:ComputedNode<Node>, event: MouseEvent<SVGCircleElement, globalThis.MouseEvent>) => {
    showTooltipFromEvent(<CustomNodeTooltipComponent node={node} />, event)
    setIsHovered(true);
  };

  const handleMouseLeave = (node:ComputedNode<Node>, event: MouseEvent<SVGCircleElement, globalThis.MouseEvent>) => {
    setIsHovered(false);
    hideTooltip()
  };

  const handClick = (n:any, e:any) => {
    n.data.DeviceID !== "fog-server-11"
      ? router.push(`/devices/${n.data.DeviceID}`)
      : "";
  };

  return (
    <svg className="">
      <circle
        className={`${node.color} transition-all duration-300`}
        cx={node.x}
        cy={node.y}
        r={isHovered ? 15 : 7} // Set the radius based on hover state
        onClick={(e)=>handClick(node, e)}
        onMouseEnter={
          (event) => handleMouseEnter(node, event)
        }
        onMouseMove={ onMouseMove ? (event) => onMouseMove(node, event) : undefined}
        onMouseLeave={
            (event) => handleMouseLeave(node, event)
        }
      />
    </svg>
  );
};

export default CustomNodeCircle;
