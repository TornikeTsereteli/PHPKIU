'use client'

import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

const LoginLinks = () => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
            {user ? (
                <Link
                    href="/dashboard"
                    className="ml-4 text-sm text-white bg-orange-500 px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition duration-200">
                    Tickets
                </Link>
            ) : (
                <>
                    <Link
                        href="/login"
                        className="ml-4 text-sm text-white bg-orange-500 px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition duration-200">
                        Login
                    </Link>

                    <Link
                        href="/register"
                        className="ml-4 text-sm text-white bg-orange-500 px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition duration-200">
                        Register
                    </Link>
                </>
            )}
        </div>
    )
}

export default LoginLinks
