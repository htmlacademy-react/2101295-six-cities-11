import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {City, Offer} from '../../types/offers/offers';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const/const';
import 'leaflet/dist/leaflet.css';
//import { useAppSelector } from '../../hooks';

type MapProps = {
  offers: Offer[];
  className: string;
  city: City;
  selectedPoint: number| null;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

function Map(props: MapProps): JSX.Element {
  const {selectedPoint, className, city, offers} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const markers: Marker[] = [];
    if (map) {
      map.setView({
        lat: city.location.latitude,
        lng: city.location.longitude
      }, city.location.zoom);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });
        markers.push(marker);
        marker
          .setIcon(
            selectedPoint !== undefined && offer.id === selectedPoint
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
      return () => {
        if (map) {
          markers.forEach((marker) => map.removeLayer(marker));
        }
      };
    }
  }, [map, offers, selectedPoint]);

  return (
    <section
      className={`${className} map`}
      ref={mapRef}
    />
  );
}


export default Map;
