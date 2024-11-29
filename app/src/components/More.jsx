import react from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const More = () => {
    const navigate = useNavigate();
    
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

    const handlePlayerClick = async (playerId) => {
        console.log("Player ID: ", playerId);
        const encodedPlayerId = btoa(playerId.toString());
        navigate(`/player/${encodedPlayerId}`);
    }

    const handleTeamClick = async (teamId) => {
        const encodedTeamId = btoa(teamId.toString());
        navigate(`/team/${encodedTeamId}`);
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center w-full px-4">
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-5 mt-6 mb-4 w-full">
                    <input type="text" placeholder="Search" className="w-full sm:w-96 p-2 pl-3 font-semibold rounded-lg border border-gray-300 bg-gray-100 bg-opacity-70 focus:ring-blue-300 text-gray-700 placeholder-gray-500 "/>
                    <button className="bg-blue-500 hover:bg-blue-700 hover:scale-110 text-white font-semibold py-2 px-6 rounded-lg shadow-sm transition duration-300">Search</button>
                </div>
            </div>
            <div className="grid grid-cols-1  p-6 min-h-screen">
                <div className="p-6 rounded-lg">
                    <h1 className="text-2xl font-bold mb-4 text-blue-600">Players</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {players.map((player) => (
                                <p key={`p${player.player_id}`} className="p-1 hover:text-blue-500 hover:underline rounded-md cursor-pointer"  
                                onClick = {() => handlePlayerClick(player.player_id)}>
                                    {player.player_first_name} {player.player_last_name} "{player.player_nickname}"
                                </p>
                            ))}
                    </div>
                </div>
                <div className="p-6 rounded-lg">
                    <h1 className="text-2xl font-bold mb-4 text-green-600">Teams</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {teams.map((team) => (
                            <p key={`t${team.team_id}`}
                            onClick = {() => handleTeamClick(team.team_id)}
                             className="p-1 hover:text-green-500 hover:underline rounded-md cursor-pointer">
                                {team.team_name}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="p-6 rounded-lg">
                    <h1 className="text-2xl font-bold mb-4 text-red-600">Games</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {videoGames.map((videogame) => (
                            <p key={`g${videogame.videogame_id}`} className="p-1 hover:text-red-500 hover:underline rounded-md">
                                {videogame.videogame_name}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="p-6 rounded-lg">
                    <h1 className="text-2xl font-bold mb-4 text-purple-600">Tournaments</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {tournaments.map((tournament) => (
                            <p key={`t${tournament.tournament_id}`} className="p-1 hover:underline hover:text-purple-500 rounded-md cursor-pointer">
                                {tournament.tournament_name}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default More;