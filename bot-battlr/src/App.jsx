import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import BotArmy from "./components/BotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  // Fetch all bots
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((err) => console.error("Error fetching bots:", err));
  }, []);

  // Add bot to army
  function handleAddToArmy(bot) {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  // Remove bot from army (but not from server)
  function handleRelease(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
  }

  // Permanently delete bot (from server and state)
  function handleDelete(bot) {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then(() => {
        setBots(bots.filter((b) => b.id !== bot.id));
        setArmy(army.filter((b) => b.id !== bot.id));
      })
      .catch((err) => console.error("Delete failed:", err));
  }

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <BotArmy bots={army} onRelease={handleRelease} onDelete={handleDelete} />
      <BotCollection bots={bots} onAdd={handleAddToArmy} onDelete={handleDelete} />
    </div>
  );
}

export default App;
