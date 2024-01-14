import { memo } from "react"
import { Handle, NodeProps, Position } from "reactflow"
import Style from './styles.module.scss'

interface DiamondProps extends NodeProps {
  data: {
    label: string
    style?: React.CSSProperties
  }
  targetPosition?: Position
  sourcePosition?: Position
}


const Diamond = ({
  data,
  targetPosition = Position.Right,
  sourcePosition = Position.Bottom
}: DiamondProps) => {

  return (
    <div className={Style['diamond']}>
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

Diamond.displayName = "Diamond"

export default memo(Diamond)
