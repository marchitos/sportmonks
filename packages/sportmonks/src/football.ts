import { HttpClient, SportMonksConf, API_BASE_URL, GET_OPTS, IApiResponse } from "./client";
export class SportMonksFootball extends HttpClient {
    constructor(private conf: SportMonksConf) {
        super(`${API_BASE_URL}`, conf.apiToken);
    }
    get(path: string, opts?: GET_OPTS): Promise<IApiResponse<any>> {
        return super.get(`/v3/football${path}`, opts);
    }
    // Leagues
    leagues(live: boolean = false, opts?: GET_OPTS) {
        const path = live ? `/leagues/live` : `/leagues`;
        return this.get(path, opts);
    }
    leaguesById(id: number, opts?: GET_OPTS) {
        return this.get(`/leagues/${id}`, opts);
    }
    leaguesByTeamId(id: number, opts?: GET_OPTS) {
        return this.get(`/teams/${id}/leagues`, opts);
    }
    leaguesByTeamIdCurrent(id: number, opts?: GET_OPTS) {
        return this.get(`/teams/${id}/leagues/current`, opts);
    }
    shirtsByLeagueId(id: number, opts?: GET_OPTS) {
        return this.get(`/leagues/${id}/jerseys`, opts);
    }
    enrichmentsByLeagueId(id: number, opts?: GET_OPTS) {
        return this.get(`/leagues/${id}/includes`, opts);
    }
    leaguesByDate(date: Date, opts?: GET_OPTS) {
        return this.get(`/leagues/date/${date}`, opts);
    }
    leaguesByCountryId(countryId: number, opts?: GET_OPTS) {
        return this.get(`/leagues/countries/${countryId}`, opts);
    }
    leaguesSearchByName(name: string, opts?: GET_OPTS) {
        return this.get(`/leagues/search/${name}`, opts);
    }

    // Fixtures
    fixtures(opts?: GET_OPTS) {
        return this.get(`/fixtures`, opts);
    }
    fixturesLastUpdated(opts?: GET_OPTS) {
        return this.get(`/fixtures/latest`, opts);
    }
    fixturesById(id: number, opts?: GET_OPTS) {
        return this.get(`/fixtures/${id}`, opts);
    }
    fixturesByIds(ids: number[], opts?: GET_OPTS) {
        return this.get(`/fixtures/multi/${ids.join(',')}`, opts);
    }
    fixturesSearchByName(name: string, opts?: GET_OPTS) {
        return this.get(`/fixtures/search/${name}`, opts);
    }
    fixturesByDate(date: string, opts?: GET_OPTS) {
        return this.get(`/fixtures/date(${date})`, opts);
    }
    fixturesByDateRange(dateStart: string, dateEnd: string, opts?: GET_OPTS) {
        return this.get(`/fixtures/between/${dateStart}/${dateEnd}`, opts);
    }
    fixturesByDateRangeForTeam(dateStart: string, dateEnd: string, teamId: number, opts?: GET_OPTS) {
        return this.get(`fixtures/between/${dateStart}/${dateEnd}/${teamId}`, opts);
    }
    fixturesHeadToHead(firstTeamId: number, secondTeamId: number, opts?: GET_OPTS) {
        return this.get(`/fixtures/head-to-head/${firstTeamId}/${secondTeamId}`, opts);
    }
    fixturesUpcomingByMarketId(id: number, opts?: GET_OPTS) {
        return this.get(`/fixtures/upcoming/markets/${id}`, opts);
    }

    // livescores
    livescores(opts?: GET_OPTS) {
        return this.get(`livescores`, opts);
    }
    livescoresLatest(opts?: GET_OPTS) {
        return this.get(`/livescores/latest`, opts);
    }
    livescoresInPlay(opts?: GET_OPTS) {
        return this.get(`/livescores/inplay`, opts);
    }

