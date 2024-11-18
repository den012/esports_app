import db from '../config/database.js';

class PlayerInformationController {
    static async getPlayerInformation(req, res) {
        const playerId = req.params.id;

        try {
            const query = `
                SELECT * 
                FROM PLAYER p 
                JOIN TEAM_PLAYER tp on p.player_id = tp.player_id 
                JOIN TEAM t on tp.team_id = t.team_id
                WHERE p.player_id = ?`;
            db.query(query, playerId, (err, result) => {
                if(err){
                    res.status(500).json({message: "Error occured!" , message: err.message});
                }

                const teamInfo = {
                    team_id : result[0].team_id,
                    team_name: result[0].team_name,
                    team_location: result[0].team_location,
                    team_acronym: result[0].team_acronym,
                    team_image : result[0].team_image
                }

                const playerInfo = {
                    player_id: result[0].player_id,
                    player_first_name: result[0].player_first_name,
                    player_last_name: result[0].player_last_name,
                    player_nickname: result[0].player_nickname,
                    player_image: result[0].player_image,
                    player_role: result[0].player_role,
                };
                res.status(200).json([teamInfo, playerInfo]);
            });
        } catch(error){
            res.status(500).json({message: "Error occured while trying to get player info", error: error.message});
        }
    }
}

export default PlayerInformationController;