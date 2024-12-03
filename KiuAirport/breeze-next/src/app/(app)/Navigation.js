import ApplicationLogo from '@/components/ApplicationLogo'
import Dropdown from '@/components/Dropdown'
import Link from 'next/link'
import NavLink from '@/components/NavLink'
import ResponsiveNavLink, {
    ResponsiveNavButton,
} from '@/components/ResponsiveNavLink'
import { DropdownButton } from '@/components/DropdownLink'
import { useAuth } from '@/hooks/auth'
import { usePathname } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import CartItem from './dashboard/cartItem'
import { CartContext } from './layout'
import ReactDOM from 'react-dom'
import TicketHPortal from './TicketHPortal'
import TicketPortal from './TicketPortal'

const Navigation = ({ user, ticketQuantity }) => {
    const { logout, userBuyTicket } = useAuth()

    const cartContext = useContext(CartContext)

    const [open, setOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isTicketPortalOpen, setIsTicketPortalOpen] = useState(false)
    const [isTicketHistoryOpen, setIsTicketHistoryOpen] = useState(false)

    const ticketHistoryHandler = () => {
        setIsTicketHistoryOpen(prev => !prev)
    }

    const handleCart = () => {
        setIsOpen(prev => !prev)
    }

    const handleTicketPortal = () => {
        setIsTicketPortalOpen(prev => !prev)
    }

    const handleCheckout = async () => {
        const data = { ...cartContext.cartProducts }
        const result = {}
        if (Object.keys(data).length > 0) {
            for (let key in data) {
                result[key] = data[key].length
            }
            await userBuyTicket(result)
            cartContext.setCartProducts({})
            cartContext.setTicketQuantity(0)
        } else {
            console.log('No tickets')
        }
    }

    const toggleDropdown = () => {
        setIsOpen(prev => !prev)
    }

    const removeTicketByID = id => {
        cartContext.setError(null)
        let newobj = { ...cartContext.cartProducts }
        if (newobj[id].length == 1) {
            delete newobj[id]
            cartContext.setTicketQuantity(prev => prev - 1)
        } else {
            newobj[id].pop()
            cartContext.setTicketQuantity(prev => prev - 1)
        }
        cartContext.setCartProducts(newobj)
        console.log(cartContext.cartProducts)
    }
    const addTicketByID = id => {
        cartContext.setError(null)
        if (cartContext.ticketQuantity < 3) {
            let newobj = { ...cartContext.cartProducts }
            let newArrElement = newobj[id][0]
            let newEl = { ...newArrElement }
            newobj[id].push(newEl)
            cartContext.setCartProducts(newobj)
            cartContext.setTicketQuantity(prev => prev + 1)
        }
    }

    const renderCartProducts = prods => {
        const result = []
        const products = prods
        Object.keys(products).forEach(key => {
            let count = products[key].length
            let element = products[key][0]
            result.push(
                <CartItem
                    key={element.route_id}
                    id={element.route_id}
                    start_location={element.start_location}
                    end_location={element.end_location}
                    count={count}
                    price={element.price_per_ticket * count}
                    removeTicketByID={removeTicketByID}
                    addTicketByID={addTicketByID}
                    setError={cartContext.setError}
                />,
            )
        })
        return result
    }

    return (
        <nav className="bg-transparent ">
            {/* Primary Navigation Menu */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 top-0 z-50">
                    <div className="flex">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/dashboard">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-12 text-orange-500"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2v5l-2 2v1h6v-1l-2-2v-5l8 2z" />
                                </svg>
                            </Link>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                            {user.isAdmin && (
                                <NavLink
                                    href="/dashboard"
                                    active={usePathname() === '/dashboard'}>
                                    Tickets
                                </NavLink>
                            )}
                        </div>
                    </div>

                    <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                        {user.is_admin && (
                            <button
                                onClick={ticketHistoryHandler}
                                className="text-orange-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out">
                                Tickets bought
                            </button>
                        )}
                    </div>
                    {isTicketHistoryOpen &&
                        ReactDOM.createPortal(
                            <TicketHPortal
                                handleCart={handleCart}
                                ticketHistoryHandler={ticketHistoryHandler}
                            />,
                            document.body,
                        )}

                    {/* Settings Dropdown */}
                    <div className="hidden sm:flex sm:items-center sm:ml-6">
                        {!user.is_admin && (
                            <button onClick={toggleDropdown}>
                                <div className="relative w-8 h-8">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 32 32"
                                        className="w-8 h-8 text-orange-500"
                                        fill="currentColor">
                                        <g
                                            id="shopping_cart"
                                            data-name="shopping cart">
                                            <path
                                                className="cls-1"
                                                d="M29.74 8.32A1 1 0 0 0 29 8H13a1 1 0 0 0 0 2h14.91l-.81 9.48a1.87 1.87 0 0 1-2 1.52H12.88a1.87 1.87 0 0 1-2-1.52L10 8.92v-.16L9.33 6.2A3.89 3.89 0 0 0 7 3.52L3.37 2.07a1 1 0 0 0-.74 1.86l3.62 1.45a1.89 1.89 0 0 1 1.14 1.3L8 9.16l.9 10.49a3.87 3.87 0 0 0 4 3.35h.1v2.18a3 3 0 1 0 2 0V23h8v2.18a3 3 0 1 0 2 0V23h.12a3.87 3.87 0 0 0 4-3.35L30 9.08a1 1 0 0 0-.26-.76zM14 29a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm10 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"
                                            />
                                            <path
                                                className="cls-1"
                                                d="M15 18v-5a1 1 0 0 0-2 0v5a1 1 0 0 0 2 0zM20 18v-5a1 1 0 0 0-2 0v5a1 1 0 0 0 2 0zM25 18v-5a1 1 0 0 0-2 0v5a1 1 0 0 0 2 0z"
                                            />
                                        </g>
                                    </svg>
                                    {/* Red Circle for Item Count */}
                                    <span className="absolute top-0 left-6 right-0 flex justify-center items-center w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full">
                                        {ticketQuantity}
                                    </span>
                                </div>
                            </button>
                        )}

                        {isOpen && (
                            <div className="absolute right-96 top-10 mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                                <ul className="p-4 space-y-2">
                                    {ticketQuantity > 0 ? (
                                        renderCartProducts(
                                            cartContext.cartProducts,
                                        )
                                    ) : (
                                        <li className="text-sm text-gray-500 text-center">
                                            Cart is empty
                                        </li>
                                    )}
                                </ul>
                                <div className="p-4 border-t border-gray-200">
                                    <button
                                        onClick={handleCheckout}
                                        className="w-full bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300">
                                        Checkout
                                    </button>
                                    <button
                                        onClick={handleTicketPortal}
                                        className="w-full border-t-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300">
                                        View my tickets
                                    </button>
                                </div>
                                {isTicketPortalOpen &&
                                    ReactDOM.createPortal(
                                        <TicketPortal
                                            handleCart={handleCart}
                                            handleTicketPortal={
                                                handleTicketPortal
                                            }
                                        />,
                                        document.body,
                                    )}
                            </div>
                        )}
                        <Dropdown
                            align="right"
                            width="48"
                            trigger={
                                <button className="ml-4 text-sm text-white bg-orange-500 px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition duration-200">
                                    <div>{user?.name}</div>

                                    <div className="ml-1"></div>
                                </button>
                            }>
                            {/* Authentication */}
                            <DropdownButton onClick={logout}>
                                Logout
                            </DropdownButton>
                        </Dropdown>
                    </div>

                    {/* Hamburger */}
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setOpen(open => !open)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24">
                                {open ? (
                                    <path
                                        className="inline-flex"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        className="inline-flex"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Responsive Navigation Menu */}
            {open && (
                <div className="block sm:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href="/dashboard"
                            active={usePathname() === '/dashboard'}>
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    {/* Responsive Settings Options */}
                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="flex items-center px-4">
                            <div className="flex-shrink-0">
                                <svg
                                    className="h-10 w-10 fill-current text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>

                            <div className="ml-3">
                                <div className="font-medium text-base text-gray-800">
                                    {user?.name}
                                </div>
                                <div className="font-medium text-sm text-gray-500">
                                    {user?.email}
                                </div>
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            {/* Authentication */}
                            <ResponsiveNavButton onClick={logout}>
                                Logout
                            </ResponsiveNavButton>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navigation
