"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Compass, MapPin } from "lucide-react";
import { useGetPropertyQuery } from "@/state/api";
import "leaflet/dist/leaflet.css";

// ปรับ Marker icon ให้ถูกต้อง (Leaflet มีปัญหา default icon ใน Next.js)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const PropertyLocation = ({ propertyId }: { propertyId: number }) => {
  const {
    data: property,
    isLoading,
    isError,
  } = useGetPropertyQuery(propertyId);

  if (isLoading) return <>Loading...</>;
  if (isError || !property) return <>Property not Found</>;

  const { latitude, longitude } = property.location.coordinates;

  return (
    <div className="py-16">
      <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-100">
        Map and Location
      </h3>
      <div className="flex justify-between items-center text-sm text-primary-500 mt-2">
        <div className="flex items-center text-gray-500">
          <MapPin className="w-4 h-4 mr-1 text-gray-700" />
          Property Address:
          <span className="ml-2 font-semibold text-gray-700">
            {property.location?.address || "Address not available"}
          </span>
        </div>
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(
            property.location?.address || ""
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-between items-center hover:underline gap-2 text-primary-600"
        >
          <Compass className="w-5 h-5" />
          Get Directions
        </a>
      </div>

      <div className="relative mt-4 h-[300px] rounded-lg overflow-hidden">
        <MapContainer
          center={[latitude, longitude]}
          zoom={14}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latitude, longitude]}>
            <Popup>
              {property.name}<br />
              {property.location?.address}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default PropertyLocation;
