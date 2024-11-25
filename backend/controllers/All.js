import db from '../config/database.js';

class All {
    static getAllData(req, res) {
        const playersQuery = 'SELECT * FROM PLAYER';
        const teamsQuery = 'SELECT * FROM TEAM';
        const gamesQuery = 'SELECT * FROM VIDEOGAME';
        const tournamentsQuery = 'SELECT * FROM TOURNAMENT';

        // Execute all queries with callbacks
        db.query(playersQuery, (playersError, players) => {
            if (playersError) {
                return res.status(500).json({
                    message: "Error occurred while fetching players",
                    error: playersError.message
                });
            }

            db.query(teamsQuery, (teamsError, teams) => {
                if (teamsError) {
                    return res.status(500).json({
                        message: "Error occurred while fetching teams",
                        error: teamsError.message
                    });
                }

                db.query(gamesQuery, (gamesError, games) => {
                    if (gamesError) {
                        return res.status(500).json({
                            message: "Error occurred while fetching games",
                            error: gamesError.message
                        });
                    }

                    db.query(tournamentsQuery, (tournamentsError, tournaments) => {
                        if (tournamentsError) {
                            return res.status(500).json({
                                message: "Error occurred while fetching tournaments",
                                error: tournamentsError.message
                            });
                        }

                        // All queries succeeded
                        res.status(200).json({
                            players,
                            teams,
                            games,
                            tournaments
                        });
                    });
                });
            });
        });
    }
}

export default All;
