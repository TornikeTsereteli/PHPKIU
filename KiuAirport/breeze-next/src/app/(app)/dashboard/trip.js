import { useState } from 'react'
import ReactDOM from 'react-dom'
import Details from './portal'

const Trip = ({ route_id, start_location, end_location, price_per_ticket }) => {
    const [isPortalOpen, setIsPortalOpen] = useState(false)

    const portalHandler = () => {
        setIsPortalOpen(!isPortalOpen)
    }
    return (
        <button
            onClick={portalHandler}
            className="mb-4 relative w-64 h-64 bg-white rounded-lg overflow-hidden">
            <img
                src="/Users/nikolozchiradze/project-airport/PHPKIU/KiuAirport/breeze-next/src/components/background-with-plane-blank-space-father-s-day.jpg"
                alt="Button Image"
                className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-orange-500  text-white text-center p-2">
                <p className="text-sm">
                    {start_location + '->' + end_location}{' '}
                </p>
            </div>

            {isPortalOpen &&
                ReactDOM.createPortal(
                    <Details
                        route_id={route_id}
                        start_location={start_location}
                        end_location={end_location}
                        price_per_ticket={price_per_ticket}
                        portalHandler={portalHandler}
                    />,
                    document.body,
                )}
        </button>
    )
}

export default Trip
