import db from '../config/database.js';

class Controller {
    static async getPlayers(req, res) {
        const itemsPerPage = 6;
        const page = parseInt(req.query.page) || 1;
        const offset = (page - 1) * itemsPerPage;

        try {
            //count the players
            const countQuery = 'SELECT COUNT(*) AS total FROM PLAYER';
            db.query(countQuery, (err, countResult) => {
                if(err) {
                    res.status(500).json({message: err.message});
                }
                const totalPlayers = countResult[0].total;
                const totalPages = Math.ceil(totalPlayers / itemsPerPage);

                //get current page palyers
                const query = 'SELECT player_first_name, player_last_name FROM PLAYER LIMIT ? OFFSET ?';
                db.query(query, [itemsPerPage, offset], (err, result) => {
                    if(err) {
                        res.status(500).json({message: err.message});
                    }
                    // console.log('Fetched players from database');
                    res.status(200).json({
                        players: result,
                        totalPlayers,
                        totalPages,
                        currentPage: page
                    });
                });
            });
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }
}

export default Controller;