import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import Style from './styles.module.scss';

interface RectangleProps extends NodeProps {
  data: {
    label: string;
    style?: React.CSSProperties;
  };
  targetPosition?: Position;
  sourcePosition?: Position;
}

const Rectangle = ({
  data,
  targetPosition = Position.Right,
  sourcePosition = Position.Bottom
}: RectangleProps) => {

  return (
    <div className={Style['rectangle']} style={data.style}>
      <Handle
        type="source"
        position={targetPosition}
      />
      <div className={Style['content']}>
        {data?.label}
      </div>
      <Handle
        type="target"
        position={sourcePosition}
      />
    </div>
  );
};

Rectangle.displayName = "Rectangle";

export default memo(Rectangle);