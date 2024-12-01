import { useContext, useState } from 'react'
import { CartContext } from '../layout'

const Details = ({
    route_id,
    start_location,
    end_location,
    price_per_ticket,
    portalHandler,
}) => {
    const contextVal = useContext(CartContext)
    const [tickets, setTickets] = useState(0)

    const addTicket = () => {
        if (contextVal.tickets > 2 || tickets > 2) {
            return
        }
        setTickets(prev => prev + 1)
        if (contextVal.tickets === 3) {
            contextVal.setError('Cart is full')
        }
    }

    const minusTicket = () => {
        if (tickets < 1) {
            return
        }
        setTickets(prev => prev - 1)
    }

    const appendTickets = () => {
        contextVal.setError(null)
        const sum = contextVal.ticketQuantity + tickets
        if (sum < 4 && tickets > 0) {
            for (let i = 0; i < tickets; i++) {
                contextVal.addTicket(contextVal.ticketQuantity + tickets)
                const addToCart = {
                    route_id,
                    start_location,
                    end_location,
                    price_per_ticket,
                    portalHandler,
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
            <div className="bg-white p-6 rounded shadow-lg h-2/5 w-1/5 flex flex-col justify-between items-center">
                <h2 className="text-lg">{route_id}</h2>
                <h3 className="text-lg">
                    {start_location + '->' + end_location}
                </h3>
                <div>
                    <p className="text-red-500 text-xs max-h-1 h-1">
                        {contextVal.error}
                    </p>
                </div>
                <div className="flex flex-row min-w-full justify-between">
                    <button
                        onClick={() => {
                            minusTicket()
                        }}>
                        -
                    </button>
                    <p>quantity: {tickets}</p>
                    <button
                        onClick={() => {
                            addTicket()
                        }}>
                        +
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => {
                            appendTickets()
                        }}
                        className={
                            tickets > 0
                                ? 'mt-4 px-4 py-2 bg-lime-500 text-white rounded'
                                : 'mt-4 px-4 py-2 bg-lime-100 text-white rounded'
                        }>
                        add to cart
                    </button>
                </div>
                <button
                    onClick={portalHandler}
                    className="mt-4 min-w-full px-4 py-2 bg-red-500 text-white rounded">
                    Close
                </button>
            </div>
        </div>
    )
}

export default Details
