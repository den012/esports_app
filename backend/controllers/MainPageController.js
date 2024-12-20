import db from '../config/database.js';
import { nationalityFlags } from '../config/variables.js';
class MainPageController {
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
                // const totalPages = 1;

                //get current page palyers
                const query = `
                    SELECT player_id, player_first_name, player_last_name, player_nickname, player_nationality
                     FROM PLAYER
                     ORDER BY RAND() 
                     LIMIT ? OFFSET ?`;
                    //  ORDER BY RAND()
                // SELECT player_id, player_first_name, player_last_name, player_nickname, player_nationality FROM PLAYER LIMIT ? OFFSET ?
                db.query(query, [itemsPerPage, offset], (err, result) => {
                    if(err) {
                        res.status(500).json({message: err.message});
                    }
                    // console.log('Fetched players from database');
                    // console.log(result);

                    const playersWithFlags = result.map(player => ({
                        ...player,
                        player_nationality: nationalityFlags[player.player_nationality] || player.player_nationality

                    }));
                    res.status(200).json({
                        players: playersWithFlags,
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
        const itemsPerPage = 4;
        const page = parseInt(req.query.page) || 1;
        const offset = (page - 1) * itemsPerPage;
        try{
            const countQuery = 'SELECT COUNT(*) AS total FROM TEAM';
            db.query(countQuery, (err, countResult) => {
                if(err) {
                    res.status(500).json({message: err.message});
                }
                const totalTeams = countResult[0].total;
                const totalPages = Math.ceil(totalTeams / itemsPerPage);

                const query = `
                    SELECT team_id, team_name 
                    FROM TEAM 
                    ORDER BY RAND()
                    LIMIT ? OFFSET ?`;
                db.query(query,[itemsPerPage, offset], (err, result) => {
                    if(err) {
                        res.status(500).json({message: err.message});
                    }
                    res.status(200).json({
                        teams : result,
                        totalTeams,
                        totalPages,
                        currentPage: page
                    });
                });
            });
        } catch(err) {
            res.status(500).json({message: err.message});
        }
    }

    static async getTournaments(req, res){
        const itemsPerPage = 3;
        const page = parseInt(req.query.page) || 1;
        const offset = (page - 1) * itemsPerPage;

        try{
            const countQuery = 'SELECT COUNT(*) AS total from TOURNAMENT';
            db.query(countQuery, (err, countResult) => {
                if(err){
                    res.status(500).json({message: err.message});
                }
                const totalTournaments = countResult[0].total;
                const totalPages = Math.ceil(totalTournaments / itemsPerPage);

                const query = `SELECT * FROM TOURNAMENT
                            ORDER BY RAND()
                            LIMIT ? OFFSET ?`;
                db.query(query,[itemsPerPage, offset], (err, result) => {
                    if(err){
                        res.status(500).json({message: err.message});
                    }
                    res.status(200).json({
                        tournaments : result,
                        totalTournaments,
                        totalPages,
                        currentPage: page
                    });
                });
            });
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }


    static async getVideogames(req, res){
        const itemsPerPage = 4;
        const page = parseInt(req.query.page) || 1;
        const offset = (page - 1) * itemsPerPage;
        try{
            const countQuery = 'SELECT COUNT(*) AS total FROM VIDEOGAME';
            db.query(countQuery, (err, countResult) => {
                if(err){
                    res.status(500).json({message: err.message});
                }
                const totalVideogames = countResult[0].total;
                const totalPages = Math.ceil(totalVideogames / itemsPerPage);

                const query = 'SELECT * FROM VIDEOGAME LIMIT ? OFFSET ?';
                db.query(query,[itemsPerPage, offset], (err, result) => {
                    if(err){
                        res.status(500).json({message: err.message});
                    }
                    res.status(200).json({
                        videogames : result,
                        totalVideogames,
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

export default MainPageController;