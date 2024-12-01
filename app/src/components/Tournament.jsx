import react from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { formatDate, formatTournamentPrize } from '../utils/functions';

const Tournament = () => {
    const { tournamentId } = useParams();
    const decodedTournamentId = atob(tournamentId);

    const [tournamentInfo, setTournamentInfo] = useState(null);

    useEffect(() => {
        fetchTournamentInfo();
    },[]);

    const fetchTournamentInfo = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/tournament/${decodedTournamentId}`);
            const tournamentInfo = response.data;
            setTournamentInfo(tournamentInfo);
            console.log(response.data);
        } catch(error){
            console.error("Error trying to fetch tournament info: ", error);
        }
    }

    if (!tournamentInfo) {
        return <div>Loading...</div>
    }


    return (
        <div className="flex flex-row h-screen justify-center items-center space-x-10">

            <div className="shadow-md w-full sm:w-128">
                        <img src={tournamentInfo.tournament_image} className="w-full h-auto" alt="Player" />
                        
                        {/* Player Info Rows */}
                        {[
                            { label: 'Tournament name', value: tournamentInfo.tournament_name },
                            { label: 'Location', value: tournamentInfo.tournament_location },
                            { label: 'Prize', value: formatTournamentPrize(tournamentInfo.tournament_prize) },
                            { label: 'Start Date', value: formatDate(tournamentInfo.tournament_start) },
                            { label: 'End Date', value: formatDate(tournamentInfo.tournament_end) },
                        ].map((info, index) => (
                            <div
                                key={info.label}
                                className={`flex justify-between items-center px-4 w-full h-9 ${
                                    index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                                }`}>
                                <p><span className="font-semibold">{info.label}:</span></p>
                                <p>{info.value}</p>
                            </div>
                        ))}
            </div>

            <div className="shadow-md overflow-x-auto w-full sm:w-auto">
                <div className="flex flex-col items-center space-y-3">
                    <h1 className="text-2xl font-thin">Matches</h1>
                    <div className="min-w-[600px]">
                        {/* Header */}
                        { tournamentInfo.matches.length === 0 ? (
                                <div className="flex justify-center items-center w-full h-32 bg-gray-200">
                                    <h1 className="text-2xl text-center">Oopps, seems this tournament did not start yet!</h1>
                                </div>
                            ) : (
                            <div className="flex flex-row bg-gray-200 text-sm font-semibold">
                                <p className="w-36 p-2 text-center">Date</p>
                                <p className="w-24 p-2 text-center">Status</p>
                                <p className="w-52 p-2 text-center">Team</p>
                                <p className="w-16 p-2 text-center">Result</p>
                                <p className="w-32 p-2 text-center">Winner</p>
                            </div>
                            )}

                        {/* Matches Rows */}
                        <div className="divide-y divide-gray-300">
                            {tournamentInfo.matches.map( match => (
                                <div key={match.match_id} className="flex flex-row bg-white even:bg-gray-100 text-sm font-medium">
                                    <p className="w-36 p-2 text-center">{formatDate(match.match_start_time)}</p>
                                    <p className="w-24 p-2 text-center">{match.match_status}</p>
                                    <div className="w-52 p-2 text-center break-words whitespace-normal">
                                        <div className="flex flex-row items-center justify-center space-x-6">
                                            {/* Team 1 */}
                                            <div className="flex flex-col items-center">
                                                <img className="w-8 h-8 object-cover" src={match.team_1.team_logo} alt={`${match.team_1.team_name} logo`} />
                                                <span className="text-center">{match.team_1.team_acronym}</span>
                                            </div>
                                            
                                            <span className="text-center font-semibold">vs</span>
                                            
                                            {/* Team 2 */}
                                            <div className="flex flex-col items-center">
                                                <img className="w-8 h-8 object-cover" src={match.team_2.team_logo} alt={`${match.team_2.team_name} logo`} />
                                                <span className="text-center">{match.team_2.team_acronym}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="w-16 p-2 text-center">{match.team_1_wins} : {match.team_2_wins}</p>
                                    <p className="w-32 p-2 text-center text-green-700">{match.winner_team_name || 'TBD'}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Tournament;