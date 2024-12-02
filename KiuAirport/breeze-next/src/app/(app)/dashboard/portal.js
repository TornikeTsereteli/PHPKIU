import { useContext, useState } from 'react'
import { CartContext } from '../layout'

const Details = ({
    route_id,
    start_location,
    end_location,
    price_per_ticket,
    portalHandler,
    departure_time,
}) => {
    const contextVal = useContext(CartContext)
    const [tickets, setTickets] = useState(0)

    const dt = new Date(departure_time)

    const departure_day = String(dt.getUTCDate()).padStart(2, '0')
    const departure_month = new Date(departure_time).getUTCMonth()
    const departure_year = dt.getUTCFullYear()
    const departure_hour = new Date(departure_time).getUTCHours()

    const addTicket = () => {
        if (contextVal.tickets > 2 || tickets > 2) {
            return
        }
        setTickets(prev => prev + 1)
        contextVal.setError('')
        if (contextVal.tickets === 3) {
            contextVal.setError('Cart is full')
        }
    }

    const minusTicket = () => {
        if (tickets < 1) {
            return
        }
        contextVal.setError('')
        setTickets(prev => prev - 1)
    }

    const appendTickets = () => {
        const sum = contextVal.ticketQuantity + tickets
        if (sum < 4 && tickets > 0) {
            contextVal.setError('')
            for (let i = 0; i < tickets; i++) {
                contextVal.addTicket(contextVal.ticketQuantity + tickets)
                const addToCart = {
                    route_id,
                    start_location,
                    end_location,
                    price_per_ticket,
                    portalHandler,
                    departure_time,
                }
                const data = contextVal.cartProducts
                if (data.hasOwnProperty([route_id])) {
                    data[route_id].push(addToCart)
                    contextVal.setCartProducts(data)
                } else {
                    data[route_id] = [addToCart]
                    contextVal.setCartProducts(data)
                }

                setTickets(0)
            }
        } else if (sum > 3) {
            if (contextVal.ticketQuantity == 3) {
                contextVal.setError('Cart is full')
            } else {
                contextVal.setError(
                    `you can only add ${3 - contextVal.ticketQuantity} tickets to the cart`,
                )
            }
        }
    }

    return (
        <div
            onClick={e => e.stopPropagation()}
            className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-2xl h-2/5 w-1/4 flex flex-col justify-between items-center space-y-4 h-auto">
                {/* Title */}
                <h2 className="text-xl font-semibold text-orange-500">
                    Departure Day: {departure_day} / {departure_month} /{' '}
                    {departure_year}
                </h2>
                {/* Departure Info */}
                <h2 className="text-md text-gray-700">
                    Departure Hour:{' '}
                    <span className="font-bold">{departure_hour}:00</span>
                </h2>
                <h3 className="text-md text-gray-700 font-medium ">
                    {start_location} <span className="text-orange-500">→</span>{' '}
                    {end_location}
                </h3>
                {/* Error Message */}
                <div className="h-2">
                    {contextVal.error && (
                        <p className="text-red-500 text-xs h-1 max-h-1">
                            {contextVal.error}
                        </p>
                    )}
                </div>
                {/* Ticket Controls */}
                <div className="flex flex-row items-center space-x-4">
                    <button
                        onClick={minusTicket}
                        className="px-4 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600">
                        −
                    </button>
                    <p className="text-gray-700 font-medium">
                        Quantity: {tickets}
                    </p>
                    <button
                        onClick={addTicket}
                        className="px-4 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600">
                        +
                    </button>
                </div>
                {/* Add to Cart Button */}
                <button
                    onClick={appendTickets}
                    className={`mt-4 px-6 py-3 font-bold rounded ${
                        tickets > 0
                            ? 'bg-orange-500 text-white hover:bg-orange-600'
                            : 'bg-orange-100 text-gray-400 cursor-not-allowed'
                    }`}>
                    Add to Cart
                </button>
                {/* Close Button */}
                <button
                    onClick={portalHandler}
                    className="mt-4 min-w-full px-6 py-3 bg-red-500 text-white font-bold rounded hover:bg-red-600">
                    Close
                </button>
            </div>
        </div>
    )
}

export default Details
