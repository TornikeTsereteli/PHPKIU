import { useState } from 'react'
import ReactDOM from 'react-dom'
import Details from './portal'

const Trip = ({
    route_id,
    start_location,
    end_location,
    price_per_ticket,
    departure_time,
    active,
    deleteRoute,
}) => {
    const [isPortalOpen, setIsPortalOpen] = useState(false)

    const portalHandler = () => {
        active ? setIsPortalOpen(!isPortalOpen) : null
    }
    return (
        <div
            onClick={portalHandler}
            className="mb-4 relative w-64 h-64 bg-white rounded-lg overflow-hidden">
            <img
                src="https://img.freepik.com/premium-vector/school-bus-image-cartoon_844724-276.jpg"
                alt="Button Image"
                className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-orange-500  text-white text-center p-2">
                <p className="text-sm">
                    {start_location + '->' + end_location}{' '}
                </p>
                {active == false ? (
                    <button
                        onClick={() => {
                            deleteRoute(route_id)
                        }}
                        className="bg-black">
                        delete
                    </button>
                ) : (
                    ''
                )}
            </div>

            {isPortalOpen &&
                ReactDOM.createPortal(
                    <Details
                        route_id={route_id}
                        start_location={start_location}
                        end_location={end_location}
                        price_per_ticket={price_per_ticket}
                        portalHandler={portalHandler}
                        departure_time={departure_time}
                    />,
                    document.body,
                )}
        </div>
    )
}

export default Trip
