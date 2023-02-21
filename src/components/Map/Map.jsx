const Map = ({ location }) => {
  return (
    <>
      <iframe
        title="map"
        width="100%"
        height="380px"
        style={{ border: '4px solid #6c757d' }}
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${location}`}
        allowFullScreen
      ></iframe>
    </>
  );
};

export default Map;
