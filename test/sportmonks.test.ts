import {SportmonksApi} from '../src/sportmonks.class'
import { expect} from 'chai';

let sm;
const token = 'thisisthetoken';
const version = 'v3';

describe('SportmonksApi', () => {

    it("should create the class with v2 version and correct token", () => {
        sm = new SportmonksApi(token);
        expect(sm.token).to.equal(token);
        expect(sm.versionId).to.equal('v2');
    })
});