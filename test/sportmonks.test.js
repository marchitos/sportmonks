"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sportmonks_class_1 = require("../src/sportmonks.class");
const chai_1 = require("chai");
let sm;
const token = 'thisisthetoken';
const version = 'v3';
describe('SportmonksApi', () => {
    it("should create the class with v2 version and correct token", () => {
        sm = new sportmonks_class_1.SportmonksApi(token);
        chai_1.expect(sm.token).to.equal(token);
        chai_1.expect(sm.versionId).to.equal('v2');
    });
});
