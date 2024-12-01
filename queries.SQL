const playersQuery = 'SELECT * FROM PLAYER';
const teamsQuery = 'SELECT * FROM TEAM';
const gamesQuery = 'SELECT * FROM VIDEOGAME';
const tournamentsQuery = 'SELECT * FROM TOURNAMENT';


const countQuery = 'SELECT COUNT(*) AS total FROM PLAYER';

const query = `
SELECT player_id, player_first_name, player_last_name, player_nickname, player_nationality
FROM PLAYER
ORDER BY RAND() 
LIMIT ? OFFSET ?`;

const countQuery = 'SELECT COUNT(*) AS total FROM TEAM';

const query = `
SELECT team_id, team_name 
FROM TEAM 
ORDER BY RAND()
LIMIT ? OFFSET ?`;

const countQuery = 'SELECT COUNT(*) AS total from TOURNAMENT';

const query = `SELECT * FROM TOURNAMENT
ORDER BY RAND()
LIMIT ? OFFSET ?`;
const countQuery = 'SELECT COUNT(*) AS total FROM VIDEOGAME';

const query = 'SELECT * FROM VIDEOGAME LIMIT ? OFFSET ?';

const playerTeamQuery = `
SELECT p.*, t.* 
FROM PLAYER p 
JOIN TEAM t ON p.team_id = t.team_id
WHERE p.player_id = ?
`;

const teammatesQuery = `
SELECT p2.*
FROM PLAYER p1
JOIN PLAYER p2 ON p1.team_id = p2.team_id
WHERE p1.player_id = ? AND p2.player_id != ?
`;

const videogameQuery = `
SELECT v.*
FROM PLAYER p
JOIN TEAM t ON p.team_id = t.team_id
JOIN VIDEOGAME v ON t.videogame_id = v.videogame_id
WHERE p.player_id = ?`

const matchQuery = `
SELECT mp.match_id, mp.match_start_time, mp.match_end_time, mp.match_status, mp.number_of_games,
t1.team_name AS team_1_name,
t2.team_name AS team_2_name,
t_winner.team_name AS winner_team_name,
tr.tournament_name, tr.tournament_prize
FROM PLAYER p
JOIN TEAM t ON p.team_id = t.team_id
JOIN MATCH_PLAYED mp on (t.team_id = mp.team_1_id OR t.team_id = mp.team_2_id)
LEFT JOIN TEAM t1 ON mp.team_1_id = t1.team_id
LEFT JOIN TEAM t2 On mp.team_2_id = t2.team_id
LEFT JOIN TEAM t_winner ON mp.winner_team_id = t_winner.team_id
LEFT JOIN TOURNAMENT tr ON mp.tournament_id = tr.tournament_id
WHERE
p.player_id = ?;`

const query = `
SELECT * 
FROM TEAM t 
JOIN PLAYER p ON t.team_id = p.team_id
WHERE t.team_id = ?`;

const tournamentQuery = `
SELECT * FROM TOURNAMENT
WHERE tournament_id = ?;`

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


