import { API_BASE_URL, SportMonksConf, HttpClient, IApiResponse, GET_OPTS } from "./client";

export class SportMonksCore extends HttpClient {
    constructor(private conf: SportMonksConf) {
        super(`${API_BASE_URL}`, conf.apiToken);
    }
    get(path: string, opts?: GET_OPTS): Promise<IApiResponse<any>> {
        return super.get(`/v3/core${path}`, opts);
    }
    continents(opts?: GET_OPTS): Promise<IApiResponse<any>> {
        return this.get('/continents', opts);
    }
    continentsById(id: number, opts?: GET_OPTS) {
        return this.get(`/continents/${id}`, opts);
    }

    countries(opts?: GET_OPTS) {
        return this.get('/countries', opts);
    }
    countriesById(id: number, opts?: GET_OPTS) {
        return this.get(`/countries/${id}`, opts);
    }
    searchCountries(name: string, opts?: GET_OPTS) {
        return this.get(`/countries/search/${name}`, opts);
    }

    regions(opts?: GET_OPTS) {
        return this.get('/regions', opts);
    }
    regionsById(id: number, opts?: GET_OPTS) {
        return this.get(`/regions/${id}`, opts);
    }
    searchRegions(name: string, opts?: GET_OPTS) {
        return this.get(`/regions/search/${name}`, opts);
    }

    cities(opts?: GET_OPTS) {
        return this.get('/cities', opts);
    }
    citiesById(id: number, opts?: GET_OPTS) {
        return this.get(`/cities/${id}`, opts);
    }
    searchCities(name: string, opts?: GET_OPTS) {
        return this.get(`/cities/search/${name}`, opts);
    }

    types(opts?: GET_OPTS) {
        return this.get('/types', opts);
    }
    typesById(id: number, opts?: GET_OPTS) {
        return this.get(`/types/${id}`, opts);
    }
}