import { destinations } from '../data/destinations';

function DestinationList({ onSelect, selectedId }) {
  return (
    <ul className="destination-list">
      {destinations.map((destination) => (
        <li className="destination-list-item" key={destination.id}>
          <button
            className={`destination-card${selectedId === destination.id ? ' is-selected' : ''}`}
            type="button"
            onClick={() => onSelect(destination)}
            aria-pressed={selectedId === destination.id}
          >
            <img
              className="destination-card-image"
              src={destination.image}
              alt=""
            />
            <span className="destination-card-copy">
              <span className="destination-card-name">{destination.name}</span>
              <span className="destination-card-country">{destination.country}</span>
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default DestinationList;
