import react from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { formatDate, formatTournamentPrize } from '../utils/Functions';

const Player = () => {
    const { playerId } = useParams();
    const decodedPlayerId = atob(playerId);
    // console.log(decodedPlayerId);

    const [playerInfo, setPlayerInfo] = useState(null);
    const [teamInfo, setTeamInfo] = useState(null);
    const [teammates, setTeammates] = useState([])
    const [videogame, setVideogame] = useState(null);
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        fetchPlayerInfo();
    },[]);

    const fetchPlayerInfo = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/player/${decodedPlayerId}`);
            // console.log(response.data);
            const { teamInfo, playerInfo, teammates, videogame, matches} = response.data;
            setTeamInfo(teamInfo);
            setPlayerInfo(playerInfo);
            setTeammates(teammates || []);
            setVideogame(videogame);
            setMatches(matches || []);


        }catch(error){
            console.error("Error trying to fetch player info: ", error);
        }
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
        return(
            <div className="h-screen flex justify-center items-center">
                <div className="text-3xl font-semibold">
                <span className="text-blue-900">L</span>
                <span className="text-blue-800">o</span>
                <span className="text-blue-700">a</span>
                <span className="text-blue-600">d</span>
                <span className="text-blue-500">i</span>
                <span className="text-blue-400">n</span>
                <span className="text-blue-300">g</span>
                <span className="text-gray-700"> information...</span>
                </div>
            </div>
        );
    }

    const placeholderImg = 'https://www.shutterstock.com/image-vector/no-image-available-icon-flat-260nw-1240855999.jpg';


    return (
        <div className="h-screen flex flex-col items-center justify-center px-4 sm:px-0">
            <div className="h-full flex flex-col items-center justify-center w-full">
                {/* Wrapper: Switch to column on small screens, row on medium and up */}
                <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-6 sm:space-y-0 justify-center items-center w-full">
                    
                    {/* Player Info Card */}
                    <div className="shadow-md w-full sm:w-80">
                        <div className="flex justify-center items-center bg-gray-300 bg-opacity-70 h-11 space-x-4">
                            <img src={teamInfo.team_logo} className="w-12 h-auto" alt="Team Logo" />
                            <h1 className="font-bold text-lg">{playerInfo.player_nickname}</h1>
                        </div>
                        <img src={playerInfo.player_image || placeholderImg} className="w-full h-auto" alt="Player" />
                        
                        {/* Player Info Rows */}
                        {[
                            { label: 'Name', value: `${playerInfo.player_first_name} ${playerInfo.player_last_name}` },
                            { label: 'Nationality', value: playerInfo.player_nationality },
                            { label: 'Born', value: formatDate(playerInfo.player_birthday) },
                            { label: 'Role', value: playerInfo.player_role },
                            { label: 'Team', value: teamInfo.team_name },
                            { label: 'Game', value: videogame.videogame_name },
                        ].map((info, index) => (
                            <div
                                key={info.label}
                                className={`flex justify-between items-center px-4 w-full h-9 ${
                                    index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                                }`}
                            >
                                <p><span className="font-semibold">{info.label}:</span></p>
                                <p>{info.value}</p>
                            </div>
                        ))}
                    </div>
    
                    {/* Matches Table */}
                    <div className="flex flex-col items-center space-y-3">
                        <h1 className="text-2xl font-thin">Matches</h1>
                        <div className="shadow-md overflow-x-auto w-full sm:w-auto">
                            <div className="min-w-[600px]">
                                {/* Header */}
                                { matches.length === 0 ? (
                                        <div className="flex justify-center items-center w-full h-32 bg-gray-200">
                                            <h1 className="text-2xl text-center">This player does not played in any games yet!</h1>
                                        </div>
                                    ) : (
                                    <div className="flex flex-row bg-gray-200 text-sm font-semibold">
                                        <p className="w-36 p-2 text-center">Date</p>
                                        <p className="w-48 p-2 text-center">Tournament</p>
                                        <p className="w-24 p-2 text-center">Status</p>
                                        <p className="w-36 p-2 text-center">Team</p>
                                        <p className="w-24 p-2 text-center">Result</p>
                                        <p className="w-28 p-2 text-center">Prize</p>
                                    </div>
                                    )}
        
                                {/* Matches Rows */}
                                <div className="divide-y divide-gray-300">
                                    {matches.map((match) => (
                                        <div key={match.match_id} className="flex flex-row bg-white even:bg-gray-100 text-sm font-medium">
                                            <p className="w-36 p-2 text-center">{formatDate(match.match_start_time)}</p>
                                            <p className="w-48 p-2 text-center break-words whitespace-normal">{match.tournament_name}</p>
                                            <p className="w-24 p-2 text-center">{match.match_status}</p>
                                            <p className="w-36 p-2 text-center break-words whitespace-normal">
                                                {match.team_1_name} vs {match.team_2_name}
                                            </p>
                                            <p className="w-24 p-2 text-center text-green-700">{match.winner_team_name || 'TBD'}</p>
                                            <p className="w-28 p-2 text-center">{formatTournamentPrize(match.tournament_prize)}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Player;