import { SPORTMONKS_API_KEY } from './sportmonks_api_key';
import { SportMonks } from 'sportmonks';

const sportmonks = new SportMonks({ apiToken: SPORTMONKS_API_KEY });

const test = async () => {
    // 320 Denmark
    // 1161 Scotland
    /*
    const leaguesResp = await sportmonks.football.leagues(false, {
        includes: ['country']
    });
    console.log(leaguesResp.data)
    const leagues = leaguesResp.data;
    console.log(leagues);
    console.log('-------');
    leagues.forEach((l: any) => console.log(`${l.name} (${l.id}) - ${l.country.name} (${l.country.id})`))
    //const resp = await sportmonks.football.fixtures({ select: ['name', 'leg'] });
    */
    const playersResp = await sportmonks.football.playersByCountryId(320, { includes: ['position', 'teams', 'teams.team'] });
    const players = playersResp.data;
    delete playersResp.data;
    const meta = playersResp;
    console.log(meta);
    console.log('-------');
    console.log(players[0]);
    console.log('-------');
    players.forEach((p: any) => {
        const team = p.teams[0] && p.teams[0].team ? `${p.teams[0].team.name} (${p.teams[0].team.id})` : '-';
        console.log(`${p.name} (${p.id}) [${p.position.name}] - ${team}`)
    })
}
test();