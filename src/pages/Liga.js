import React from "react";
import useSWR from "swr";
import fetcher from "../fetcher";
import Game from "../components/Game";

const Liga = () => {
  const { data: dayGames, error, isValidating } = useSWR(
    "https://www.openligadb.de/api/getmatchdata/bl1/2016/33",
    fetcher
  ); // /coins is the cache key
  console.log("*** data: ", dayGames);
  console.log("*** isValidating: ", isValidating);

  return (
    <div>
      <h1>Liga</h1>
      <div className="max-w-screen-xl px-4">Liga</div>
    </div>
  );
};

export default Liga;
