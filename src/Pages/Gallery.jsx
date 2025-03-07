import '/src/CSS/Gallery.css'
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css'
import NavigationBar from '../Components/NavigationBar';

const images = [
    {
        original: "/galleryImage1.jpg"
    },
    {
        original: "/galleryImage2.jpg"
    },
    {
        original: "/galleryImage3.jpg"
    }
];

export default function Gallery() {
    return (
        <>
        <title>Gallery</title>
        <div className='Gallery_navbar'>
            <NavigationBar/>
        </div>
        <div className='GalleryMainContainer'>
            <h1>Gallery</h1>
            <div className='ImageGalleryContainer'>
                <ImageGallery items={images} onErrorImageURL='/src/assets/images/NoImage.png'/>
            </div>
        </div>
        </>
    )
}