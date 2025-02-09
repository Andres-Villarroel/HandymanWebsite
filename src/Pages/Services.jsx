import '/src/CSS/Services.css'
import ServiceCard from '../Components/ServiceCard'

export default function Services() {
    return (
        <>
            <h1>This is Services</h1>

            <div className='ServiceMainContainer'>
                <ServiceCard ServiceName='Drywall Installation'/>
                <ServiceCard ServiceName='Tile flooring'/>
                <ServiceCard ServiceName='Deck Building'/>
                <ServiceCard ServiceName='Deck Repair'/>
                <ServiceCard ServiceName='Plumbing'/>
                <ServiceCard ServiceName='Basic Electrical Work'/>
                <ServiceCard ServiceName='Drywall Repair'/>
                <ServiceCard ServiceName='Drywall Replacement'/>
                <ServiceCard ServiceName='Painting'/>
                <ServiceCard ServiceName='Bathroom Repairs'/>
                <ServiceCard ServiceName='Remodeling'/>
                <ServiceCard ServiceName='Hardwood Flooring Installation'/>
                <ServiceCard ServiceName='General Repairs'/>
                <ServiceCard ServiceName='Fence Building'/>
                <ServiceCard ServiceName='Water Heater Replacement'/>
                <ServiceCard ServiceName='Light Fixture installation'/>
            </div>
        </>
    )
}