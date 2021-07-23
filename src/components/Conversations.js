import React from 'react';
import '../styles/Conversations.css';

function Conversations({ name, picture, inboxActive, accessToken, userID }) {
  const activeStyle = {
    backgroundColor: 'white',
  };

  fetch(`https://graph.facebook.com/v11.0/105501908494358/feed?
  fields=access_token&
   access_token=EAAFAZCu7XgU8BAFV0qVZBnFIZBFhAASKRoXeTuih5mbk9txD1TlrumpzKDM0P2ZAqqrnr2AUOiZC1oRW7Q9M90ghqHZAaT8hX40MaIfqFzVjISkJxOHM3SwLuSkrQdgHUjzhGmNE2ynadFYBZAU0RzBrOUCK4eM8gNQja6SCS6ykOYiNZCxL74Yjihh2Wr58PWZAfg8ZA9KZA82cfJSgw49A31CVtPI0rSr85cZD`)
    .then((res) => res.json())
    .then((data) => console.log(data.data[0]));

  // fetch('https://graph.facebook.com/105501908494358/feed')
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  // fetch(`https://graph.facebook.com/105501908494358/feed?
  // fields=access_token&
  // access_token=EAAFAZCu7XgU8BAFV0qVZBnFIZBFhAASKRoXeTuih5mbk9txD1TlrumpzKDM0P2ZAqqrnr2AUOiZC1oRW7Q9M90ghqHZAaT8hX40MaIfqFzVjISkJxOHM3SwLuSkrQdgHUjzhGmNE2ynadFYBZAU0RzBrOUCK4eM8gNQja6SCS6ykOYiNZCxL74Yjihh2Wr58PWZAfg8ZA9KZA82cfJSgw49A31CVtPI0rSr85cZD`)
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  return (
    <div className='container'>
      <div className='sidebar'>
        <button style={inboxActive ? activeStyle : {}}>Conversations</button>
        <button>People</button>
        <button>Stocks</button>
        <img src={picture} alt='profile pic' />
      </div>
      <div className='conversation-tab'>
        <h1>Conversations</h1>
      </div>
    </div>
  );
}

export default Conversations;
