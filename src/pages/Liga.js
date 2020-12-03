import React, { useState } from "react";
import useSWR from "swr";
import fetcher from "../fetcher";
import Game from "../components/Game";

const Liga = () => {
  let [spieltag, setSpieltag] = useState(1);
  const { data: dayGames, error, isValidating } = useSWR(
    `https://www.openligadb.de/api/getmatchdata/bl1/2020/${spieltag}`,
    fetcher
  ); // /coins is the cache key
  console.log("*** data: ", dayGames);
  console.log("*** isValidating: ", isValidating);

  return (
    <div>
      <h1>Liga</h1>

      <div className="flex w-full max-w-sm mb-2">
        <button
          className="px-2 py-1 font-normal text-sm text-white bg-blue-600 w-8 h-8 flex-shrink-0"
          onClick={() => setSpieltag(spieltag - 1)}
        >
          b
        </button>
        <span className="block flex-1 text-center text-sm">
          {spieltag}. Spieltag
        </span>
        <button
          className="px-2 py-1 font-normal text-sm text-white bg-blue-600 w-8 h-8 flex-shrink-0"
          onClick={() => setSpieltag(spieltag + 1)}
        >
          w
        </button>
      </div>
      <div className="max-w-screen-xl px-4">
        {dayGames &&
          dayGames.map((game, index) => <Game key={index} game={game} />)}
      </div>
    </div>
  );
};

export default Liga;
