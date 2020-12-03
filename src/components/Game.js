import React from "react";

export const Game = ({ game }) => {
  if (!game) return <h1>Loading...</h1>;

  return (
    <>
      <div className="w-full max-w-sm bg-white p-2 mb-2 rounded-md shadow">
        <div className="flex flex-col items-center">
          <div className="">
            {game.Team1.TeamName} - {game.Team2.TeamName}
          </div>
          <div className="flex space-x-1 text-lg font-semibold">
            <span>{game.MatchResults[0].PointsTeam1}</span>
            <span>:</span>
            <span>{game.MatchResults[0].PointsTeam2}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
