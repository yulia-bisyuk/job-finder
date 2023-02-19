const Map = ({ location }) => {
  console.log(location);
  return (
    <iframe
      title="map"
      width="100%"
      height="350"
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${location}&maptype=satellite`}
      allowFullScreen
    ></iframe>
  );
};

export default Map;