    // teams
    teams(opts?: GET_OPTS) {
        return this.get(`/teams`, opts);
    }
    teamsByCountryId(id: number, opts?: GET_OPTS) {
        return this.get(`/teams/countries/${id}`, opts);
    }
    teamsBySeasonId(id: number, opts?: GET_OPTS) {
        return this.get(`/teams/seasons/${id}`, opts);
    }
    teamsSearchByName(name: string, opts?: GET_OPTS) {
        return this.get(`/teams/search/${name}`, opts);
    }
    teamsById(id: number, opts?: GET_OPTS) {
        return this.get(`/teams/${id}`, opts);
    }

    // standings
    standings(opts?: GET_OPTS) {
        return this.get(`/standings`, opts);
    }
    standingsBySeasonId(id: number, opts?: GET_OPTS) {
        return this.get(`/standings/seasons/${id}`, opts);
    }
    standingsByRoundId(id: number, opts?: GET_OPTS) {
        return this.get(`/standings/rounds/${id}`, opts);
    }
    standingsCorrectionBySeasonId(id: number, opts?: GET_OPTS) {
        return this.get(`/standings/corrections/seasons/${id}`, opts);
    }
    standingsByLeagueIdLive(id: number, opts?: GET_OPTS) {
        return this.get(`/standings/live/leagues/${id}`, opts);
    }

    // schedules
    schedulesBySeasonId(id: number, opts?: GET_OPTS) {
        return this.get(`/schedules/seasons/${id}`, opts);
    }
    schedulesByTeamId(id: number, opts?: GET_OPTS) {
        return this.get(`/schedules/teams/${id}`, opts);
    }
    schedulesBySeasonIdAndTeamId(seasonId: number, teamId: number, opts?: GET_OPTS) {
        return this.get(`/schedules/seasons/${seasonId}/${teamId}`, opts);
    }

    // players
    players(opts?: GET_OPTS) {
        return this.get(`/players`, opts);
    }
    playersLatestUpdated(opts?: GET_OPTS) {
        return this.get(`/players/latest`, opts);
    }
    playersById(id: number, opts?: GET_OPTS) {
        return this.get(`/players/${id}`, opts);
    }
    playersByCountryId(id: number, opts?: GET_OPTS) {
        return this.get(`/players/countries/${id}`, opts);
    }
    playersSearchByName(name: number, opts?: GET_OPTS) {
        return this.get(`/players/search/${name}`, opts);
    }

    // news
    newsPreMatch(opts?: GET_OPTS) {
        return this.get(`/news/pre-match`, opts);
    }
    newsPreMatchBySeasonId(id: number, opts?: GET_OPTS) {
        return this.get(`/news/pre-match/seasons/${id}`, opts);
    }
    newsUpcomingPreMatch(opts?: GET_OPTS) {
        return this.get(`/news/pre-match/upcoming`, opts);
    }
    newsPostMatch(opts?: GET_OPTS) {
        return this.get(`/news/post-match`, opts);
    }
    newsPostMatchBySeasonId(id: number, opts?: GET_OPTS) {
        return this.get(`/news/post-match/seasons/${id}`, opts);
    }
    newsUpcomingPostMatch(opts?: GET_OPTS) {
        return this.get(`/news/post-match/upcoming`, opts);
    }

    // venues
    venues(opts?: GET_OPTS) {
        return this.get(`/venues`, opts);
    }
    venuesById(id: number, opts?: GET_OPTS) {
        return this.get(`/venues/${id}`, opts);
    }
    venuesSearchByName(name: string, opts?: GET_OPTS) {
        return this.get(`/venues/search/${name}`, opts);
    }
    venuesBySeasonId(id: number, opts?: GET_OPTS) {
        return this.get(`/venues/seasons/${id}`, opts);
    }

