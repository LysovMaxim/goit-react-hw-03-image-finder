export const ImageGalleryItem = ({ id, picture }) => {
  return (
    <li className="gallery-item">
      <img src={picture} alt="" />
    </li>
  );
};
