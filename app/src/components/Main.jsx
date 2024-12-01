import react from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();

    const [players, setPlayers] = useState([]);
    const [currentPlayersPage, setCurrentPlayersPage] = useState(1);
    const [totalPlayersPages, setTotalPlayersPages] = useState(1);

    useEffect(() => {
        fetchPlayers(currentPlayersPage);
    }, [currentPlayersPage]);

    const fetchPlayers = async (page) => {
        try{
            const response = await axios.get(`http://localhost:3001/api/players?page=${page}`);
            setPlayers(response.data.players);
            setTotalPlayersPages(response.data.totalPages);
        }catch(error){
            console.error('Error fetching players', error);
        }
    }

    const handlePlayerClick = async (playerId) => {
        // console.log("Player ID: ", playerId);
        const encodedPlayerId = btoa(playerId.toString());
        navigate(`/player/${encodedPlayerId}`);
    }


    const [teams, setTeams] = useState([]);
    const [currentTeamsPage, setCurrentTeamsPage] = useState(1);
    const [totalTeamsPages, setTotalTeamsPages] = useState(1);

    useEffect(() => {
        fetchTeams(currentTeamsPage);
    },[currentTeamsPage]);

    const fetchTeams = async (page) => {
        try{
            const response = await axios.get(`http://localhost:3001/api/teams?page=${page}`);
            setTeams(response.data.teams);
            setTotalTeamsPages(response.data.totalPages);
        }catch(error){
            console.error('Error fetching teams', error);
        }
    }

    const handleTeamClick = async (teamId) => {
        console.log("Team ID: ", teamId);
        // const encodedTeamId = btoa(teamId.toString());
        // navigate(`/team/${encodedTeamId}`);
    }

    //tournaments state
    const [tournaments, setTournaments] = useState([]);
    const [currentTournamentsPage, setCurrentTournamentsPage] = useState(1);
    const [totalTournamentsPages, setTotalTournamentsPages] = useState(1);

    useEffect(() => {
        fetchTournaments(currentTournamentsPage);
    },[currentTournamentsPage]);

    const fetchTournaments = async (page) => {
        try{
            const response = await axios.get(`http://localhost:3001/api/tournaments?page=${page}`);
            setTournaments(response.data.tournaments);
            setTotalTournamentsPages(response.data.totalPages);
        }catch(error){
            console.error('Error fetching tournaments', error);
        }
    }

    const handleTournamentClick =  (tournamentId) => {
        // console.log(tournamentId);
        const encodedTournamentId = btoa(tournamentId.toString());
        navigate(`/tournament/${encodedTournamentId}`);
    }



    //videogames state
    const [videogames, setVideogames] = useState([]);
    const [currentVideogamesPage, setCurrentVideogamesPage] = useState(1);
    const [totalVideogamesPages, setTotalVideogamesPages] = useState(1);

    useEffect(() => {
        fetchVideogames(currentVideogamesPage);
    },[currentVideogamesPage]);

    const fetchVideogames = async (page) => {
        try{
            const response = await axios.get(`http://localhost:3001/api/videogames?page=${page}`);
            setVideogames(response.data.videogames);
            setTotalVideogamesPages(response.data.totalPages);
        }catch(error){
            console.error('Error fecthing tournaments',error);
        }
    }

    const handleViewMore = () => {
        console.log("View more");
        navigate('/viewMore');
    }


    const [posts, setPosts] = useState([]);
    const fetchNews = async () => {
        try{
            const response = await axios.get('http://localhost:3001/api/news');
            console.log(response.data.news);
            setPosts(response.data.news);
        }
        catch(error){
            console.error('Error fetching news', error);
        }
    }

    useEffect(() => {
        fetchNews();

        const intervalId = setInterval(() => {
            fetchNews();
        }, 100000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="overflow-hidden">
            <div className = "flex flex-col justify-center items-center">
                <h1 className="text-xl md:text-xl font-bold text-gray-700 mt-2">Esports 🎮</h1>
                <p className="text-sm md:text-sm font-semibold text-gray-700 mb-6 text-center">Find information about your favourite games, players and teams</p>
            </div>

            <div className="ml-4 grid grid-cols-1 md:grid-cols-7 gap-4 w-full">
                <div className="col-span-1 md:col-span-5 flex flex-col space-y-4 items-center justify-center">
                    {/* <h2 className="text-xl font-bold text-gray-700">News</h2> */}

                    <div className="w-full flex flex-col items-center">
                        <div key={1} className="mx-auto p-4 rounded-lg spacey-4 mb-4">
                            <div className="flex justify-between items-center mb-5">
                                <h3 className="text-l font-semibold text-gray-700">{posts.news_title}</h3>
                                <p className="text-gray-500 text-sm">{new Date(posts.news_date).toLocaleDateString()}</p>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{posts.news_description}</p>
                            <div className="flex justify-center items-center">
                                <img src={posts.news_image} alt="Post" className="rounded-lg h-128 w-auto object-cover" />
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="col-span-1 md:col-span-2 flex flex-col space-y-4 items-start ml-20">
                    <h2 className="text-xl font-bold text-gray-700">Forum</h2>
                    {/* Add your forum content here */}
                    <div className="">
                        <h3 className="text-xl font-semibold">Players</h3>
                        <div className="text-gray-600">
                            {players.length > 0 ? (
                                    <>
                                        {players.map((player, index) => (
                                            <p key={index} onClick={() => handlePlayerClick(player.player_id)} className="">
                                                {player.player_nationality} {player.player_first_name} {player.player_last_name} "{player.player_nickname}"
                                            </p>
                                        ))}
                                    </>
                                ) : (
                                <p className="">⛔️ No players found</p>
                            )}
                         </div>
                        {totalPlayersPages > 1 && (
                            <p onClick ={() => handleViewMore()}>View more</p>
                        )}
                    </div>
                    
                    <div className="">
                        <h3 className="text-xl font-semibold">Teams</h3>
                        <div className="text-gray-600">
                            {teams.length > 0 ? (
                                <>
                                {teams.map((team, index) => (
                                    <p key={index} onClick={() => handleTeamClick(team.team_id)} className="">
                                        {team.team_name}
                                    </p>
                                ))}
                                </>
                            ) : (
                                <p className="">⛔️ No teams found</p>
                            )}
                        </div>
                        {totalTeamsPages > 1 && (
                            <p onClick = {() => handleViewMore()}>View more</p>
                        )}
                    </div>

                    <div className="">
                        <h3 className="text-xl font-semibold">Tournaments 🏆</h3>
                        <div className="text-gray-600">
                            {tournaments.length > 0 ? (
                                <>
                                {tournaments.map((tournament, index) => (
                                    <p key={index} className="" onClick= {() => handleTournamentClick(tournament.tournament_id)}>
                                        {tournament.tournament_name}
                                    </p>
                                ))}
                                </>
                            ) : (
                                <p className="">⛔️ No tournaments found</p>
                            )}
                        </div>
                        {totalTournamentsPages > 1 && (
                            <p onClick = {() => handleViewMore()}>View more</p>
                        )}
                    </div>

                    <div className="">
                        <h3 className="text-xl font-semibold">Videogames</h3>
                        <div className="text-gray-600">
                            {videogames.length > 0 ? (
                                <>
                                {videogames.map((videogame, index) => (
                                    <p key={index} className="">
                                        {videogame.videogame_name}
                                    </p>
                                ))}
                                </>
                            ) : (
                                <p className="">⛔️ No videogames found</p>
                            )}
                        </div>
                        {totalVideogamesPages > 4 && (
                            <p onClick = {() => handleViewMore()}>View more</p>
                        )}
                        
                    </div>


                </div>
            </div>
        </div>
    );
}
export default Main;