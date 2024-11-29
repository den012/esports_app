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

    const matches = [
        {
            match_id: 1,
            match_start_time: '2024-11-29T10:00:00Z',
            tournament_name: 'Championship Finals',
            match_status: 'Completed',
            team_1_name: 'Team Alpha',
            team_2_name: 'Team Beta',
            winner_team_name: 'Team Alpha',
            prize: '€50,000',
        },
        // Additional matches...
    ];


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
                        <img src={playerInfo.player_image} className="w-full h-auto" alt="Player" />
                        
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
                    <div className="shadow-md overflow-x-auto w-full sm:w-auto">
                        <div className="min-w-[600px]">
                            {/* Header */}
                            <div className="flex flex-row bg-gray-200 text-sm font-semibold">
                                <p className="w-36 p-2 text-center">Date</p>
                                <p className="w-32 p-2 text-center">Tournament</p>
                                <p className="w-24 p-2 text-center">Status</p>
                                <p className="w-32 p-2 text-center">Team</p>
                                <p className="w-24 p-2 text-center">Result</p>
                                <p className="w-24 p-2 text-center">Prize</p>
                            </div>
    
                            {/* Matches Rows */}
                            <div className="divide-y divide-gray-300">
                                {matches.map((match) => (
                                    <div key={match.match_id} className="flex flex-row bg-white even:bg-gray-100 text-sm font-medium">
                                        <p className="w-36 p-2 text-center">{formatDate(match.match_start_time)}</p>
                                        <p className="w-32 p-2 text-center break-words whitespace-normal">{match.tournament_name}</p>
                                        <p className="w-24 p-2 text-center">{match.match_status}</p>
                                        <p className="w-32 p-2 text-center break-words whitespace-normal">
                                            {match.team_1_name} vs {match.team_2_name}
                                        </p>
                                        <p className="w-24 p-2 text-center">{match.winner_team_name || 'TBD'}</p>
                                        <p className="w-24 p-2 text-center">{match.prize || 'N/A'}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Player;