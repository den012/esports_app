import react from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Team = () => {
    const { teamId } = useParams();
    const decodedTeamId = atob(teamId);

    const [teamInfo, setTeamInfo] = useState({});
    const [playerInfo, setPlayerInfo] = useState([]);

    useEffect(() => {
        fetchTeamInfo();
    }, []);

    const fetchTeamInfo = async () => {
        try{
            const response = await axios.get(`http://localhost:3001/api/team/${decodedTeamId}`);
            console.log(response.data);
            setTeamInfo(response.data[0]);
            setPlayerInfo(response.data[1]);
        }catch(error){
            console.error("Error trying to fetch team info: ", error);
        }
    }
    return (
        <div>
            <h1>Team</h1>
            <h1>{teamInfo.team_name}</h1>
            <h1>{teamInfo.team_acronym}</h1>
            <img src={teamInfo.team_image}></img>
            <h1>{teamInfo.team_location}</h1>

            <h1>Team members</h1>
            {playerInfo.map((player,index) => (
                <h1 key={index}>{player.player_nickname}</h1>
            ))}
        </div>
    )
}

export default Team;