import * as https from 'node:https';

const request = (options: any) => {
    return new Promise((resolve, reject) => {
        const req = https.request(options, (res: any) => {
            let data = "";

            res.on("data", (d: any) => {
                data += d;
            });

            res.on("end", () => {
                data = JSON.parse(data.toString().trim());

                if (res.statusCode === 200) {
                    resolve(data);
                } else {
                    reject({ code: res.statusCode });
                }
            });

            res.on("error", (error: any) => {
                reject({ ...error });
            });
        });

        req.end();
    });
};
export const API_BASE_URL = 'api.sportmonks.com';

export interface SportMonksConf {
    apiToken: string;
}
export interface IApiResponse<T> {
    ok: boolean;
    data?: T;
    pagination?: {
        count: number;
        per_page: number;
        current_page: number;
        next_page: string | null;
        has_more: boolean;
    },
    subscription?: {
        meta: any[];
        plans: any[];
        add_ons: any[];
        widgets: any[];
    },
    rate_limit?: {
        resets_in_seconds: number;
        remaining: number;
        requested_entity: string;
    },
    timezone?: string;
    error?: any;
}
export interface GET_OPTS {
    includes?: string[];
    select?: string[];
    filters?: { [filterName: string]: number[] };
}
export class HttpClient {
    constructor(private baseUrl: string, private apiToken: string) {
    }

    get(path: string, opts?: GET_OPTS): Promise<IApiResponse<any>> {
        const includes = opts && opts.includes && opts.includes.length > 0 ? `&include=${opts.includes.join(';')}` : '';
        const select = opts && opts.select && opts.select.length > 0 ? `&select=${opts.select.join(',')}` : '';
        const filters = opts && opts.filters ? `&filters=${Object.keys(opts.filters).map(filterId => `${filterId}:${opts.filters && opts.filters[filterId]}`).join(';')}` : '';
        console.log('includes', includes);
        console.log('select', select);
        console.log('filters', filters);
        const pathUrl = `${path}?api_token=${this.apiToken}${includes}${select}${filters}`;
        console.log('PATH', pathUrl, this.baseUrl + pathUrl);
        return new Promise(resolve => {
            request({
                hostname: this.baseUrl,
                port: 443,
                method: 'GET',
                path: pathUrl
            })
                .then((resp: any) => resolve({ ok: true, ...resp }))
                .catch(err => resolve({ ok: false, error: err }))
        });

    }
}

