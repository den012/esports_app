import react from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Player = () => {
    const { playerId } = useParams();
    const decodedPlayerId = atob(playerId);
    // console.log(decodedPlayerId);

    const [playerInfo, setPlayerInfo] = useState({});
    const [teamInfo, setTeamInfo] = useState({});

    useEffect(() => {
        fetchPlayerInfo();
    },[]);

    const fetchPlayerInfo = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/player/${decodedPlayerId}`);
            // console.log(response.data);
            setTeamInfo(response.data[0]);
            setPlayerInfo(response.data[1]);



        }catch(error){
            console.error("Error trying to fetch player info: ", error);
        }
    }


    return (
        <div>
            <h1>Player</h1>
            <h2>{playerInfo.player_first_name}</h2>
            <h2>{playerInfo.player_last_name}</h2>
            <h2>{playerInfo.player_nickname}</h2>
            <h2>{teamInfo.team_name}</h2>
            <h2>{playerInfo.player_birthday}</h2>
            <img src={playerInfo.player_image}></img>
            <h2>{playerInfo.player_nationality}</h2>
            <h2>{playerInfo.player_role}</h2>
        </div>
    )
}

export default Player;