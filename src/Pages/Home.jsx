
import "/src/CSS/Home.css";
import UpperBody from '../Components/UpperBody';
import MiddleBody from '../Components/MiddleBody';
import Nav from "../Components/Nav";
import NewUpperBody from "../Components/NewUpperBody";

export default function Home(){
    return (
        <>
            <title>JVRemodeling</title>
            <NewUpperBody />
            <MiddleBody />
        </>
    )
    // <UpperBody />
    //TODO: Upperbody responsiveness redesign complete. Finish the rest of the home page
}