type RoomImageProps = {
  photo: string;
  alt: string | undefined;
}

function Photo({photo, alt}: RoomImageProps): JSX.Element {
  return (
    <div className="property__image-wrapper">
      <img
        className="property__image"
        src={photo}
        alt={alt}
      />
    </div>
  );
}

type RoomGelleryProp = {
  photos: string[]| undefined;
  alt: string | undefined;
}
export default function RoomGallery({photos, alt}: RoomGelleryProp): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {photos?.slice(0, 6).map((phot) => <Photo photo={phot} key={phot} alt={alt}/>)}
      </div>
    </div>
  );
}
