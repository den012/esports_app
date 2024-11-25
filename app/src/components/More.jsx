import react from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const More = () => {
    const [players, setPlayers] = useState([]);
    const [teams, setTeams] = useState([]);
    const [videoGames, setVideoGames] = useState([]);
    const [tournaments, setTournaments] = useState([]);

    useEffect(() => {
        fetchInfo();
    },[]);

    const fetchInfo = async () => {
        try{
            const response = await axios.get('http://localhost:3001/api/allInfo');
            setPlayers(response.data.players);
            setTeams(response.data.teams);
            setVideoGames(response.data.games);
            setTournaments(response.data.tournaments);
        } catch(error){
            console.error('Error fetching all info', error);
        }
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-4  p-6 min-h-screen">
            <div className="p-61 rounded-lg">
                <h1 className="text-2xl font-bold mb-4 text-blue-600">Players</h1>
                <ul className="list-disc list-inside">
                    {players.map((player) => (
                        <li key={`p${player.player_id}`} className="p-2 hover:text-blue-500 rounded-md">
                            {player.player_first_name} {player.player_last_name} "{player.player_nickname}"
                        </li>
                    ))}
                </ul>
            </div>
            <div className="p-6 rounded-lg">
                <h1 className="text-2xl font-bold mb-4 text-green-600">Teams</h1>
                <ul className="list-disc list-inside">
                    {teams.map((team) => (
                        <li key={`t${team.team_id}`} className="p-2 hover:text-green-500 rounded-md">
                            {team.team_name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="p-6 rounded-lg">
                <h1 className="text-2xl font-bold mb-4 text-red-600">Games</h1>
                <ul className="list-disc list-inside">
                    {videoGames.map((videogame) => (
                        <li key={`g${videogame.videogame_id}`} className="p-2 hover:text-red-500 rounded-md">
                            {videogame.videogame_name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="p-6 rounded-lg">
                <h1 className="text-2xl font-bold mb-4 text-purple-600">Tournaments</h1>
                <ul className="list-disc list-inside">
                    {tournaments.map((tournament) => (
                        <li key={`t${tournament.tournament_id}`} className="p-2 hover:text-purple-500 rounded-md">
                            {tournament.tournament_name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default More;