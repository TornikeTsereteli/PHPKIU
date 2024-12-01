'use client'
import Header from '@/app/(app)/Header'
import axios from "axios";
import {useAuth} from "@/hooks/auth";
import {useEffect, useState} from "react";


const Admin1 = () => {
    const {userGetAllRoutes,adminAddRoute} = useAuth({middleware:"auth"});

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try { // Replace with your API endpoint
                // const result = await userGetAllRoutes();
                const start_location = "Kopitnari";
                const end_location = "Batumi";
                const price_per_ticket = 99;
                const departure_time = "2024-12-1 14:00:00";
                console.log(await adminAddRoute(start_location, end_location, price_per_ticket,departure_time));

                // setData(result);
                // console.log(result)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, []); // Empty dependency array means it runs once on mount



    return (
        <>
            <Header title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            hala madrid
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Admin1;
