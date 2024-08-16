import { BBox, FeatureCollection } from 'geojson';
import { useEffect, useState } from 'react';

interface UseFeaturesOptions {
  typeName: string;
  bbox: BBox;
}

type UseFeatures = (options: UseFeaturesOptions) => {
  data: FeatureCollection | null;
  error: Error | null;
};

export const useFeatures: UseFeatures = ({ typeName = 'WRI', bbox }) => {
  const [data, setData] = useState<FeatureCollection | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const parameters = {
    request: 'GetFeature',
    service: 'WFS',
    version: '2.0.0',
    typeName,
    outputormat: 'application/json',
    bbox: bbox.join(','),
  };
  const qs = Object.entries(parameters)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  const url = `https://geo.api.vlaanderen.be/GRB/wfs?${qs}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((e) => {
        setError(e);
      });
  }, [url]);
  return { data, error };
};
