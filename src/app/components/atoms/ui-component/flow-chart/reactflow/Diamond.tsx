import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import Style from './styles.module.scss';

const Diamond = ({
  data,
  targetPosition = Position.Right,
  sourcePosition = Position.Bottom
}: NodeProps) => {

  return (
    <div className={Style['diamond']}>
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

Diamond.displayName = "Diamond";

export default memo(Diamond);
