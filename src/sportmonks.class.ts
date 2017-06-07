export class SportmonksApi {

    token;
    versionId;

    constructor(tokenId: string, versionId: string = 'v2'){
        this.token = tokenId;
        this.versionId = versionId
    }

    get(endpoint, params) {

    }
}