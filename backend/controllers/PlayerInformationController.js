import db from '../config/database.js';

class PlayerInformationController {
    static async getPlayerInformation(req, res) {
        const playerId = req.params.id;

        try {
            // First query: Get player and team information
            const playerTeamQuery = `
                SELECT p.*, t.* 
                FROM PLAYER p 
                JOIN TEAM t ON p.team_id = t.team_id
                WHERE p.player_id = ?
            `;

            db.query(playerTeamQuery, [playerId], (err, playerResult) => {
                if (err) {
                    return res.status(500).json({ message: "Error occurred!", error: err.message });
                }

                if (playerResult.length === 0) {
                    return res.status(404).json({ message: "Player not found!" });
                }

                const teamInfo = {
                    team_id: playerResult[0].team_id,
                    team_name: playerResult[0].team_name,
                    team_location: playerResult[0].team_location,
                    team_acronym: playerResult[0].team_acronym,
                    team_image: playerResult[0].team_image,
                    team_logo: playerResult[0].team_logo,
                };

                const playerInfo = {
                    player_id: playerResult[0].player_id,
                    player_first_name: playerResult[0].player_first_name,
                    player_last_name: playerResult[0].player_last_name,
                    player_nickname: playerResult[0].player_nickname,
                    player_birthday: playerResult[0].player_birthday,
                    player_nationality: playerResult[0].player_nationality,
                    player_image: playerResult[0].player_image,
                    player_role: playerResult[0].player_role,
                };

                // Second query: Get teammates
                const teammatesQuery = `
                    SELECT p2.*
                    FROM PLAYER p1
                    JOIN PLAYER p2 ON p1.team_id = p2.team_id
                    WHERE p1.player_id = ? AND p2.player_id != ?
                `;

                db.query(teammatesQuery, [playerId, playerId], (err, teammateResult) => {
                    if (err) {
                        return res.status(500).json({ message: "Error occurred while fetching teammates!", error: err.message });
                    }

                    const teammates = teammateResult.map((teammate) => ({
                        teammate_id: teammate.player_id,
                        teammate_first_name: teammate.player_first_name,
                        teammate_last_name: teammate.player_last_name,
                        teammate_nickname: teammate.player_nickname,
                        teammate_image: teammate.player_image,
                        teammate_role: teammate.player_role,
                    }));

                    //get what videogame the players play
                    const videogameQuery = `
                        SELECT v.*
                        FROM PLAYER p
                        JOIN TEAM t ON p.team_id = t.team_id
                        JOIN VIDEOGAME v ON t.videogame_id = v.videogame_id
                        WHERE p.player_id = ?`

                    db.query(videogameQuery, [playerId], (err, videogameResult) => {
                        if(err){
                            return res.status(500).json({ message: "Error occurred while fetching videogame!", error: err.message });
                        }

                        const videogame = {
                            videogame_id: videogameResult[0].videogame_id,
                            videogame_name: videogameResult[0].videogame_name
                        }

                        res.status(200).json({ teamInfo, playerInfo, teammates, videogame });
                    })
                });
            });
        } catch (error) {
            res.status(500).json({
                message: "Error occurred while trying to get player info",
                error: error.message,
            });
        }
    }
}

export default PlayerInformationController;