    // seasons
    seasons(opts?: GET_OPTS) {
        return this.get(`/seasons`, opts);
    }
    seasonsById(id: number, opts?: GET_OPTS) {
        return this.get(`/seasons/${id}`, opts);
    }
    seasonsSearchByName(name: string, opts?: GET_OPTS) {
        return this.get(`/seasons/search/${name}`, opts);
    }
    seasonsByTeamId(id: number, opts?: GET_OPTS) {
        return this.get(`/seasons/teams/${id}`, opts);
    }

    // squads
    squadsByTeamId(id: number, opts?: GET_OPTS) {
        return this.get(`/squads/teams/${id}`, opts);
    }
    squadsBySeasonIdAndByTeamId(seasonId: number, teamId: number, opts?: GET_OPTS) {
        return this.get(`/squads/seasons/${seasonId}/teams/${teamId}`, opts);
    }

    // tv-stations
    tvStations(opts?: GET_OPTS) {
        return this.get(`/tv-stations`, opts);
    }
    tvStationsById(id: number, opts?: GET_OPTS) {
        return this.get(`/tv-stations/${id}`, opts);
    }
    tvStationsByFixtureId(id: number, opts?: GET_OPTS) {
        return this.get(`/tv-stations/fixtures/${id}`, opts);
    }

    // coaches
    coaches(opts?: GET_OPTS) {
        return this.get(`/coaches`, opts);
    }
    coachesLatestUpdated(opts?: GET_OPTS) {
        return this.get(`/coaches/latest`, opts);
    }
    coachesById(id: number, opts?: GET_OPTS) {
        return this.get(`/coaches/${id}`, opts);
    }
    coachesByCountryId(id: number, opts?: GET_OPTS) {
        return this.get(`/coaches/countries/${id}`, opts);
    }
    coachesSearchByName(name: number, opts?: GET_OPTS) {
        return this.get(`/coaches/search/${name}`, opts);
    }

    // topscorers
    topscorersByStageId(id: number, opts?: GET_OPTS) {
        return this.get(`/topscorers/stages/${id}`, opts);
    }
    topscorersBySeasonId(id: number, opts?: GET_OPTS) {
        return this.get(`/topscorers/seasons/${id}`, opts);
    }

    // rounds
    rounds(opts?: GET_OPTS) {
        return this.get(`/rounds`, opts);
    }
    roundsById(id: number, opts?: GET_OPTS) {
        return this.get(`/rounds/${id}`, opts);
    }
    roundsSearchByName(name: string, opts?: GET_OPTS) {
        return this.get(`/rounds/search/${name}`, opts);
    }
    roundsBySeasonId(id: number, opts?: GET_OPTS) {
        return this.get(`/rounds/seasons/${id}`, opts);
    }

    // stages
    stages(opts?: GET_OPTS) {
        return this.get(`/stages`, opts);
    }
    stagesById(id: number, opts?: GET_OPTS) {
        return this.get(`/stages/${id}`, opts);
    }
    stagesSearchByName(name: string, opts?: GET_OPTS) {
        return this.get(`/stages/search/${name}`, opts);
    }
    stagesBySeasonId(id: number, opts?: GET_OPTS) {
        return this.get(`/stages/seasons/${id}`, opts);
    }

    // rivals
    rivals(opts?: GET_OPTS) {
        return this.get(`/rivals`, opts);
    }
    rivalsByTeamId(id: number, opts?: GET_OPTS) {
        return this.get(`/rivals/teams/${id}`, opts);
    }

    // commentaries
    commentaries(opts?: GET_OPTS) {
        return this.get(`/commentaries`, opts);
    }
    commentariesByFixtureId(id: number, opts?: GET_OPTS) {
        return this.get(`/commentaries/fixtures/${id}`, opts);
    }

