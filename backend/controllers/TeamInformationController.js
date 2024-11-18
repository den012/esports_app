import db from '../config/database.js';

class TeamInformationController {
    static async getTeamInformation(req, res) {
        const teamId = req.params.id;

        try{
            const query = `
                SELECT * 
                FROM TEAM t 
                JOIN TEAM_PLAYER tp ON t.team_id = tp.team_id 
                JOIN PLAYER p ON tp.player_id = p.player_id 
                WHERE t.team_id = ?`;
            db.query(query, teamId, (err, result) => {
                if(err){
                    res.status(500).json({message: "Error occured!", message: err.message});
                }

                if(result.length === 0){
                    res.status(404).json({message: `Team with id ${teamId} not found`});
                }

                const teamInfo = {
                    team_id : result[0].team_id,
                    team_name: result[0].team_name,
                    team_location: result[0].team_location,
                    team_acronym: result[0].team_acronym,
                    team_image : result[0].team_image
                }

                const playerInfo = result.map(player => ({
                    player_id: player.player_id,
                    player_first_name: player.player_first_name,
                    player_last_name: player.player_last_name,
                    player_nickname: player.player_nickname,
                    player_image: player.player_image,
                    player_role: player.player_role,
                }));
                res.status(200).json([teamInfo, playerInfo]);
            });
        } catch(error){
            res.status(500).json({message: "Error occured while trying to get team info", error: error.message});
        }
    }
}

export default TeamInformationController;