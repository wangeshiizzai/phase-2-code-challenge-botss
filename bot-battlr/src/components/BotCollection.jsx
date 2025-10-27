import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onAdd, onDelete }) {
  return (
    <div className="bot-collection">
      <h2>All Bots</h2>
      <div className="bot-grid">
        {/* Map through all bots and show a BotCard for each one */}
        {bots.map((bot) => (
          <BotCard
            key={bot.id}              // unique key for each bot
            bot={bot}                 // bot data passed to the card
            onClick={() => onAdd(bot)} // when clicked, add to army
            onDelete={() => onDelete(bot)} // delete bot permanently
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
