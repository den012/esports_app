import db from '../config/database.js';

class Controller {
    static async getPlayers(req, res) {
        const itemsPerPage = 4;
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


    static async getTeams(req, res) {
        try{
            const query = 'SELECT team_name FROM TEAM';
            db.query(query, (err, result) => {
                if(err) {
                    res.status(500).json({message: err.message});
                }
                res.status(200).json({
                    teams : result
                });
            });
        } catch(err) {
            res.status(500).json({message: err.message});
        }
    }

    static async getTournaments(req, res){
        try{
            const query = 'SELECT tournament_name FROM TOURNAMENT';
            db.query(query, (err, result) => {
                if(err){
                    res.status(500).json({message: err.message});
                }
                res.status(200).json({
                    tournaments : result
                });
            });
        }catch(err){
            res.stauts(500).json({message: err.message});
        }
    }


    static async getVideogames(req, res){
        try{
            const query = 'SELECT videogame_name FROM VIDEOGAME';
            db.query(query, (err, result) => {
                if(err){
                    res.status(500).json({message: err.message});
                }
                res.status(200).json({
                    videogames : result
                });
            });
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }
}

export default Controller;