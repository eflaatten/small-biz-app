import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix the marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const Map = ({ listings, positions, fetchMapData, filterId }) => {
  useEffect(() => {
    listings.forEach((listing) => {
      if (!positions[listing.address]) {
        fetchMapData(listing.address); 
      }
    });
  }, [listings, positions, fetchMapData]);

  const defaultPosition = [30.2672, -97.7431]; // Austin, TX default

  return (
    <MapContainer
      center={filterId && positions[listings.find(l => l.id === filterId)?.address] || positions[listings[0]?.address] || defaultPosition}
      zoom={13}
      style={{
        height: "500px",
        width: "80%",
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      {/* OSM Tile Layer */}
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Place a Marker for each listing with available coordinates */}
      {listings
        .filter((listing) => !filterId || listing.id === filterId) // Filter by listing ID
        .map((listing) => {
          const position = positions[listing.address];
          return (
          position && (
            <Marker
              key={listing.address}
              position={[position.lat, position.lng]}
            >
              <Popup>
                <div>
                  <h3>{listing.name}</h3>
                  <p>{listing.address}</p>
                  <p>{listing.hours}</p>
                </div>
              </Popup>
            </Marker>
          )
        );
      })}
    </MapContainer>
  );
};

export default Map;
