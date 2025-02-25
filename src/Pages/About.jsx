import LinkButton from "../Components/LinkButton"
import '/src/CSS/About.css'
import NavigationBar from "../Components/NavigationBar"

export default function About() {
    return (
        <>
            <NavigationBar/>
            <div className="MainContainer_About">
                <div className="About_FirstSection">
                    <h1>Reliable. Skilled. Affordable.</h1>
                    <p>Hi, I’m Jhonny, a skilled handyman with 20 years of experience providing 
                        high-quality home repairs and renovations. I take pride in my work, always 
                        arriving on time and ensuring every job is done right the first time. From 
                        small fixes to major remodels, I bring the same level of care and attention 
                        to detail to every project. My goal is to provide top-notch service at a fair 
                        and affordable price, so you can feel confident that your home is in good hands.
                    </p>
                </div>

                <div className="About_SecondSection">
                    <h1>Service Area</h1>
                    <div className="About_MapContainer">
                        <p className="About_ServiceAreaParagraph">
                            I serve homeowners in the D.C., Maryland, and Northern Virginia area. If you are unsure whether you are in my
                            service area, please don't hesitate to give me a call!
                        </p>
                        <div className="About_Map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d795400.6596800266!2d-78.01766782554598!3d38.85458268821998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7889fd84681%3A0xbfd3b04ba7ff0407!2sWashington%20Metropolitan%20Area!5e0!3m2!1sen!2sus!4v1740439130984!5m2!1sen!2sus" 
                                width="467" height="350" style={{border:0}} allowFullScreen="" 
                                loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>

                <div className="About_ThirdSection">
                    <div className="About_AcceptedPayments">
                        <h1>Payments Accepted</h1>
                        <ul>
                            <li>Cash</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h1>Ideas to add</h1>
                    <ul>
                        <li>FAQ section like junk removal</li>
                        <li>set up page as a 2-column page with one side being 
                            text while the other is his portrait photo.
                        </li>
                        
                    </ul>
                </div>
            </div>
        </>
    )
}