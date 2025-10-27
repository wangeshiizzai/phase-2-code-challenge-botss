import React from "react";
import BotCard from "./BotCard";

function BotArmy({ bots, onRelease, onDelete }) {
  return (
    <div className="bot-army">
      <h2>Your Bot Army</h2>
      {/* If no bots in army, show a message */}
      {bots.length === 0 ? (
        <p>No bots in your army yet! Add some warriors </p>
      ) : (
        // Otherwise, display all bots in the army
        <div className="bot-grid">
          {bots.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              onClick={() => onRelease(bot)} // clicking releases bot
              onDelete={() => onDelete(bot)} // clicking delete removes it completely
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default BotArmy;
