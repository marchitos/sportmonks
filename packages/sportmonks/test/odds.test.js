const assert = require('assert');
const sportmonks = require('../dist/sportmonks');
const nock = require('nock')


describe('Odds Api Wrapper', function () {
    const api = new sportmonks.SportMonks({ apiToken: 'APITOKEN' }).odds;
    const scope = nock('https://api.sportmonks.com').persist().get(/v3.*$/).reply(200, {});
    describe('Odds', function () {

        describe('Markets', function () {

            it('should call markets with no params', async function () {
                await api.markets();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/odds/markets?api_token=APITOKEN');
            });

            it('should call marketsById', async function () {
                await api.marketsById(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/odds/markets/1?api_token=APITOKEN');
            });

            it('should search for a market', async function () {
                await api.marketsSearchByName('Market');
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/odds/markets/search/Market?api_token=APITOKEN');
            })
        });

        describe('Bookmakers', function () {

            it('should call bookmakers with no params', async function () {
                await api.bookmakers();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/odds/bookmakers?api_token=APITOKEN');
            });

            it('should call bookmakersById', async function () {
                await api.bookmakersById(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/odds/bookmakers/1?api_token=APITOKEN');
            });

            it('should search for a market', async function () {
                await api.bookmakersSearchByName('Book1');
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/odds/bookmakers/search/Book1?api_token=APITOKEN');
            });

            it('should search bookmakers by fixture id', async function () {
                await api.bookmakersByFixtureId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/odds/bookmakers/fixtures/1?api_token=APITOKEN');
            });

            it('should map bookmakers by fixture id', async function () {
                await api.bookmakersMappingByFixtureId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/odds/bookmakers/fixtures/1/mapping?api_token=APITOKEN');
            });
        });

    });
});