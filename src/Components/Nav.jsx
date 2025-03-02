import Hamburger from "./Hamburger";
import { useState } from 'react';
import React from 'react'
import LinkButton from "./LinkButton";


export default function Nav(){

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }

    return(
        <div className="Nav_Toggle">
            <div className="navigation">
                <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen}/>
                </div>
                <div className="ButtonLinks_Nav">
                    <LinkButton Name="/"/>
                    
                    <LinkButton Name="About"/>
                    
                    <LinkButton Name="Services"/>
                    
                    <LinkButton Name="Gallery"/>
                    
                    <LinkButton Name="Contact"/>
                </div>
                    
            </div>
            <div className="ImageContainer"/>

            <style jsx="true">{`
                body {
                    padding: 0;
                    margin: 0;
                }

                .hamburger {
                    display: none;
                }


                @media (max-width: 600px){
                    .navigation {
                        position: absolute;
                        width: 100%;
                        background-color: ${hamburgerOpen ? 'white' : 'transparent'};
                    }
                    .hamburger {
                        display: flex;
                        position: relative;
                    }
                    .ButtonLinks_Nav {
                        display: ${hamburgerOpen ? 'flex' : 'none'};
                        flex-direction: column;
                        row-gap: 0;
                        height: 100%;
                        position: relative;
                    }
                    .ButtonLinks_Nav hr{
                        background-color: black;
                        height: 2px;
                        width: 80%;
                        position: relative;
                    }
                    .ButtonLinks_Nav div{
                        position: relative;
                        border: 1px solid black;
                        width: 80%;
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .Nav_Toggle{
                        width: 100%;
                    }
                }
                
            `}</style>
            
        </div>
    )

}

/*
 import Hamburger from "./Hamburger";
import { useState } from 'react';
import React from 'react'


export default function Nav(){

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }

    return(
        <div>
            <div className="navigation">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                </ul>
                <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen}/>
                </div>
                    
            </div>

            <style jsx="true">{`
                .navigation{
                    width: 100%;
                    height: 50px;
                    background-color: blue;
                }

                .navigation ul {
                    display: ${hamburgerOpen ? 'inline' : 'none'};
                    flex-wrap: wrap;
                    float: right;
                    margin: 0px;
                    padding: 0px;
                }

                .navigation ul li{
                    list-style-type: none;
                    padding-right: 10px;
                }
                @media (max-width: 600px){
                    .navigation ul {
                        display: ${hamburgerOpen ? 'inline' : 'none'};
                        background-color: blue;
                        height: 100vh;
                        width: 50vw;
                        margin-top: 50px;
                        position: absolute;
                    }
                }
                
            `}</style>
            
        </div>
    )

}
 */

/*


.navigation{
    width: 100%;
    height: 50px;
    background-color: blue;
}

.ButtonLinks_Nav {
    display: ${hamburgerOpen ? 'flex' : 'none'};
    flex-direction: column;
    background-color: grey;
    align-items: center;
}
*/