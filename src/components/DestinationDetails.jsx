function DestinationDetails({ destination }) {
  if (!destination) {
    return (
      <aside className="destination-details destination-details-empty" aria-live="polite">
        <p>Select a destination to see its details.</p>
      </aside>
    );
  }

  return (
    <aside className="destination-details" aria-live="polite">
      <img
        className="destination-details-image"
        src={destination.image}
        alt={`${destination.name}, ${destination.country}`}
      />
      <div className="destination-details-content">
        <p className="eyebrow">{destination.region}</p>
        <h2>{destination.name}, {destination.country}</h2>
        <p className="destination-description">{destination.description}</p>
        <dl className="destination-facts">
          <div>
            <dt>Vibe</dt>
            <dd>{destination.vibe}</dd>
          </div>
          <div>
            <dt>Region</dt>
            <dd>{destination.region}</dd>
          </div>
          <div>
            <dt>Population</dt>
            <dd>{destination.population}</dd>
          </div>
        </dl>
        <h3>Activities</h3>
        <ul className="activity-list">
          {destination.activities.map((activity) => (
            <li key={activity}>{activity}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default DestinationDetails;
