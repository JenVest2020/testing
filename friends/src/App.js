import React from 'react';
import './index.css';
import { friends } from '../src/components/friends';

class App extends React.Component {
  constructor() {
    console.log('Constructor Invoked');
    super();
    this.state = {
      friends: friends,
    };

  }
  render() {
    console.log('Render Invoked');
    return (
      <div>
        <h1 className='title'>Welcome to Friends!</h1>
        {this.state.friends.map(friend => (
          <div className='ddwrapper' key={friend.id}><div className='ddheader'>
            <div>
              {friend.first_name}
            </div>
          </div>
            <ul className='ddlist'>
              <li className='ddlistitem'>{friend.friends.firstName}</li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
