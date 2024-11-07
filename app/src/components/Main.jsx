import react from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Main = () => {
    const [players, setPlayers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchPlayers(currentPage);
    }, [currentPage]);

    const fetchPlayers = async (page) => {
        try{
            const response = await axios.get('http://localhost:3001/api/players')
                setPlayers(response.data.players);
                setTotalPages(response.data.totalPages);
            }catch(error){
                console.error('Error fetching players', error);
            }
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-5xl font-bold text-gray-700 mb-3">Esports 🎮</h1>
                <p className="text-xl font-semibold text-gray-700 mb-6">Find information about your favourite games, players and teams</p>

                <div className="flex flex-row space-x-4">
                    <div id="players" className="flex flex-col justify-start items-center h-84 w-84 bg-gray-200 shadow-md rounded-lg">
                        <h1 className="mt-2 text-2xl font-bold text-gray-700">Players👨‍🚀</h1>
                        <div className="flex flex-col space-y-2 mt-4">
                            {players.map((player, index) => (
                                <p key={index}
                                    className="text-xl font-semibold text-gray-600">
                                    {player.player_first_name} {player.player_last_name}</p>
                            ))}
                        </div>
                    </div>
                    <div id="teams" className="flex justify-center h-84 w-84 bg-gray-200 shadow-md rounded-lg">
                        <h1 className="mt-2 text-2xl font-bold text-gray-700">Teams💪</h1>
                    </div>
                    <div id="tournaments" className="flex justify-center h-84 w-84 bg-gray-200 shadow-md rounded-lg">
                        <h1 className="mt-2 text-2xl font-bold text-gray-700">Tournaments🏆  </h1>
                    </div>
                    <div id="videogames" className="flex justify-center h-84 w-84 bg-gray-200 shadow-md rounded-lg">
                        <h1 className="mt-2 text-2xl font-bold text-gray-700">Videogames🎯</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main;