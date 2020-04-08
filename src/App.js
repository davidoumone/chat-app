import React from 'react';
import Contact from './components/Contact';

const katherine= {
  name: "Katherine Hunt",
  avatar: "https://randomuser.me/api/portraits/women/37.jpg",
  online: true
};

const janice = {
  name: "Janice Shaw",
  avatar: "https://randomuser.me/api/portraits/women/24.jpg",
  online: false
};

const fred = {
  name: "Fred Fuller",
  avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  online: true
};


function App() {
  return (
    <div className="App">
      <Contact {...katherine} />
      <Contact {...janice} />
      <Contact {...fred} />
    </div>
  );
}

export default App;