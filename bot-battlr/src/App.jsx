import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import BotArmy from "./components/BotArmy";

function App() {
  // State to store all bots from the backend
  const [bots, setBots] = useState([]);
  // State to store bots that are added to the user's army
  const [army, setArmy] = useState([]);

  // Fetch all bots from the backend when the app first loads
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((err) => console.error("Error fetching bots:", err));
  }, []);

  // Add bot to army (only if it's not already there)
  function handleAddToArmy(bot) {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  // Remove bot from army (but not from the server)
  function handleRelease(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
  }

  // Permanently delete bot from both server and local state
  function handleDelete(bot) {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then(() => {
        // Remove bot from both the bot list and the army
        setBots(bots.filter((b) => b.id !== bot.id));
        setArmy(army.filter((b) => b.id !== bot.id));
      })
      .catch((err) => console.error("Delete failed:", err));
  }

  // Render the page layout
  return (
    <div className="App">
      <h1> Bot Battlr</h1>
      {/* Display the user's current army */}
      <BotArmy bots={army} onRelease={handleRelease} onDelete={handleDelete} />
      {/* Display all available bots */}
      <BotCollection bots={bots} onAdd={handleAddToArmy} onDelete={handleDelete} />
    </div>
  );
}

export default App;
