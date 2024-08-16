import { useFeatures } from '../hooks/useFeatures';
import { SewerLid } from '../entities/SewerLid';
// import { FeaturePropertyMaterialMapping } from './FeaturePropertyMaterialMapping.js';
import { Point, BBox } from 'geojson';

export const WRI: React.FC<{ bbox: BBox }> = ({ bbox }) => {
  const { data } = useFeatures({ typeName: 'WRI', bbox });
  /* const mapping = new FeaturePropertyMaterialMapping('LBLTYPE', {
    'cirkelvormig putdeksel': { color: 0x0000ff },
    'vierkant putdeksel': { color: 0x0099cc },
  }); */

  return (
    <group>
      {data?.features.map((feature) => {
        // const { LBLTYPE } = feature.properties as GeoJsonProperties;
        // const { color } = mapping.getMaterial(LBLTYPE);
        const color = 0x0000ff;
        const [x, z] = (feature.geometry as Point).coordinates;
        return <SewerLid position={[x, 0.5, -z]} color={color} />;
      })}
    </group>
  );
};
