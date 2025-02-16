import LinkButton from "../Components/LinkButton"
import '/src/CSS/About.css'

export default function About() {
    return (
        <>
            <div className="MainContainer_About">
                <div>
                    <h1>Reliable. Skilled. Affordable</h1>
                    <p>Hi, I’m Jhonny, a skilled handyman with 20 years of experience providing 
                        high-quality home repairs and renovations. I take pride in my work, always 
                        arriving on time and ensuring every job is done right the first time. From 
                        small fixes to major remodels, I bring the same level of care and attention 
                        to detail to every project. My goal is to provide top-notch service at a fair 
                        and affordable price, so you can feel confident that your home is in good hands.
                    </p>
                </div>

                <div>
                    <h1>Service Area</h1>
                    <p>I serve homeowners in the D.C., Maryland, and Northern Virginia area. If you are unsure whether you are in my
                        service area, please don't hesitate to give me a call!.
                    </p>
                </div>

                <div>
                    <h1>Payments Accepted</h1>
                    <ul>
                        <li>Cash</li>
                    </ul>
                </div>
            </div>
        </>
    )
}