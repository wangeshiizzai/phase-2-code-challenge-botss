import React from "react";

function BotCard({ bot, onClick, onDelete }) {
  const { name, health, damage, armor, bot_class, avatar_url } = bot;

  return (
    <div className="bot-card" onClick={onClick}>
      <img src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <p>Class: {bot_class}</p>
      <p> Health: {health}</p>
      <p> Damage: {damage}</p>
      <p> Armor: {armor}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(bot);
        }}
      >
         Delete
      </button>
    </div>
  );
}

export default BotCard;
