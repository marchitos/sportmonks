import { HttpClient, SportMonksConf, API_BASE_URL, IApiResponse, GET_OPTS } from "./client";
export class SportMonksOdds extends HttpClient {
    constructor(private conf: SportMonksConf) {
        super(`${API_BASE_URL}`, conf.apiToken);
    }
    get(path: string, opts?: GET_OPTS): Promise<IApiResponse<any>> {
        return super.get(`/v3/odds${path}`, opts);
    }

    // markets
    markets(opts?: GET_OPTS): Promise<IApiResponse<any>> {
        return this.get(`/markets`, opts);
    }
    marketsById(id: number, opts?: GET_OPTS): Promise<IApiResponse<any>> {
        return this.get(`/markets/${id}`, opts);
    }
    marketsSearchByName(name: string, opts?: GET_OPTS): Promise<IApiResponse<any>> {
        return this.get(`/markets/search/${name}`, opts);
    }

    // bookmakers
    bookmakers(opts?: GET_OPTS): Promise<IApiResponse<any>> {
        return this.get(`/bookmakers`, opts);
    }
    bookmakersById(id: number, opts?: GET_OPTS): Promise<IApiResponse<any>> {
        return this.get(`/bookmakers/${id}`, opts);
    }
    bookmakersSearchByName(name: string, opts?: GET_OPTS): Promise<IApiResponse<any>> {
        return this.get(`/bookmakers/search/${name}`, opts);
    }
    bookmakersByFixtureId(id: number, opts?: GET_OPTS): Promise<IApiResponse<any>> {
        return this.get(`/bookmakers/fixtures/${id}`, opts);
    }
    bookmakersMappingByFixtureId(id: number, opts?: GET_OPTS): Promise<IApiResponse<any>> {
        return this.get(`/bookmakers/fixtures/${id}/mapping`, opts);
    }
}