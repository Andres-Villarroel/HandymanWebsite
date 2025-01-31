import testImage from '/src/assets/images/testImageHome.jpg';
import "/src/CSS/Home.css";
import LinkButton from "../Components/LinkButton"

export function Home(){
    //<img src={testImage} alt="TestingImage"/>
    return (
        <>
        
        <div className='Home'>
            <LinkButton/>
        </div>
        </>
    )
}