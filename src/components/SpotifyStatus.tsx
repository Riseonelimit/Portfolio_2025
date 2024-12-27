import axios from "axios";
import { useEffect, useState } from "react";
import HugeiconsCd from "./svg/HugeiconsCd";
import LogosSpotify from "./svg/LogosSpotify";
import MaterialSymbolsInfoOutline from "./svg/MaterialSymbolsInfoOutline";
import { DISCORD_ID } from "../utils/constants";

type SpotifyData = {
    song: string;
    artist: string;
    album_art_url: string;
};

const SpotifyStatus = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [spotifyData, setSpotifyData] = useState<SpotifyData | null>(null);

    useEffect(() => {
        const getSpotifyData = async () => {
            const { data, status } = await axios.get(
                `https://api.lanyard.rest/v1/users/${DISCORD_ID}`
            );

            if (status === 200 && data.data.listening_to_spotify) {
                setSpotifyData(data.data.spotify);
                setIsPlaying(true);
            } else {
                setSpotifyData(null);
                setIsPlaying(false);
            }
        };
        getSpotifyData();
        const fetchInterval = setInterval(() => {
            getSpotifyData();
        }, 20000);
        return () => {
            clearInterval(fetchInterval);
        };
    }, []);

    return (
        <div
            className={` px-2 py-2 rounded-lg flex relative justify-between items-center border-[1px] gap-2 bg-green-950/40 border-green-400 `}
        >
            {!isPlaying && !spotifyData ? (
                <>
                    <div className=" flex gap-2 items-center jc">
                        <LogosSpotify className=" text-xl" />
                        <div className=" rounded-md text-xs flex items-center justify-center bg-red-950/40 border-[1px] border-red-600 p-1">
                            🔴
                            <p className=" text-xs font-medium">Offline</p>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {/* <div className="flex justify-center items-center gap-2"> */}
                    <div className=" flex flex-col  justify-center items-start gap-2 z-20">
                        <div className=" flex  items-center">
                            <LogosSpotify className=" text-xl" />
                            <div className=" cursor-pointer group">
                                <MaterialSymbolsInfoOutline className=" w-10  " />
                                <p className=" rounded-lg bg-yellow-950/40 border-[1px] group-hover:opacity-100 opacity-0 duration-200 border-yellow-400 p-2 text-xs absolute z-0 -top-10 left-0">
                                    🟡 Polling 20s
                                </p>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-1">
                            <p className=" text-sm font-semibold ">
                                {spotifyData?.song}
                            </p>
                            <p className=" text-xs   ">{spotifyData?.artist}</p>
                        </div>
                    </div>
                    <div className=" relative rounded-lg overflow-hidden z-20 ">
                        <img
                            className=" w-16  object-contain  "
                            src={spotifyData?.album_art_url}
                            alt="Album Art"
                        />
                    </div>

                    <HugeiconsCd className=" w-full h-full z-0 text-green-950 left-0 animate-spin absolute" />
                    {/* <div className=" rounded-lg bg-green-300 absolute w-full h-full z-0"> */}
                </>
            )}
        </div>
    );
};

export default SpotifyStatus;
