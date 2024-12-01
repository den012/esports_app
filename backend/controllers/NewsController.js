import db from '../config/database.js';

class NewsController {
    static async getNews(req, res) {

        try {
            const query = 'SELECT * FROM NEWS ORDER BY RAND() LIMIT 1';
            db.query(query, (err, result) => {
                if(err){
                    res.status(500).json({ message: err.message });
                }
                res.status(200).json({news: result[0]});
            })
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default NewsController;