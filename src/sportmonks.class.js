"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SportmonksApi {
    constructor(tokenId, versionId = 'v2') {
        this.token = tokenId;
        this.versionId = versionId;
    }
    get(endpoint, params) {
    }
}
exports.SportmonksApi = SportmonksApi;
