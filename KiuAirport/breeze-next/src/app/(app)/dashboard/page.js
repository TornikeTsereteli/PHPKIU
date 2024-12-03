'use client'
import Header from '@/app/(app)/Header'
import Trip from './trip'
import React, { useEffect, useState } from 'react'

import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/navigation'

// export const metadata = {
//     title: 'Laravel - Dashboard',
// }

const Dashboard = () => {
    const router = useRouter()
    const [routes, setRoutes] = useState([])
    const { user, userGetAllRoutes } = useAuth({ middleware: 'auth' })

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
        if (user && user.is_admin) {
            router.push('/admin')
        }
        getRoutes()
    }, [])

    return (
        <>
            {/* <Header title="Tickets" /> */}
            <div className="py-12">
                <div className=" w-max max-auto sm:px-6 lg:px-8">
                    <div className="bg-white max-w-screen-xl w-screen overflow-hidden  sm:rounded-lg flex flex-wrap justify-around bg-transparent">
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
