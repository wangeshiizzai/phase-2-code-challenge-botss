import React from "react";
import BotCard from "./BotCard";

function BotArmy({ bots, onRelease, onDelete }) {
  return (
    <div className="bot-army">
      <h2>Your Bot Army</h2>
      {bots.length === 0 ? (
        <p>No bots in your army yet! Add some warriors ⚔️</p>
      ) : (
        <div className="bot-grid">
          {bots.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              onClick={() => onRelease(bot)}
              onDelete={() => onDelete(bot)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default BotArmy;
