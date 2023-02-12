import { SPORTMONKS_API_KEY } from './sportmonks_api_key';
import { SportMonks } from 'sportmonks';

const sportmonks = new SportMonks({ apiToken: SPORTMONKS_API_KEY });

console.log('sportmonks', sportmonks);