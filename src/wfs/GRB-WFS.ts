import { WFS } from './wfs';

const GRB_URL = 'https://geo.api.vlaanderen.be/GRB/wfs';

const wfs = new WFS(GRB_URL);

export const { getFeature } = wfs;
