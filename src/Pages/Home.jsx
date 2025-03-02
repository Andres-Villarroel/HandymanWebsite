
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
}
/*
import "/src/CSS/Home.css";
import UpperBody from '../Components/UpperBody';
import MiddleBody from '../Components/MiddleBody';
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive';
import DesktopHome from "../Components/DesktopHome";
import MobileHome from "../Components/MobileHome";


export default function Home(){
    const isMobile = useMediaQuery({query: 'max-width:600px'});
    //use conditional statements to render upperbody for mobile devices
    if (isMobile) {
        {console.log('isMobile: TRUE');}
        return (
            <>
                <MobileHome/>
            </>
        )
    } 
    {console.log('isMobile: FALSE');}
    return (
        <>
            <DesktopHome />
        </>
    )
} 
*/