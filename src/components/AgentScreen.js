import React, { useState } from 'react';
import Conversations from './Conversations';
import '../styles/AgentScreen.css';

function AgentScreen({ picture, name }) {
  const [showInbox, setShowInbox] = useState(false);

  if (showInbox) {
    return (
      <Conversations name={name} picture={picture} inboxActive={showInbox} />
    );
  }
  return (
    <div className='sidebar'>
      <button onClick={() => setShowInbox(true)}>Conversations</button>
      <button>People</button>
      <button>Stocks</button>
      <img src={picture} alt='profile pic' />
    </div>
  );
}

export default AgentScreen;
