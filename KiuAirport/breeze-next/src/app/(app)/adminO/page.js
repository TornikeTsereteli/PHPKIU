'use client'
import Header from '@/app/(app)/Header'
import axios from "axios";
import {useAuth} from "@/hooks/auth";
import {useEffect} from "react";


const Admin1 = () => {
    const {logout} = useAuth({middleware:"auth"});

    useEffect(() =>{
        logout()
    }, [])

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
