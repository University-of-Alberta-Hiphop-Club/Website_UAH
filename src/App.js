import React from 'react';
import Calender from './Calender.js';
import PopUp from './PopUp.js';
import Contact from './Contact.js';
import FeatureWall from './FeatureWall.js';
function App() {
  return (
    <div>
        <FeatureWall/>
        <PopUp title={'Bboy'} />
        <PopUp title={'Choreo'} />
        <Calender/>
        <Contact/>
    </div>
  );
}

export default App;
