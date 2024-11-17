import db from '../config/database.js';

class PlayerInformationController {
    static async getPlayerInformation(req, res) {
        const playerId = req.params.id;

        try {
            const query = 'SELECT * FROM PLAYER WHERE player_id = ?';
            db.query(query, playerId, (err, result) => {
                if(err){
                    res.status(500).json({message: "Error occured!" , message: err.message});
                }
                res.status(200).json(result[0]);
            });
        } catch(error){
            res.status(500).json({message: "Error occured while trying to get player info", error: error.message});
        }
    }
}

export default PlayerInformationController;