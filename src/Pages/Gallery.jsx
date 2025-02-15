import '/src/CSS/Gallery.css'
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css'

const images = [
    {
        original: "/src/assets/images/galleryImage1.jpeg"
    },
    {
        original: "/src/assets/images/galleryImage2.jpeg"
    },
    {
        original: "/src/assets/images/galleryImage3.jpeg"
    }
];

export default function Gallery() {
    return (
        <div className='GalleryMainContainer'>
            <h1>Gallery</h1>
            <div className='ImageGalleryContainer'>
                <ImageGallery items={images} onErrorImageURL='/src/assets/images/NoImage.png'/>
            </div>
        </div>
    )
}