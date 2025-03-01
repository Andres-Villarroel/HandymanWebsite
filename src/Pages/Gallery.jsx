import '/src/CSS/Gallery.css'
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css'
import NavigationBar from '../Components/NavigationBar';

const images = [
    {
        original: "/galleryImage1.jpeg"
    },
    {
        original: "/galleryImage2.jpeg"
    },
    {
        original: "/galleryImage3.jpeg"
    }
];

export default function Gallery() {
    return (
        <>
        <title>Gallery</title>
        <NavigationBar/>
        <div className='GalleryMainContainer'>
            <h1>Gallery</h1>
            <div className='ImageGalleryContainer'>
                <ImageGallery items={images} onErrorImageURL='/src/assets/images/NoImage.png'/>
            </div>
        </div>
        </>
    )
}