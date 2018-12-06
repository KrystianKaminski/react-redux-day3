import React from 'react';

import Auth from './Auth'
import UserData from './UserData';

const App = (props) => (
    <div>
      <Auth>
        <UserData/>
      </Auth>
    </div>
)

export default App;
