import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import Style from './styles.module.scss';

interface CircleProps extends NodeProps {
  data: {
    label: string;
    style?: React.CSSProperties;
  };
  targetPosition?: Position;
  sourcePosition?: Position;
}

const Circle = ({
  data,
  targetPosition = Position.Right,
  sourcePosition = Position.Bottom
}: CircleProps) => {

  return (
    <div className={Style['circle']}>
      <Handle
        type="target"
        position={targetPosition}
      />
      <div className={Style['content']}>
        {data?.label}
      </div>
      <Handle
        type="source"
        position={sourcePosition}
      />
    </div>
  );
};

Circle.displayName = "Circle";

export default memo(Circle);
