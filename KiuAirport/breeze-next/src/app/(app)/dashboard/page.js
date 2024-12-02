'use client'
import Header from '@/app/(app)/Header'
import Trip from './trip'
import React, { useEffect, useState } from 'react'

import { useAuth } from '@/hooks/auth'
// export const metadata = {
//     title: 'Laravel - Dashboard',
// }

const Dashboard = () => {
    const [routes, setRoutes] = useState([])
    const { userGetAllRoutes } = useAuth({ middleware: 'auth' })

    async function getRoutes() {
        try {
            const response = await userGetAllRoutes()
            setRoutes(response.data)
            console.log(response.data)

            const date = new Date(response.data[0].departure_time)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getRoutes()
    }, [])

    return (
        <>
            {/* <Header title="Tickets" /> */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden  sm:rounded-lg flex flex-wrap justify-around bg-transparent">
                        {routes.map(route => (
                            <Trip
                                key={route.id}
                                route_id={route.id}
                                start_location={route.start_location}
                                end_location={route.end_location}
                                price_per_ticket={route.price_per_ticket}
                                departure_time={route.departure_time}
                                active={true}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
