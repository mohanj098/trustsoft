import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/UserSlice';
import One from './One';
import Two from './Two';


function App() {
  const user= useSelector(selectUser);

  return (
    <div>
      {user  ? <Two/> : <One/>}
    </div>
    
    
  )
}

export default App;
