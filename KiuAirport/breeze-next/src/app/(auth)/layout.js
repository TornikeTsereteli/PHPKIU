import Link from 'next/link'
import AuthCard from '@/app/(auth)/AuthCard'
import ApplicationLogo from '@/components/ApplicationLogo'

export const metadata = {
    title: 'Laravel',
}

const Layout = ({ children }) => {
    return (
        <div>
            <div className="text-gray-900 antialiased">
                <AuthCard
                    logo={
                        <Link href="/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-orange-500"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2v5l-2 2v1h6v-1l-2-2v-5l8 2z" />
                            </svg>
                        </Link>
                    }>
                    {children}
                </AuthCard>
            </div>
        </div>
    )
}

export default Layout
