import sprite from '../../icons/sprite.svg';

const LocationPin = () => (
  <div>
    <svg width="40px" height="46px">
      <use href={sprite + '#icon-map-location'} />
    </svg>
  </div>
);
export default LocationPin;
