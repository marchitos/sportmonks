const assert = require('assert');
const sportmonks = require('../dist/sportmonks');
const nock = require('nock')


describe('Football Api Wrapper', function () {
    const api = new sportmonks.SportMonks({ apiToken: 'APITOKEN' }).football;
    const scope = nock('https://api.sportmonks.com').persist().get(/v3.*$/).reply(200, {});
    describe('Football', function () {

        describe('Leagues', function () {

            it('should call leagues with no params', async function () {
                await api.leagues();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/leagues?api_token=APITOKEN');
            });

            it('should call live leagues with no params', async function () {
                await api.leaguesLive();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/leagues/live?api_token=APITOKEN');
            });

            it('should call leaguesById', async function () {
                await api.leaguesById(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/leagues/1?api_token=APITOKEN');
            });

            it('should call leaguesByTeamId', async function () {
                await api.leaguesByTeamId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/teams/1/leagues?api_token=APITOKEN');
            });

            it('should call leaguesByTeamIdCurrent', async function () {
                await api.leaguesByTeamIdCurrent(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/teams/1/leagues/current?api_token=APITOKEN');
            });

            it('should call shirtsByLeagueId', async function () {
                await api.shirtsByLeagueId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/leagues/1/jerseys?api_token=APITOKEN');
            });

            it('should call enrichmentsByLeagueId', async function () {
                await api.enrichmentsByLeagueId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/leagues/1/includes?api_token=APITOKEN');
            });

            it('should call leaguesByDate', async function () {
                await api.leaguesByDate('10-12-2021');
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/leagues/date/10-12-2021?api_token=APITOKEN');
            });

            it('should call leaguesByCountryId', async function () {
                await api.leaguesByCountryId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/leagues/countries/1?api_token=APITOKEN');
            });

            it('should search by league name', async function () {
                await api.leaguesSearchByName('SerieA');
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/leagues/search/SerieA?api_token=APITOKEN');
            });
        });

        describe('Fixtures', function () {

            it('should call fixtures with no params', async function () {
                await api.fixtures();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/fixtures?api_token=APITOKEN');
            });

            it('should call fixtureLastUpdated', async function () {
                await api.fixturesLastUpdated();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/fixtures/latest?api_token=APITOKEN');
            });

            it('should call fixtureById', async function () {
                await api.fixturesById(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/fixtures/1?api_token=APITOKEN');
            });

            it('should call fixturesByIds', async function () {
                await api.fixturesByIds([1, 2]);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/fixtures/multi/1,2?api_token=APITOKEN');
            });

            it('should fixture by name', async function () {
                await api.fixturesSearchByName('Name');
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/fixtures/search/Name?api_token=APITOKEN');
            });

            it('should call fixtureByDate', async function () {
                await api.fixturesByDate('21-11-2012');
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/fixtures/date/21-11-2012?api_token=APITOKEN');
            });

            it('should call fixtureByDateRange', async function () {
                await api.fixturesByDateRange('21-11-2012', '25-11-2012');
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/fixtures/between/21-11-2012/25-11-2012?api_token=APITOKEN');
            });

            it('should call fixtureByDateRangeForTeam', async function () {
                await api.fixturesByDateRangeForTeam('21-11-2012', '25-11-2012', 1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/fixtures/between/21-11-2012/25-11-2012/1?api_token=APITOKEN');
            });

            it('should call fixturesHeadToHead', async function () {
                await api.fixturesHeadToHead(1, 2);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/fixtures/head-to-head/1/2?api_token=APITOKEN');
            });

            it('should call fixturesUpcomingByMarketId', async function () {
                await api.fixturesUpcomingByMarketId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/fixtures/upcoming/markets/1?api_token=APITOKEN');
            });

        });

        describe('Livescores', function () {

            it('should call livescores with no params', async function () {
                await api.livescores();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/livescores?api_token=APITOKEN');
            });

            it('should call livescoresLatest', async function () {
                await api.livescoresLatest();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/livescores/latest?api_token=APITOKEN');
            });

            it('should call livescoresInPlay', async function () {
                await api.livescoresInPlay(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/livescores/inplay?api_token=APITOKEN');
            });

        });

        describe('Teams', function () {

            it('should call teams with no params', async function () {
                await api.teams();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/teams?api_token=APITOKEN');
            });

            it('should call teamsByCountryId', async function () {
                await api.teamsByCountryId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/teams/countries/1?api_token=APITOKEN');
            });

            it('should call teamsBySeasonId', async function () {
                await api.teamsBySeasonId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/teams/seasons/1?api_token=APITOKEN');
            });

            it('should search for a team by name', async function () {
                await api.teamsSearchByName('Juve');
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/teams/search/Juve?api_token=APITOKEN');
            });

            it('should call teamsById', async function () {
                await api.teamsById(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/teams/1?api_token=APITOKEN');
            });

        });

        describe('Standings', function () {

            it('should call standings with no params', async function () {
                await api.standings();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/standings?api_token=APITOKEN');
            });

            it('should call standingsBySeasonId', async function () {
                await api.standingsBySeasonId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/standings/seasons/1?api_token=APITOKEN');
            });

            it('should call standingsByRoundId', async function () {
                await api.standingsByRoundId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/standings/rounds/1?api_token=APITOKEN');
            });

            it('should call standingsCorrectionsBySeasonId', async function () {
                await api.standingsCorrectionBySeasonId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/standings/corrections/seasons/1?api_token=APITOKEN');
            });

            it('should call standingsByLeagueIdLive', async function () {
                await api.standingsByLeagueIdLive(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/standings/live/leagues/1?api_token=APITOKEN');
            });

        });

        describe('Schedules', function () {

            it('should call scheduleBySeasonId', async function () {
                await api.schedulesBySeasonId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/schedules/seasons/1?api_token=APITOKEN');
            });

            it('should call schedulesByTeamId', async function () {
                await api.schedulesByTeamId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/schedules/teams/1?api_token=APITOKEN');
            });

            it('should call schedulesBySeasonIdAndTeamId', async function () {
                await api.schedulesBySeasonIdAndTeamId(1, 1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/schedules/seasons/1/teams/1?api_token=APITOKEN');
            });

        });

        describe('Players', function () {

            it('should call players', async function () {
                await api.players();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/players?api_token=APITOKEN');
            });

            it('should call playersLatestUpdated', async function () {
                await api.playersLatestUpdated();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/players/latest?api_token=APITOKEN');
            });

            it('should call playersById', async function () {
                await api.playersById(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/players/1?api_token=APITOKEN');
            });

            it('should call playersByCountryId', async function () {
                await api.playersByCountryId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/players/countries/1?api_token=APITOKEN');
            });

            it('should search players by name', async function () {
                await api.playersSearchByName('Chiesa');
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/players/search/Chiesa?api_token=APITOKEN');
            });

        });

        describe('News', function () {

            it('should call newsPreMatch', async function () {
                await api.newsPreMatch();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/news/pre-match?api_token=APITOKEN');
            });

            it('should call newsPreMatchBySeasonId', async function () {
                await api.newsPreMatchBySeasonId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/news/pre-match/seasons/1?api_token=APITOKEN');
            });

            it('should call newsUpcomingPreMatch', async function () {
                await api.newsUpcomingPreMatch();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/news/pre-match/upcoming?api_token=APITOKEN');
            });

            it('should call newsPostMatch', async function () {
                await api.newsPostMatch();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/news/post-match?api_token=APITOKEN');
            });

            it('should call newsPostMatchBySeasonID', async function () {
                await api.newsPostMatchBySeasonId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/news/post-match/seasons/1?api_token=APITOKEN');
            });

            it('should call newsUpcomingPostMatch', async function () {
                await api.newsUpcomingPostMatch();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/news/post-match/upcoming?api_token=APITOKEN');
            });

        });

        describe('Venues', function () {

            it('should call venues', async function () {
                await api.venues();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/venues?api_token=APITOKEN');
            });

            it('should call venuesById', async function () {
                await api.venuesById(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/venues/1?api_token=APITOKEN');
            });

            it('should search for venue by name', async function () {
                await api.venuesSearchByName('Olimpico');
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/venues/search/Olimpico?api_token=APITOKEN');
            });

            it('should call venuesBySeasonID', async function () {
                await api.venuesBySeasonId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/venues/seasons/1?api_token=APITOKEN');
            });

        });

        describe('Seasons', function () {

            it('should call seasons', async function () {
                await api.seasons();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/seasons?api_token=APITOKEN');
            });

            it('should call seasonsById', async function () {
                await api.seasonsById(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/seasons/1?api_token=APITOKEN');
            });

            it('should search for season by name', async function () {
                await api.seasonsSearchByName('Stagione');
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/seasons/search/Stagione?api_token=APITOKEN');
            });

            it('should call seasonsByTeamId', async function () {
                await api.seasonsByTeamId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/seasons/teams/1?api_token=APITOKEN');
            });

        });

        describe('Squads', function () {

            it('should call squadsByTeamId', async function () {
                await api.squadsByTeamId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/squads/teams/1?api_token=APITOKEN');
            });

            it('should call squadsBySeasonIdAndByTeamId', async function () {
                await api.squadsBySeasonIdAndByTeamId(1, 1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/squads/seasons/1/teams/1?api_token=APITOKEN');
            });

        });

        describe('Tv Stations', function () {

            it('should call tvStations', async function () {
                await api.tvStations();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/tv-stations?api_token=APITOKEN');
            });

            it('should call tvStationsById', async function () {
                await api.tvStationsById(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/tv-stations/1?api_token=APITOKEN');
            });

            it('should call tvStationsByFixtureId', async function () {
                await api.tvStationsByFixtureId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/tv-stations/fixtures/1?api_token=APITOKEN');
            });

        });

        describe('Coaches', function () {

            it('should call coaches', async function () {
                await api.coaches();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/coaches?api_token=APITOKEN');
            });

            it('should call coachesLatestUpdated', async function () {
                await api.coachesLatestUpdated();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/coaches/latest?api_token=APITOKEN');
            });

            it('should call coachesById', async function () {
                await api.coachesById(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/coaches/1?api_token=APITOKEN');
            });

            it('should call coachesByCountryId', async function () {
                await api.coachesByCountryId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/coaches/countries/1?api_token=APITOKEN');
            });

            it('should search coaches by name', async function () {
                await api.coachesSearchByName('Chiesa');
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/coaches/search/Chiesa?api_token=APITOKEN');
            });

        });

        describe('Topscorers', function () {

            it('should call topscorersByStageId', async function () {
                await api.topscorersByStageId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/topscorers/stages/1?api_token=APITOKEN');
            });

            it('should call topscorersBySeasonId', async function () {
                await api.topscorersBySeasonId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/topscorers/seasons/1?api_token=APITOKEN');
            });

        });

        describe('Rounds', function () {

            it('should call rounds', async function () {
                await api.rounds();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/rounds?api_token=APITOKEN');
            });

            it('should call roundsById', async function () {
                await api.roundsById(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/rounds/1?api_token=APITOKEN');
            });

            it('should search for rounds by name', async function () {
                await api.roundsSearchByName('Round');
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/rounds/search/Round?api_token=APITOKEN');
            });

            it('should call roundsBySeasonId', async function () {
                await api.roundsBySeasonId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/rounds/seasons/1?api_token=APITOKEN');
            });

        });

        describe('Stages', function () {

            it('should call stages', async function () {
                await api.stages();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/stages?api_token=APITOKEN');
            });

            it('should call stagesById', async function () {
                await api.stagesById(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/stages/1?api_token=APITOKEN');
            });

            it('should search for stages by name', async function () {
                await api.stagesSearchByName('Stage');
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/stages/search/Stage?api_token=APITOKEN');
            });

            it('should call stagesBySeasonId', async function () {
                await api.stagesBySeasonId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/stages/seasons/1?api_token=APITOKEN');
            });

        });

        describe('Rivals', function () {

            it('should call rivals', async function () {
                await api.rivals();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/rivals?api_token=APITOKEN');
            });

            it('should call rivalsByTeamId', async function () {
                await api.rivalsByTeamId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/rivals/teams/1?api_token=APITOKEN');
            });

        });

        describe('Commentaries', function () {

            it('should call commentaries', async function () {
                await api.commentaries();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/commentaries?api_token=APITOKEN');
            });

            it('should call commentariesByFixtureId', async function () {
                await api.commentariesByFixtureId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/commentaries/fixtures/1?api_token=APITOKEN');
            });

        });

        describe('Referees', function () {

            it('should call referees', async function () {
                await api.referees();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/referees?api_token=APITOKEN');
            });

            it('should call refereesById', async function () {
                await api.refereesById(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/referees/1?api_token=APITOKEN');
            });

            it('should call refereesByCountryId', async function () {
                await api.refereesByCountryId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/referees/countries/1?api_token=APITOKEN');
            });

            it('should call refereesBySeasonId', async function () {
                await api.refereesBySeasonId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/referees/seasons/1?api_token=APITOKEN');
            });

            it('should search referees by name', async function () {
                await api.refereesSearchByName('Chiesa');
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/referees/search/Chiesa?api_token=APITOKEN');
            });

        });

        describe('Transfers', function () {

            it('should call transfers with no params', async function () {
                await api.transfers();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/transfers?api_token=APITOKEN');
            });

            it('should call transfersLastUpdated', async function () {
                await api.transfersLastUpdated();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/transfers/latest?api_token=APITOKEN');
            });

            it('should call transfersById', async function () {
                await api.transfersById(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/transfers/1?api_token=APITOKEN');
            });

            it('should call transfersByDateRange', async function () {
                await api.transfersByDateRange('21-11-2012', '25-11-2012');
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/transfers/between/21-11-2012/25-11-2012?api_token=APITOKEN');
            });

            it('should call transfersByTeamId', async function () {
                await api.transfersByTeamId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/transfers/teams/1?api_token=APITOKEN');
            });

            it('should call transfersByPlayerId', async function () {
                await api.transfersByPlayerId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/transfers/players/1?api_token=APITOKEN');
            });

        });

        describe('States', function () {

            it('should call states with no params', async function () {
                await api.states();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/states?api_token=APITOKEN');
            });

            it('should call statesById', async function () {
                await api.statesById(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/states/1?api_token=APITOKEN');
            });

        });

        describe('Predictions', function () {

            it('should call predictions with no params', async function () {
                await api.predictions();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/predictions/probabilities?api_token=APITOKEN');
            });

            it('should call predictionsByFixtureId', async function () {
                await api.predictionsByFixtureId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/predictions/probabilities/fixtures/1?api_token=APITOKEN');
            });

            it('should call predictionsValueBets', async function () {
                await api.predictionsValueBets();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/predictions/value-bets?api_token=APITOKEN');
            });

            it('should call predictionsValueBetsByFixtureId', async function () {
                await api.predictionsValueBetsByFixtureId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/predictions/value-bets/fixtures/1?api_token=APITOKEN');
            });

        });

        describe('Odds', function () {

            it('should call oddsPreMatch', async function () {
                await api.oddsPreMatch();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/odds/pre-match?api_token=APITOKEN');
            });

            it('should call oddsPreMatchLastUpdated', async function () {
                await api.oddsPreMatchLastUpdated();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/odds/pre-match/latest?api_token=APITOKEN');
            });

            it('should call oddsPreMatchByFixtureId', async function () {
                await api.oddsPreMatchByFixtureId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/odds/pre-match/fixtures/1?api_token=APITOKEN');
            });


            it('should call oddsPreMatchByFixtureIdAndBookmakerId', async function () {
                await api.oddsPreMatchByFixtureIdAndBookmakerId(1, 1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/odds/pre-match/fixtures/1/bookmakers/1?api_token=APITOKEN');
            });

            it('should call oddsPreMatchByFixtureIdAndMarketId', async function () {
                await api.oddsPreMatchByFixtureIdAndMarketId(1, 1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/odds/pre-match/fixtures/1/markets/1?api_token=APITOKEN');
            });

            it('should call oddsInPlay', async function () {
                await api.oddsInPlay();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/odds/inplay?api_token=APITOKEN');
            });

            it('should call oddsInPlayLatest', async function () {
                await api.oddsInPlayLatest();
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/odds/inplay/latest?api_token=APITOKEN');
            });

            it('should call oddsInPlayByFixtureId', async function () {
                await api.oddsInPlayByFixtureId(1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/odds/inplay/fixtures/1?api_token=APITOKEN');
            });

            it('should call oddsInPlayByFixtureIdAndBookmakerId', async function () {
                await api.oddsInPlayByFixtureIdAndBookmakerId(1, 1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/odds/inplay/fixtures/1/bookmakers/1?api_token=APITOKEN');
            });

            it('should call oddsInPlayByFixtureIdAndMarketId', async function () {
                await api.oddsInPlayByFixtureIdAndMarketId(1, 1);
                assert.strictEqual(api.lastPathCalled, 'api.sportmonks.com/v3/football/odds/inplay/fixtures/1/markets/1?api_token=APITOKEN');
            });

        });
    });
});