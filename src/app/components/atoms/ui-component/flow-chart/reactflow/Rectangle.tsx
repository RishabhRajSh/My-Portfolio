import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import Style from './styles.module.scss';

const Rectangle = ({
  data,
  targetPosition = Position.Right,
  sourcePosition = Position.Bottom
}: NodeProps) => {

  return (
    <div className={Style['rectangle']}>
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

Rectangle.displayName = "Rectangle";

export default memo(Rectangle);