    // referees
    referees(opts?: GET_OPTS) {
        return this.get(`/referees`, opts);
    }
    refereesById(id: number, opts?: GET_OPTS) {
        return this.get(`/referees/${id}`, opts);
    }
    refereesSearchByName(name: string, opts?: GET_OPTS) {
        return this.get(`/referees/search/${name}`, opts);
    }
    refereesBySeasonId(id: number, opts?: GET_OPTS) {
        return this.get(`/referees/seasons/${id}`, opts);
    }
    refereesByCountryId(id: number, opts?: GET_OPTS) {
        return this.get(`/referees/countries/${id}`, opts);
    }

    // transfers
    transfers(opts?: GET_OPTS) {
        return this.get(`/transfers`, opts);
    }
    transfersLastUpdated(opts?: GET_OPTS) {
        return this.get(`/transfers/latest`, opts);
    }
    transfersById(id: number, opts?: GET_OPTS) {
        return this.get(`/transfers/${id}`, opts);
    }
    transfersByDateRange(dateStart: string, dateEnd: string, opts?: GET_OPTS) {
        return this.get(`/transfers/between/${dateStart}/${dateEnd}`, opts);
    }
    transfersByTeamId(id: number, opts?: GET_OPTS) {
        return this.get(`/transfers/teams/${id}`, opts);
    }
    transfersByPlayerId(id: number, opts?: GET_OPTS) {
        return this.get(`/transfers/players/${id}`, opts);
    }

    // states
    states(opts?: GET_OPTS) {
        return this.get(`/states`, opts);
    }
    statesById(id: number, opts?: GET_OPTS) {
        return this.get(`/states/${id}`, opts);
    }

    // predictions
    predictions(opts?: GET_OPTS) {
        return this.get(`/predictions/probabilities`, opts);
    }
    predictionsByFixtureId(id: number, opts?: GET_OPTS) {
        return this.get(`/predictions/probabilities/fixtures/${id}`, opts);
    }
    predictionsValueBets(opts?: GET_OPTS) {
        return this.get(`/predictions/value-bets`, opts);
    }
    predictionsValueBetsByFixtureId(id: number, opts?: GET_OPTS) {
        return this.get(`/predictions/value-bets/fixtures/${id}`, opts);
    }

    // odds
    oddsPreMatch(opts?: GET_OPTS) {
        return this.get(`/odds/pre-match`, opts);
    }
    oddsPreMatchLastUpdated(opts?: GET_OPTS) {
        return this.get(`/odds/pre-match/latest`, opts);
    }
    oddsPreMatchByFixtureId(id: number, opts?: GET_OPTS) {
        return this.get(`/odds/pre-match/fixtures/${id}`, opts);
    }
    oddsPreMatchByFixtureIdAndBookmakerId(fixtureId: number, bookmakerId: number, opts?: GET_OPTS) {
        return this.get(`/odds/pre-match/fixtures/${fixtureId}/bookmakers/${bookmakerId}`, opts);
    }
    oddsPreMatchByFixtureIdAndMarketId(fixtureId: number, marketId: number, opts?: GET_OPTS) {
        return this.get(`/odds/pre-match/fixtures/${fixtureId}/markets/${marketId}`, opts);
    }
    oddsInPlay(opts?: GET_OPTS) {
        return this.get(`/odds/inplay`, opts);
    }
    oddsInPlayLatest(opts?: GET_OPTS) {
        return this.get(`/odds/inplay/latest`, opts);
    }
    oddsInPlayByFixtureId(id: number, opts?: GET_OPTS) {
        return this.get(`/odds/inplay/fixtures/${id}`, opts);
    }
    oddsInPlayByFixtureIdAndBookmakerId(fixtureId: number, bookmakerId: number, opts?: GET_OPTS) {
        return this.get(`/odds/inplay/fixtures/${fixtureId}/bookmakers/${bookmakerId}`, opts);
    }
    oddsInPlayByFixtureIdAndMarketId(fixtureId: number, marketId: number, opts?: GET_OPTS) {
        return this.get(`/odds/inplay/fixtures/${fixtureId}/markets/${marketId}`, opts);
    }

}