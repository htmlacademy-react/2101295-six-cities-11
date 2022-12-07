import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {City, Offer} from '../../types/offers/offers';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const/const';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../../hooks';
import { getSelectedOfferId } from '../../store/action-process/selector';

type MapProps = {
  offers: Offer[];
  className: string;
  city: City;
  unchangeableOfferId?: number;
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
  const {unchangeableOfferId, className, city, offers} = props;
  const selectedOfferId = useAppSelector(getSelectedOfferId);
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markedOfferId = unchangeableOfferId ?? selectedOfferId;

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
            markedOfferId !== undefined && offer.id === markedOfferId
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
  }, [city.location.latitude, city.location.longitude, city.location.zoom, map, markedOfferId, offers, selectedOfferId]);

  return (
    <section
      className={`${className} map`}
      ref={mapRef}
    />
  );
}


export default Map;
