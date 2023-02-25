const assert = require('assert');
const sportmonks = require('../dist/sportmonks');
const nock = require('nock')


describe('My Api Wrapper', function () {
    const api = new sportmonks.SportMonks({ apiToken: 'APITOKEN' }).my;
    const scope = nock('https://api.sportmonks.com').persist().get(/v3.*$/).reply(200, {});
    describe('My', function () {

        describe('Enrichments', function () {

            it('should call enrichments with no params', async function () {
                await api.enrichments();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/my/enrichments?api_token=APITOKEN');
            });

        });

        describe('Resources', function () {

            it('should call resources with no params', async function () {
                await api.resources();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/my/resources?api_token=APITOKEN');
            });

        });

        describe('Leagues', function () {

            it('should call leagues with no params', async function () {
                await api.leagues();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/my/leagues?api_token=APITOKEN');
            });

        });

    });
});