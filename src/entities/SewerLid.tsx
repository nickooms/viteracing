import { FC } from 'react';

type Position = [x: number, y: number, z: number];
type Rotation = [x: number, y: number, z: number];

interface SewerLidProps {
  radius?: number;
  segments?: number;
  color?: number;
  position?: Position;
  rotation?: Rotation;
}

export const SewerLid: FC<SewerLidProps> = ({
  radius = 0.5,
  segments = 32,
  color = 0x000000,
  position = [0, 0, 0],
  rotation = [Math.PI / 4, 0, 0],
  ...props
}) => (
  <mesh position={position} rotation={rotation} {...props}>
    <circleGeometry args={[radius, segments]} />
    <meshBasicMaterial color={color} />
  </mesh>
);
