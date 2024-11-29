import react from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Tournament = () => {
    const { tournamentId } = useParams();
    const decodedTournamentId = atob(tournamentId);

    const [tournamentInfo, setTournamentInfo] = useState(null);

    useEffect(() => {
        fetchTournamentInfo();
    },[]);

    const fetchTournamentInfo = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/tournament/${decodedTournamentId}`);
            const tournamentInfo = response.data;
            setTournamentInfo(tournamentInfo);
        } catch(error){
            console.error("Error trying to fetch tournament info: ", error);
        }
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    const formatPrize = (prize) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(prize);
    }

    if (!tournamentInfo) {
        return <div>Loading...</div>
    }


    return (
        <div>
            <div>
                <h1>Tournament Info</h1>
                <h1>{tournamentInfo.tournament_name}</h1>
                <img src={tournamentInfo.tournament_image} alt={tournamentInfo.tournament_name} />
                <p>{tournamentInfo.tournament_location}</p>
                <p>{formatPrize(tournamentInfo.tournament_prize)}</p>
                <p>{formatDate(tournamentInfo.tournament_start)}</p>
                <p>{formatDate(tournamentInfo.tournament_end)}</p>
            </div>

            <div>
                <h2>Matches</h2>
                <div>
                    {tournamentInfo.matches.map(match => {
                        return (
                            <div key={match.match_id}>
                                <img src={match.team_1.team_logo}></img>
                                <img src={match.team_2.team_logo}></img>
                                <h3>{match.team_1.team_name} vs {match.team_2.team_name}</h3>
                                <p>{match.match_start_time} - {match.match_end_time}</p>
                                <p>{match.match_status}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Tournament;