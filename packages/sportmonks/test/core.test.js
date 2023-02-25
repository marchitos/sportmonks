const assert = require('assert');
const sportmonks = require('../dist/sportmonks');
const nock = require('nock')


describe('Core Api Wrapper', function () {
    const api = new sportmonks.SportMonks({ apiToken: 'APITOKEN' }).core;
    const scope = nock('https://api.sportmonks.com').persist().get(/v3.*$/).reply(200, {});
    describe('Continents', function () {

        describe('Get all continents', function () {

            it('should call continents with no params', async function () {
                await api.continents();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/core/continents?api_token=APITOKEN');
            });

            it('should call continentsById', async function () {
                await api.continentsById(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/core/continents/1?api_token=APITOKEN');
            });
        });

        describe('Countries', function () {

            it('should call countries with no params', async function () {
                await api.countries();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/core/countries?api_token=APITOKEN');
            })

            it('should call countriesById', async function () {
                await api.countriesById(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/core/countries/1?api_token=APITOKEN');
            })

            it('should search for a country', async function () {
                await api.searchCountries('Italy');
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/core/countries/search/Italy?api_token=APITOKEN');
            })
        })

        describe('Regions', function () {

            it('should call regions with no params', async function () {
                await api.regions();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/core/regions?api_token=APITOKEN');
            })

            it('should call regionsById', async function () {
                await api.regionsById(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/core/regions/1?api_token=APITOKEN');
            })

            it('should search for a region', async function () {
                await api.searchRegions('Region');
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/core/regions/search/Region?api_token=APITOKEN');
            })
        })

        describe('Cities', function () {

            it('should call cities with no params', async function () {
                await api.cities();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/core/cities?api_token=APITOKEN');
            })

            it('should call citiesById', async function () {
                await api.citiesById(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/core/cities/1?api_token=APITOKEN');
            })

            it('should search for a city', async function () {
                await api.searchCities('Milano');
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/core/cities/search/Milano?api_token=APITOKEN');
            })
        })

        describe('Types', function () {

            it('should call types with no params', async function () {
                await api.types();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/core/types?api_token=APITOKEN');
            })

            it('should call typesById', async function () {
                await api.typesById(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/core/types/1?api_token=APITOKEN');
            })

        })
    });
});