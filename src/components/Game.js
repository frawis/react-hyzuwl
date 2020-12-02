import React from "react";

export const Game = ({ game }) => {
  if (!game) return <h1>Loading...</h1>;

  return (
    <>
      <div className="">
        <div className="">
          {game.Team1.TeamName} - {game.Team2.TeamName}
        </div>
      </div>
    </>
  );
};

export default Game;
