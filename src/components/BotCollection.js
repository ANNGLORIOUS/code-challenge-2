import React from 'react';
import BotCard from "./BotCard";

export default function BotCollection({ botCollection, action, removeCard }) {
  const displayBotCards = botCollection.map(bot => {
    return <BotCard key={bot.id} bot={bot} action={action} removeCard={removeCard} />;
  });

  return (
    <div className="ui grid">
      {displayBotCards}
      {botCollection.length === 0 && <p>You have completed your Bot Army. There are no more bots to collect.</p>}
    </div>
  );
}
