import react from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Player = () => {
    const { playerId } = useParams();
    const decodedPlayerId = atob(playerId);
    // console.log(decodedPlayerId);

    const [playerInfo, setPlayerInfo] = useState(null);
    const [teamInfo, setTeamInfo] = useState(null);
    const [teammates, setTeammates] = useState([])
    const [videogame, setVideogame] = useState(null);

    useEffect(() => {
        fetchPlayerInfo();
    },[]);

    const fetchPlayerInfo = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/player/${decodedPlayerId}`);
            // console.log(response.data);
            const { teamInfo, playerInfo, teammates, videogame } = response.data;
            setTeamInfo(teamInfo);
            setPlayerInfo(playerInfo);
            setTeammates(teammates || []);
            setVideogame(videogame);

        }catch(error){
            console.error("Error trying to fetch player info: ", error);
        }
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    const videoGameEmoji = (videogameName) => {
        if (videogameName === "League of Legends") {
            return "🐉";
        }
        else if (videogameName === "Valorant") {
            return "🔮";
        }
        else if (videogameName === "Counter-Strike: Global Offensive") {
            return "💣🔫";
        }
    }


    if (!playerInfo || !teamInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="flex flex-col md:flex-row justify-center items-start p-6 bg-gray-100 bg-opacity-65 space-y-6 md:space-y-0 md:space-x-6">

                <div className="flex flex-col w-full md:w-1/3">
                    <h1 className="text-2xl font-bold mb-4 text-blue-600">Player Information</h1>
                    <div className="space-y-4">
                        <img src={playerInfo.player_image} alt="Player" className="w-48 h-48 rounded-lg object-cover mx-auto" />
                        <h2 className="text-xl font-semibold text-center">{playerInfo.player_first_name} {playerInfo.player_last_name}</h2>
                        <h2 className="text-lg text-gray-700 text-center">Nickname: "{playerInfo.player_nickname}"</h2>
                        <h2 className="text-lg text-gray-700 text-center">Team: {teamInfo.team_name}</h2>
                        <h2 className="text-lg text-gray-700 text-center">Birthday: {formatDate(playerInfo.player_birthday)}</h2>
                        <h2 className="text-lg text-gray-700 text-center">Nationality: {playerInfo.player_nationality}</h2>
                        <h2 className="text-lg text-gray-700 text-center">Role: {playerInfo.player_role} {videoGameEmoji(videogame.videogame_name)}</h2>
                    </div>
                </div>

                <div className="flex flex-col w-full md:w-1/3">
                    <h1 className="text-2xl font-bold mb-4 text-red-600">Team Information</h1>
                    <div className="space-y-4">
                        <img src={teamInfo.team_logo} alt="Team" className="w-48 h-48 rounded-lg object-cover mx-auto" />
                        <h2 className="text-xl font-semibold text-center">{teamInfo.team_name}</h2>
                        <h2 className="text-lg text-gray-700 text-center">Country: {teamInfo.team_acronym}</h2>
                        <h2 className="text-lg text-gray-700 text-center">Location: {teamInfo.team_location}</h2>
                        <h2 className="text-lg text-gray-700 text-center">Game: {videogame.videogame_name}</h2>
                    </div>
                </div>

                <div className="flex flex-col w-full md:w-1/3">
                    <h1 className="text-2xl font-bold mb-4 text-green-600">Team Members</h1>
                    <div className="space-y-4">
                        {teammates.map((teammate, index) => (
                            <div key={teammate.teammate_id || index} className="flex flex-row items-center space-x-4">
                                <img src={teammate.teammate_image} alt={teammate.teammate_nickname} className="w-24 h-24 rounded-lg object-cover" />
                                <div>
                                    <h2 className="text-lg font-semibold">{teammate.teammate_first_name} {teammate.teammate_last_name}</h2>
                                    <p className="text-gray-700">Nickname: "{teammate.teammate_nickname}"</p>
                                    <p className="text-gray-700">Role: {teammate.teammate_role} {videoGameEmoji(videogame.videogame_name)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Player;