import { querystring } from './querystring';
import { useCache } from './use-cache';

const SERVICE = 'WFS';
const VERSION = '2.0.0';
const QUERY = { SERVICE, VERSION };

export class WFS {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  getFeature = async ({
    type = 'WBN',
    bbox = [152546.79, 221859.98, 152560.24, 221874.44],
  } = {}) => {
    const { get } = useCache();
    const query = querystring.stringify({
      typeName: `GRB:${type}`,
      ...QUERY,
      request: 'GetFeature',
      outputFormat: 'json',
      bbox,
    });
    const json = await get(`${this.url}?${query}`);
    return json;
  };
}
