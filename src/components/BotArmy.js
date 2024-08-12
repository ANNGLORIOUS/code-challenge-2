import React, { Component } from 'react';
import BotCard from "./BotCard";

class BotArmy extends Component {
  // Render the BotArmy component
  render() {
    // Destructure props for bots, action, and removeCard
    const { bots, action, removeCard } = this.props;

    // Render a collection of BotCard components
    const displayBots = bots.map(bot => {
      return <BotCard key={bot.id} bot={bot} action={action} removeCard={removeCard} />;
    });

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {displayBots}
          </div>
        </div>
      </div>
    );
  }
}

export default BotArmy;
