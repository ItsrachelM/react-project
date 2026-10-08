import { useState } from 'react';
import DestinationList from './components/DestinationList';
import DestinationDetails from './components/DestinationDetails';
import './App.css';

function App() {
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="eyebrow">Find your next adventure</p>
        <h1>City inspiration</h1>
        <p className="intro">Explore places to go and get a feel for each city.</p>
      </header>
      <section aria-labelledby="destinations-heading">
        <h2 className="section-heading" id="destinations-heading">Explore destinations</h2>
        <div className="destination-layout">
          <DestinationList
            selectedId={selectedDestination?.id}
            onSelect={setSelectedDestination}
          />
          <DestinationDetails destination={selectedDestination} />
        </div>
      </section>
    </main>
  );
}

export default App;
