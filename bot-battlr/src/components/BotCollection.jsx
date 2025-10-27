import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onAdd, onDelete }) {
  return (
    <div className="bot-collection">
      <h2>All Bots</h2>
      <div className="bot-grid">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onClick={() => onAdd(bot)}
            onDelete={() => onDelete(bot)}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
