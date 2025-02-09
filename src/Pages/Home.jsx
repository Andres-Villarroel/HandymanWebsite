import testImage from '/src/assets/images/testImageHome.jpg';
import "/src/CSS/Home.css";
import UpperBody from '../Components/UpperBody';
import MiddleBody from '../Components/MiddleBody';
import Footer from '../Components/Footer';

export default function Home(){
    //<img src={testImage} alt="TestingImage"/>
    return (
        <>
            <UpperBody />
            <MiddleBody />
        </>
    )
}