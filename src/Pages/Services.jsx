import '/src/CSS/Services.css'
import ServiceCard from '../Components/ServiceCard'
import NavigationBar from '../Components/NavigationBar'

export default function Services() {
    return (
        <>
            <title>Services Offered</title>
            <div className='Services_navbar'>
                <NavigationBar />
            </div>
            <div className='ServiceMainContainer'>
                <h1>Services Offered</h1>

                <div className='ListContainer_Service'>
                    <ServiceCard ServiceName='Drywall Installation' ImageName='drywall installation.jpg'/>
                    <ServiceCard ServiceName='Tile flooring' ImageName='tile flooring.jpg'/>
                    <ServiceCard ServiceName='Deck Building' ImageName='deck building.jpg'/>
                    <ServiceCard ServiceName='Deck Repair' ImageName='deck repair.jpg'/>
                    <ServiceCard ServiceName='Plumbing' ImageName='plumbing.jpg'/>
                    <ServiceCard ServiceName='Basic Electrical Work' ImageName='basic electrical work.jpg'/>
                    <ServiceCard ServiceName='Drywall Repair' ImageName='drywall repair.jpg'/>
                    <ServiceCard ServiceName='Painting' ImageName='painting.jpg'/>
                    <ServiceCard ServiceName='Bathroom Repairs' ImageName='bathroom repair.jpg'/>
                    <ServiceCard ServiceName='Remodeling' ImageName='remodeling.jpg'/>
                    <ServiceCard ServiceName='Hardwood Flooring Installation' ImageName='hardwood flooring install.jpg'/>
                    <ServiceCard ServiceName='General Repairs' ImageName='general repairs.jpg'/>
                    <ServiceCard ServiceName='Fence Building' ImageName='Fence Building.jpg'/>
                    <ServiceCard ServiceName='Water Heater Replacement' ImageName='water heater flickr.jpg'/>
                    <ServiceCard ServiceName='Light Fixture installation' ImageName='light fixture install.jpg'/>
                    <ServiceCard ServiceName='More...' ImageName='phoneIcon.svg'/>
                </div>
            </div>
        </>
    )
}