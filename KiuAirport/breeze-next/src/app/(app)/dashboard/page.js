'use client'
import Header from '@/app/(app)/Header'
import Trip from './trip'
import React, { useState } from 'react'

// export const metadata = {
//     title: 'Laravel - Dashboard',
// }

const TRIPS = [
    {
        route_id: 0,
        start_location: 'kutaisi',
        end_location: 'kopitnari',
        image_src: '',
        price_per_ticket: 15.99,
    },
    {
        route_id: 1,
        start_location: 'Tbilisi',
        end_location: 'kopitnari',
        image_src: '',
        price_per_ticket: 15.99,
    },
    {
        route_id: 2,
        start_location: 'Batumi',
        end_location: 'kopitnari',
        image_src: '',
        price_per_ticket: 15.99,
    },
    {
        route_id: 3,
        start_location: 'adada',
        end_location: 'kopitnari',
        image_src: '',
        price_per_ticket: 15.99,
    },
    {
        route_id: 4,
        start_location: 'fgdgfdgfd',
        end_location: 'kopitnari',
        image_src: '',
        price_per_ticket: 15.99,
    },
    {
        route_id: 5,
        start_location: 'suiiii',
        end_location: 'kopitnari',
        image_src: '',
        price_per_ticket: 15.99,
    },
    {
        route_id: 6,
        start_location: 'suwi',
        end_location: 'kopitnari',
        image_src: '',
        price_per_ticket: 15.99,
    },
]

const Dashboard = () => {
    const [routes, setRoutes] = useState(TRIPS)

    return (
        <>
            <Header title="Tickets" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden  sm:rounded-lg flex flex-wrap justify-around bg-transparent">
                        {routes.map(route => (
                            <Trip
                                key={route.route_id}
                                route_id={route.route_id}
                                start_location={route.start_location}
                                end_location={route.end_location}
                                price_per_ticket={route.price_per_ticket}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
