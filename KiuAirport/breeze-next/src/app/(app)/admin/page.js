'use client'

import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import Trip from '../dashboard/trip'
import { Island_Moments } from 'next/font/google'
import { useRouter } from 'next/navigation'

const cities = [
    'Kutaisi',
    'Tbilisi',
    'Telavi',
    'Borjomi',
    'Batumi',
    'Oni',
    'Baghdati',
    'Rustavi',
    'Xoni',
    'Martvili',
    'Tkachiri',
]

const Admin = () => {
    const { user, userGetAllRoutes, adminAddRoute, adminDeleteRoute } = useAuth(
        { middleware: 'auth' },
    )
    const [departureCity, setDepartureCity] = useState('')
    const [arrivalCity, setArrivalCity] = useState('')
    const [price, setPrice] = useState(0)
    const [departureDate, setDepartureDate] = useState('')
    const [departureHour, setDepartureHour] = useState('')
    const [addError, setAddError] = useState('')

    const [errors, setErrors] = useState({})

    const [routes, setRoutes] = useState([])
    const router = useRouter()

    // const { userGetAllRoutes } = useAuth({ middleware: 'auth' })

    const deleteRoute = async id => {
        try {
            await adminDeleteRoute(id)
            console.log('deleted')
            const newRoutes = routes.filter(route => route.id !== id)
            setRoutes(newRoutes)
        } catch (error) {
            console.error(error)
        }
    }

    const getRoutes = async () => {
        try {
            const response = await userGetAllRoutes()
            console.log(response.data)
            setRoutes(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        if (!user.is_admin) {
            console.log('USER IS ADMIN')
            router.push('/dashboard')
        }
        getRoutes()
    }, [])

    const errorSetter = () => {
        const newErrors = {}
        if (departureCity == '') {
            newErrors.departureCity = 'Please choose departure city'
        }
        if (arrivalCity == '') {
            newErrors.arrivalCity = 'Please choose arrival city'
        }
        if (price == 0) {
            newErrors.price = "Rides can't be free"
        }
        if (departureDate == '') {
            newErrors.departureDate = 'Please chooose departure date'
        }
        if (departureHour == '') {
            newErrors.departureHour = 'please choose departure hour'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length > 0
    }

    const now = Date.now()
    const date = new Date(now)

    const minDate =
        date.getUTCFullYear().toString() +
        '-' +
        date.getUTCMonth().toString() +
        '-' +
        String(date.getUTCDate()).padStart(2, '0')

    const handleDepartureCityChange = event => {
        setDepartureCity(event.target.value)
        if (event.target.value == arrivalCity) {
            setArrivalCity('')
        }
    }

    const handleArrivalCityChange = event => {
        setArrivalCity(event.target.value)
    }
    const handlePriceChange = event => {
        setPrice(event.target.value)
    }
    const handleDepartureDateChange = event => {
        setDepartureDate(event.target.value)
    }
    const handleDepartureHourChange = event => {
        setDepartureHour(event.target.value)
    }

    const getDate = () => {
        const dateString = departureDate + ' ' + departureHour
        const formattedDateString = dateString.replace(' ', 'T') + ':00'
        const date = new Date(formattedDateString)
        const dbDateString = date.toISOString().slice(0, 19).replace('T', ' ')
        return dbDateString
    }

    const addToDB = async e => {
        e.preventDefault()
        const errorsExist = errorSetter()

        if (errorsExist) {
            // console.log('swui')
        } else {
            try {
                const isAdded = await adminAddRoute(
                    departureCity,
                    arrivalCity,
                    price,
                    getDate(),
                )
                console.log(isAdded)
                const newObj = {
                    start_location: departureCity,
                    end_location: arrivalCity,
                    price_per_ticket: price,
                }

                console.log(isAdded.data)
                if (isAdded.data != -1) {
                    newObj.id = isAdded.data
                    setRoutes([...routes, newObj])
                } else {
                    setAddError('This route already exists')
                }
            } catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <div className="flex flex-row justify-around w-screen mt-8">
            <form
                onSubmit={addToDB}
                className="bg-white p-6 rounded-lg shadow-lg min-w-96 space-y-4 self-start">
                <div className="max-h-20 h-20">
                    <label
                        className="block text-sm font-medium text-orange-500 mb-1"
                        htmlFor="departure">
                        Departure
                    </label>
                    <select
                        value={departureCity}
                        onChange={handleDepartureCityChange}
                        id="departure"
                        className="block w-full border-orange-500  rounded-md shadow-sm focus:ring-orange-700 focus:border-orange-800 bg-white text-orange-500">
                        <option value="">-- Select --</option>
                        {cities.map(city => {
                            return (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            )
                        })}
                    </select>
                    <span className="text-xs text-red-500">
                        {errors.departureCity}
                    </span>
                </div>

                <div className="max-h-20 h-20">
                    <label
                        className="block text-sm font-medium text-orange-500 mb-1"
                        htmlFor="arrival">
                        Arrival
                    </label>
                    <select
                        value={arrivalCity}
                        onChange={handleArrivalCityChange}
                        id="arrival"
                        className="block w-full border-orange-500  rounded-md shadow-sm focus:ring-orange-700 focus:border-orange-800 bg-white text-orange-500">
                        <option value="">-- Select --</option>
                        {cities
                            .filter(city => city !== departureCity)
                            .map(city => {
                                return (
                                    <option key={city} value={city}>
                                        {city}
                                    </option>
                                )
                            })}
                    </select>
                    <span className="text-xs text-red-500">
                        {errors.arrivalCity}
                    </span>
                </div>

                <div className="max-h-20 h-20">
                    <label
                        className="block text-sm font-medium text-orange-500 mb-1"
                        htmlFor="date">
                        Price
                    </label>
                    <input
                        value={price}
                        onChange={handlePriceChange}
                        type="number"
                        min="1"
                        id="date"
                        className="block w-full border-orange-500  rounded-md shadow-sm focus:ring-orange-700 focus:border-orange-800 bg-white text-orange-500"
                    />
                    <span className="text-xs text-red-500">{errors.price}</span>
                </div>

                <div className="max-h-20 h-20">
                    <label
                        className="block text-sm font-medium text-orange-500 mb-1"
                        htmlFor="date">
                        Departure Date
                    </label>
                    <input
                        onChange={handleDepartureDateChange}
                        value={departureDate}
                        min={minDate}
                        type="date"
                        id="date"
                        className="block w-full border-orange-500  rounded-md shadow-sm focus:ring-orange-700 focus:border-orange-800 bg-white text-orange-500"
                    />
                    <span className="text-xs text-red-500">
                        {errors.departureDate}
                    </span>
                </div>

                <div className="max-h-20 h-20">
                    <label
                        className="block text-sm font-medium text-orange-500 mb-1"
                        htmlFor="time">
                        Departure Time
                    </label>
                    <input
                        onChange={handleDepartureHourChange}
                        value={departureHour}
                        type="time"
                        id="time"
                        className="block w-full border-orange-500 rounded-md shadow-sm focus:ring-orange-700 focus:border-orange-800 bg-white text-orange-500"
                    />
                    <span className="text-xs text-red-500">
                        {errors.departureHour}
                    </span>
                </div>
                <div className="flex flex-col justify-center h-30">
                    <span className="text-xs text-red-500 max-h-5">
                        {addError}
                    </span>
                    <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-orange-500 hover:text-white transition duration-300">
                        Add Route
                    </button>
                </div>
            </form>
            <div className="max-h-96 w-1/2 min-w-96 flex flex-wrap justify-between">
                {routes.map(route => (
                    <Trip
                        key={route.id}
                        route_id={route.id}
                        start_location={route.start_location}
                        end_location={route.end_location}
                        price={route.price_per_ticket}
                        time={route.departure_time}
                        active={false}
                        deleteRoute={deleteRoute}
                    />
                ))}
            </div>
        </div>
    )
}

export default Admin
