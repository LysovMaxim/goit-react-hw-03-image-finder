export const ImageGalleryItem = ({ picture, onClick}) => {
  return (
    <li className="gallery-item">
      <img  onClick={onClick} src={picture} alt={picture.tags} />
    </li>
    
  );
  
};
