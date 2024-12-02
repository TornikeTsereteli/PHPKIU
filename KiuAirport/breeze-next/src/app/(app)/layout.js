'use client'

import { useAuth } from '@/hooks/auth'
import Navigation from '@/app/(app)/Navigation'
import Loading from '@/app/(app)/Loading'
import { createContext, useState } from 'react'

export const CartContext = createContext()
const AppLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'auth' })
    const [ticketQuantity, setTicketQuantity] = useState(0)
    const [cartProducts, setCartProducts] = useState({})
    const [error, setError] = useState(null)

    console.log(cartProducts)
    const addTicket = val => {
        setTicketQuantity(val)
    }

    const removeTicket = () => {
        setTicketQuantity(prev => (prev < 1 ? prev : prev - 1))
    }

    const removeTicketByID = id => {
        delete cartProducts[id]
        console.log(cartProducts)
        setCartProducts(cartProducts)
    }

    const contextVar = {
        cartProducts,
        setCartProducts,
        addTicket,
        removeTicket,
        ticketQuantity,
        setTicketQuantity,
        removeTicketByID,
        error,
        setError,
    }

    if (!user) {
        return <Loading />
    }

    return (
        <CartContext.Provider value={contextVar}>
            <div className="min-h-screen ">
                <Navigation user={user} ticketQuantity={ticketQuantity} />
                <main className="flex flex-row justify-around">{children}</main>
            </div>
        </CartContext.Provider>
    )
}

export default AppLayout
