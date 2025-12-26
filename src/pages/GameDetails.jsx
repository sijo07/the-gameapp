import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GlobalApi from "../services/GlobalApi";
import { HiChevronLeft } from "react-icons/hi2";

function GameDetails() {
    const { id } = useParams();
    const [gameDetails, setGameDetails] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        getGameDetailsById();
    }, []);

    const getGameDetailsById = () => {
        GlobalApi.getGameById(id).then((resp) => {
            setGameDetails(resp.data);
        });
    };

    return (
        <div className="mt-5 p-5 relative">
            <div className="absolute top-0 left-0 flex items-center gap-2 cursor-pointer hover:scale-110 transition-all bg-transparent border-2 border-slate-500 p-1 rounded-full px-3 hover:bg-gray-200 dark:hover:bg-slate-700" onClick={() => navigate(-1)}>
                <HiChevronLeft className="text-xl text-black dark:text-white" />
                <h2 className="text-[16px] font-bold text-black dark:text-white">Back</h2>
            </div>
            {gameDetails ? (
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                        <div>
                            <h2 className="text-3xl font-bold text-black dark:text-white mb-3">
                                {gameDetails.name}
                            </h2>
                            <img
                                src={gameDetails.background_image}
                                className="w-full rounded-xl mt-5 object-cover h-[300px] md:h-[400px] shadow-lg sticky top-5"
                            />
                        </div>
                        <div className="mt-14">
                            <div className="grid grid-cols-2 gap-5">
                                <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow-md cursor-pointer hover:scale-105 transition-all">
                                    <h3 className="font-bold text-gray-500 text-sm mb-1">Rating</h3>
                                    <h2 className="text-black dark:text-white font-extrabold text-3xl">{gameDetails.rating || "NA"}</h2>
                                </div>
                                <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow-md cursor-pointer hover:scale-105 transition-all">
                                    <h3 className="font-bold text-gray-500 text-sm mb-1">Metascore</h3>
                                    <h2 className="text-black dark:text-white font-extrabold text-3xl">{gameDetails.metacritic || "NA"}</h2>
                                </div>
                                <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow-md cursor-pointer hover:scale-105 transition-all">
                                    <h3 className="font-bold text-gray-500 text-sm mb-1">Released</h3>
                                    <h2 className="text-black dark:text-white font-bold text-lg">{gameDetails.released}</h2>
                                </div>
                                <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow-md cursor-pointer hover:scale-105 transition-all">
                                    <h3 className="font-bold text-gray-500 text-sm mb-1">Playtime</h3>
                                    <h2 className="text-black dark:text-white font-bold text-lg">{gameDetails.playtime} Hours</h2>
                                </div>
                                <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow-md cursor-pointer hover:scale-105 transition-all col-span-2">
                                    <h3 className="font-bold text-gray-500 text-sm mb-1">Genres</h3>
                                    <h2 className="text-black dark:text-white font-bold text-lg">
                                        {gameDetails.genres.map((item, index) => index < 3 && (
                                            <span key={item.id} className="mr-2">{item.name}{index < gameDetails.genres.length - 1 && ','}</span>
                                        ))}
                                    </h2>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="mt-10">
                        <h3 className="text-2xl font-bold text-black dark:text-white mb-3">About</h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-8 text-[17px]" dangerouslySetInnerHTML={{ __html: gameDetails.description }}>
                        </p>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center mt-20">
                    <h2 className="text-black dark:text-white text-xl">Loading...</h2>
                </div>
            )}
        </div>
    );
}

export default GameDetails;
