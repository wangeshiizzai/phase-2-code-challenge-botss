import React from "react";

function BotCard({ bot, onClick, onDelete }) {
  // Destructure bot data for easier use
  const { name, health, damage, armor, bot_class, avatar_url } = bot;

  return (
    // Clicking the card will either add or release the bot
    <div className="bot-card" onClick={onClick}>
      {/* Bot image */}
      <img src={avatar_url} alt={name} />
      {/* Bot info */}
      <h3>{name}</h3>
      <p>Class: {bot_class}</p>
      <p> Health: {health}</p>
      <p> Damage: {damage}</p>
      <p> Armor: {armor}</p>

      {/* Delete button — stops click from bubbling to the card */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // prevents triggering the onClick of the card
          onDelete(bot);       // calls delete handler
        }}
      >
         Delete
      </button>
    </div>
  );
}

export default BotCard;
