import react from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const CustomButton = ({onClick, children }) => {
    return (
        <button onClick={onClick} className="bg-white hover:bg-gray-200 font-semibold py-1 px-2 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
             {children}   
        </button>
    );
};


const Main = () => {
    //reusable function
    const handlePageChange = (currentPage, totalPages, setPage, direction) => {
        if(direction === 'next'){
            setPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : 1));
        }
        else if(direction === 'previous'){
            setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : totalPages));
        }
    };


    //players state
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




    //teams state
    const [teams, setTeams] = useState([]);
    const [currentTeamsPage, setCurrentTeamsPage] = useState(1);
    const [totalTeamsPages, setTotalTeamsPages] = useState(1);

    useEffect(() => {
        fetchTeams();
    },[]);

    const fetchTeams = async () => {
        try{
            const response = await axios.get('http://localhost:3001/api/teams');
            setTeams(response.data.teams);
            setTotalTeamsPages(4);
        }catch(error){
            console.error('Error fetching teams', error);
        }
    }



    //tournaments state
    const [tournaments, setTournaments] = useState([]);
    const [currentTournamentsPage, setCurrentTournamentsPage] = useState(1);
    const [totalTournamentsPages, setTotalTournamentsPages] = useState(1);

    useEffect(() => {
        fetchTournaments();
    },[]);

    const fetchTournaments = async () => {
        try{
            const response = await axios.get('http://localhost:3001/api/tournaments');
            setTournaments(response.data.tournaments);
            setTotalTournamentsPages(4);
        }catch(error){
            console.error('Error fetching tournaments', error);
        }
    }



    //videogames state
    const [videogames, setVideogames] = useState([]);
    const [currentVideogamesPage, setCurrentVideogamesPage] = useState(1);
    const [totalVideogamesPages, setTotalVideogamesPages] = useState(1);

    useEffect(() => {
        fetchVideogames();
    },[]);

    const fetchVideogames = async () => {
        try{
            const response = await axios.get('http://localhost:3001/api/videogames');
            setVideogames(response.data.videogames);
            setTotalVideogamesPages(4);
        }catch(error){
            console.error('Error fecthing tournaments',error);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-700 mb-3">Esports 🎮</h1>
            <p className="text-lg md:text-xl font-semibold text-gray-700 mb-6 text-center">Find information about your favourite games, players and teams</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div id="players" className="flex flex-col justify-start items-center p-6 h-96 w-full bg-gradient-to-r from-blue-300 to-blue-500 shadow-lg rounded-lg">
                    <h1 className="mt-2 text-2xl md:text-3xl font-bold text-white">Players 👨‍🚀</h1>
                    <div className="flex flex-col space-y-4 mt-6">
                        {players.map((player, index) => (
                            <p key={index} className="text-lg md:text-xl font-semibold text-white bg-blue-600 bg-opacity-50 p-2 rounded-lg shadow-md">
                                {player.player_nationality} {player.player_first_name} {player.player_last_name} "{player.player_nickname}"
                            </p>
                        ))}
                        <h1>{currentPlayersPage}</h1>
                        <div className="flex justify-center w-full flex-row space-x-4 mt-6">
                            <CustomButton
                                onClick = {() => handlePageChange(currentPlayersPage, totalPlayersPages, setCurrentPlayersPage, 'previous')}
                            >&lt;</CustomButton>
                            <CustomButton
                                onClick = {() => handlePageChange(currentPlayersPage, totalPlayersPages, setCurrentPlayersPage, 'next')}
                            >&gt;</CustomButton>
                        </div>
                    </div>
                </div>



                <div id="teams" className="flex flex-col justify-start items-center p-6 h-96 w-full bg-gradient-to-r from-orange-300 to-orange-500 shadow-md rounded-lg">
                    <h1 className="mt-2 text-2xl md:text-3xl font-bold text-white">Teams 💪</h1>
                    <div className="flex flex-col space-y-4 mt-6">
                        {teams.map((team, index) => (
                            <p key={index} className="text-lg md:text-xl font-semibold text-white bg-orange-600 bg-opacity-50 p-1 rounded-lg shadow-md">
                                {team.team_name}
                            </p>
                        ))}
                        <h1>{currentTeamsPage}</h1>
                        <div className="flex justify-center w-full flex-row space-x-4 mt-6">
                            <CustomButton
                                onClick = {() => handlePageChange(currentTeamsPage, totalTeamsPages, setCurrentTeamsPage, 'previous')}
                            >&lt;</CustomButton>
                            <CustomButton
                                onClick = {() => handlePageChange(currentTeamsPage, totalTeamsPages, setCurrentTeamsPage, 'next')}
                            >&gt;</CustomButton>
                        </div>
                    </div>
                </div>



                <div id="tournaments" className="flex flex-col justify-start items-center p-6 h-96 w-full bg-gradient-to-r from-green-300 to-green-500 shadow-md rounded-lg">
                    <h1 className="mt-2 text-2xl md:text-3xl font-bold text-white">Tournaments 🏆</h1>
                    <div className="flex flex-col space-y-4 mt-6">
                        {tournaments.map((tournament, index) => (
                            <p key={index} className="text-lg md:text-xl font-semibold text-white bg-green-600 bg-opacity-50 p-2 rounded-lg shadow-md">
                                {tournament.tournament_name}
                            </p>
                        ))}
                        <h1>{currentTournamentsPage}</h1>
                        <div className="flex justify-center w-full flex-row space-x-4 mt-6">
                            <CustomButton
                                onClick = {() => handlePageChange(currentTournamentsPage, totalTournamentsPages, setCurrentTournamentsPage, 'previous')}
                            >&lt;</CustomButton>
                            <CustomButton
                                onClick = {() => handlePageChange(currentTournamentsPage, totalTournamentsPages, setCurrentTournamentsPage, 'next')}
                            >&gt;</CustomButton>
                        </div>
                    </div>
                </div>



                <div id="videogames" className="flex flex-col justify-start items-center p-6 h-96 w-full bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-md rounded-lg">
                    <h1 className="mt-2 text-2xl md:text-3xl font-bold text-white">Videogames 🎮</h1>
                    <div className="flex flex-col space-y-4 mt-6">
                        {videogames.map((videogame, index) => (
                            <p key={index} className="text-lg md:text-xl font-semibold text-white bg-yellow-600 bg-opacity-50 p-2 rounded-lg shadow-md">
                                {videogame.videogame_name}
                            </p>
                        ))}
                        <h1>{currentVideogamesPage}</h1>
                        <div className="flex justify-center w-full flex-row space-x-4 mt-6">
                            <CustomButton
                                onClick = {() => handlePageChange(currentVideogamesPage, totalVideogamesPages, setCurrentVideogamesPage, 'previous')}
                            >&lt;</CustomButton>
                            <CustomButton
                                onClick = {() => handlePageChange(currentVideogamesPage, totalVideogamesPages, setCurrentVideogamesPage, 'next')}
                            >&gt;</CustomButton>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Main;