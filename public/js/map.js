mapboxgl.accessToken = mapToken;

// Use the listing object defined in the EJS template
const parsedCoordinates = listing.geometry.coordinates; // Access the coordinates directly

const map = new mapboxgl.Map({
    container: 'map', 
    center: parsedCoordinates, // Set the parsed coordinates directly
    zoom: 2 // Set a zoom level (2 may be too far out for a listing view)
});

// Create a new marker with a popup
const marker = new mapboxgl.Marker({ color: "red" })
    .setLngLat(parsedCoordinates) // Set marker using parsed coordinates
    .setPopup(new mapboxgl.Popup({ offset: 25 })
    .setHTML(`<h4>${listing.location}</h4><p>Exact location provided after booking</p>`)) // Correct the extra </h1>
    .addTo(map);
