"use client";
import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useAppSelector } from "@/state/redux";
import { useGetPropertiesQuery } from "@/state/api";
import { Property } from "@/types/prismaTypes";

// Fix for default marker icons in Leaflet with Next.js
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const Map = () => {
  const filters = useAppSelector((state) => state.global.filters);
  const {
    data: properties,
    isLoading,
    isError,
  } = useGetPropertiesQuery(filters);
  
  // Properly type the map with L.Map
  const [map, setMap] = useState<L.Map | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  
  // Set default icon for all markers
  useEffect(() => {
    // This prevents issues with Leaflet's default icons in Next.js
    L.Icon.Default.mergeOptions({
      iconUrl: markerIcon.src,
      iconRetinaUrl: markerIcon2x.src,
      shadowUrl: markerShadow.src,
    });
  }, []);

  // Handle resize
  useEffect(() => {
    if (!map) return;
    
    const resizeMap = () => {
      if (map) setTimeout(() => map.invalidateSize(), 700);
    };
    
    resizeMap();
    window.addEventListener("resize", resizeMap);
    
    return () => window.removeEventListener("resize", resizeMap);
  }, [map]);

  if (isLoading) return <>Loading...</>;
  if (isError || !properties) return <div>Failed to fetch properties</div>;

  // Default position if no filters.coordinates
  const defaultPosition = filters.coordinates || [-74.5, 40];
  // For Leaflet, we need to reverse the coordinates since it uses [lat, lng] instead of [lng, lat]
  const center = Array.isArray(defaultPosition) ? 
    [defaultPosition[1], defaultPosition[0]] : 
    [40, -74.5];

  return (
    <div className="h-full w-full rounded-xl">
      <MapContainer
        center={center as [number, number]}
        zoom={9}
        style={{ height: "100%", width: "100%", borderRadius: "0.75rem" }}
        ref={(mapInstance) => {
          mapRef.current = mapInstance;
          setMap(mapInstance);
        }}
        // Lower z-index to ensure it doesn't overlap with filter dropdowns
        zoomControl={false} // Move zoom control to a different position
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomright" />
        {properties.map((property: Property) => (
          <PropertyMarker key={property.id} property={property} />
        ))}
      </MapContainer>
    </div>
  );
};

interface PropertyMarkerProps {
  property: Property;
}

const PropertyMarker: React.FC<PropertyMarkerProps> = ({ property }) => {
  // Make sure coordinates are in the correct format for Leaflet [lat, lng]
  const position: [number, number] = [
    property.location.coordinates.latitude,
    property.location.coordinates.longitude,
  ];

  // Custom icon (optional)
  const customIcon = new L.Icon({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <Marker position={position} icon={customIcon}>
      <Popup>
        <div className="marker-popup">
          <div className="marker-popup-image"></div>
          <div>
            <a href={`/search/${property.id}`} target="_blank" className="marker-popup-title">
              {property.name}
            </a>
            <p className="marker-popup-price">
              ${property.pricePerMonth}
              <span className="marker-popup-price-unit"> / month</span>
            </p>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Map;