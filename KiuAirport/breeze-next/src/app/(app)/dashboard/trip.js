import { useState } from 'react'
import ReactDOM from 'react-dom'
import Details from './portal'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/auth'

const Trip = ({
    route_id,
    start_location,
    end_location,
    price_per_ticket,
    departure_time,
    active,
    deleteRoute,
    time,
}) => {
    const [isPortalOpen, setIsPortalOpen] = useState(false)

    const { user } = useAuth({ middleware: 'auth' })

    const portalHandler = () => {
        active ? setIsPortalOpen(!isPortalOpen) : null
    }
    function formatDate(dateString) {
        const date = new Date(dateString)
        const year = date.getFullYear().toString().slice(-2)
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        const hours = String(date.getHours()).padStart(2, '0') // Get hours and pad if needed
        const minutes = String(date.getMinutes()).padStart(2, '0') // Get minutes and pad if needed

        return `${year}/${month}/${day}   ${hours}:${minutes}`
    }

    return (
        <div
            onClick={portalHandler}
            className="mb-4 ml-3 relative w-64 h-64 bg-white rounded-lg overflow-hidden">
            <img
                src="https://img.freepik.com/premium-vector/school-bus-image-cartoon_844724-276.jpg"
                alt="Button Image"
                className="w-full h-full object-cover"
            />
            {user.is_admin && (
                <div className="absolute top-0 left-0 right-0 bg-orange-500  text-white text-center p-2">
                    {formatDate(time)}
                </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 bg-orange-500  text-white text-center p-2">
                <p className="text-sm">
                    {start_location + '       ➡️       ' + end_location}{' '}
                </p>
                {active == false ? (
                    <div className="w-auto">
                        <button
                            onClick={() => {
                                deleteRoute(route_id)
                            }}
                            className="bg-white text-orange-500 border-2 border-orange-500 py-1 px-4 rounded-md hover:bg-orange-300 hover:text-white transition duration-300 ease-in-out">
                            Delete
                        </button>
                    </div>
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
                        forTickets={false}
                    />,
                    document.body,
                )}
        </div>
    )
}

export default Trip
