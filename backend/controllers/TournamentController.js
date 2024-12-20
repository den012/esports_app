import db from '../config/database.js';

class TournamentController {
    static async getTournaments(req, res) {
        const tournament_id = req.params.id;

        try{
            const tournamentQuery = `
                SELECT * FROM TOURNAMENT
                WHERE tournament_id = ?;`

            db.query(tournamentQuery, [tournament_id], (err, tournamentResult) => {
                if(err){
                    return res.status(500).json({ message: "Error occurred!", error: err.message });
                }

                if(tournamentResult.length === 0){
                    return res.status(404).json({ message: "Tournament not found!" });
                }

                const tournamentInfo = {
                    tournament_id: tournamentResult[0].tournament_id,
                    tournament_name: tournamentResult[0].tournament_name,
                    tournament_location: tournamentResult[0].tournament_location,
                    tournament_start: tournamentResult[0].tournament_start,
                    tournament_end: tournamentResult[0].tournament_end,
                    tournament_prize: tournamentResult[0].tournament_prize,
                    tournament_winner_team_id : tournamentResult[0].tournament_winner_team_id,
                    tournament_image: tournamentResult[0].tournament_image,
                };

                const tournamentMatchesQuery = `
                    SELECT 
                    mp.match_id, 
                    mp.match_start_time, 
                    mp.match_end_time, 
                    mp.match_draw, 
                    mp.match_forfeit, 
                    mp.match_status, 
                    mp.winner_team_id, 

                    t1.team_name AS 'team1Name', 
                    t1.team_logo AS 'team1Logo', 
                    t1.team_acronym AS 'team1Acro', 

                    t2.team_name AS 'team2Name', 
                    t2.team_logo AS 'team2Logo', 
                    t2.team_acronym AS 'team2Acro', 

                    COALESCE(SUM(CASE WHEN sg.game_winner = mp.team_1_id THEN 1 ELSE 0 END), 0) AS team1Wins,
                    COALESCE(SUM(CASE WHEN sg.game_winner = mp.team_2_id THEN 1 ELSE 0 END), 0) AS team2Wins,

                    tw.team_name AS 'winnerTeamName'

                    FROM 
                        MATCH_PLAYED mp
                    JOIN 
                        TOURNAMENT t ON mp.tournament_id = t.tournament_id
                    JOIN 
                        TEAM t1 ON mp.team_1_id = t1.team_id
                    JOIN 
                        TEAM t2 ON mp.team_2_id = t2.team_id
                    LEFT JOIN 
                        SINGLE_GAME sg ON mp.match_id = sg.match_id
                    LEFT JOIN 
                        TEAM tw ON mp.winner_team_id = tw.team_id  -- Join to get the winner team's name

                    WHERE 
                        t.tournament_id = ?

                    GROUP BY 
                        mp.match_id; `

                db.query(tournamentMatchesQuery, [tournament_id], (err, matchesResult) => {
                    if(err){
                        return res.status(500).json({ message: "Error occurred!", error: err.message });
                    }

                    tournamentInfo.matches = matchesResult.map(match => {
                        return {
                            match_id: match.match_id,
                            match_start_time: match.match_start_time,
                            match_end_time: match.match_end_time,
                            match_draw: match.match_draw,
                            match_forfeit: match.match_forfeit,
                            match_status: match.match_status,
                            winner_team_id: match.winner_team_id,
                            winner_team_name: match.winnerTeamName,
                            team_1: {
                                team_name: match.team1Name,
                                team_logo: match.team1Logo,
                                team_acronym: match.team1Acro
                            },
                            team_2: {
                                team_name: match.team2Name,
                                team_logo: match.team2Logo,
                                team_acronym: match.team2Acro
                            },
                            team_1_wins: match.team1Wins,
                            team_2_wins: match.team2Wins,
                        }
                    });
                    return res.status(200).json(tournamentInfo);
                });
            })
        } catch(error){
            return res.status(500).json({ message: "Error occurred!", error: error.message });
        }
    }
}

export default TournamentController;