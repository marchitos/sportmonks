import { API_BASE_URL, GET_OPTS, HttpClient, IApiResponse, SportMonksConf } from "./client";

export class SportMonksMy extends HttpClient {
    constructor(private conf: SportMonksConf) {
        super(`${API_BASE_URL}`, conf.apiToken, conf.timezone);
    }
    get(path: string, opts?: GET_OPTS): Promise<IApiResponse<any>> {
        return super.get(`/v3/my${path}`, opts);
    }
    enrichments(opts?: GET_OPTS): Promise<IApiResponse<any>> {
        return this.get('/enrichments', opts);
    }
    resources(opts?: GET_OPTS): Promise<IApiResponse<any>> {
        return this.get('/resources', opts);
    }
    leagues(opts?: GET_OPTS): Promise<IApiResponse<any>> {
        return this.get('/leagues', opts);
    }
}