export const ImageGalleryItem = ({ picture,largeImageURL, onClick}) => {
  return (
    <li className="gallery-item">
      <img  onClick={()=>onClick(largeImageURL)} src={picture} alt={picture.tags} />
    </li>
    
  );
  
};
