import GoogleMapReact from 'google-map-react';
import { GOOGLE_API_KEY } from 'constants/apiKeys';
import LocationPin from './LocationPin';

const Map = ({ location }) => {
  return (
    <div style={{ height: '380px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
        // defaultCenter={location}
        center={location}
        defaultZoom={16}
        yesIWantToUseGoogleMapApiInternals={true}
        mapId="380914b3c73487de"
      >
        <LocationPin lat={location.lat} lng={location.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
