import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import Ticket from './ticket'

const TicketHPortal = ({ ticketHistoryHandler, handleCart }) => {
    const { adminGetOrders } = useAuth({ middleware: 'auth' })

    const [ticketHistory, setTicketHistory] = useState([])

    const getTicketHistory = async () => {
        const response = await adminGetOrders()
        setTicketHistory(response.data)
    }

    useEffect(() => {
        try {
            getTicketHistory()
        } catch (e) {
            console.error(e)
        }
    }, [])

    return (
        <div
            onClick={ticketHistoryHandler}
            className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center ">
            <div
                className="bg-white p-8 rounded-lg shadow-2xl h-auto w-auto flex flex-col justify-between items-center space-y-4 relative"
                style={{ maxHeight: '90vh', overflowY: 'auto' }}>
                {ticketHistory.map((ticket, index) => (
                    <Ticket
                        key={index}
                        quantity={ticket.quantity}
                        start_location={ticket.start_location}
                        end_location={ticket.end_location}
                        total_price={ticket.total_price}
                    />
                ))}

                {/* <button
                    className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-orange-500 hover:text-white transition duration-300"
                    onClick={handleTicketPortal}>
                    CLOSE
                </button> */}
            </div>
        </div>
    )
}

export default TicketHPortal
