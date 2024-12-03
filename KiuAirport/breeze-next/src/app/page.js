import LoginLinks from '@/app/LoginLinks'

export const metadata = {
    title: 'Laravel',
}

const Home = () => {
    return (
        <>
            <div className="bg-wallpaper bg-cover bg-center relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
                <LoginLinks />

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-center pt-8 sm:justify-start sm:pt-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-orange-500"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2v5l-2 2v1h6v-1l-2-2v-5l8 2z" />
                        </svg>
                    </div>

                    <div className="mt-8 bg-white rounded-lg shadow overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/** Documentation Card */}
                            <div className="p-6 border-b md:border-r border-gray-200">
                                <div className="flex items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-orange-500">
                                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                    <div className="ml-4 text-lg font-semibold">
                                        <p className="text-orange-500">
                                            "Every Journey Matters."
                                        </p>
                                    </div>
                                </div>
                                <div className="ml-12 mt-2 text-gray-600 text-sm">
                                    At TRANSPORT, we combine safety,
                                    reliability, and comfort to deliver
                                    transportation services you can trust.
                                    Whether you're traveling across town or to a
                                    distant destination, our modern fleet and
                                    professional drivers ensure a smooth,
                                    timely, and enjoyable experience.
                                </div>
                            </div>

                            {/** Laracasts Card */}
                            <div className="p-6 border-b border-gray-200 md:border-t-0">
                                <div className="flex items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-orange-500">
                                        <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div className="ml-4 text-lg font-semibold">
                                        <p className="text-orange-500">
                                            "Moving You, Safely and
                                            Comfortably."
                                        </p>
                                    </div>
                                </div>
                                <div className="ml-12 mt-2 text-gray-600 text-sm">
                                    We’re passionate about providing top-tier
                                    transportation services that prioritize your
                                    safety, comfort, and schedule. With a team
                                    of skilled drivers and a state-of-the-art
                                    fleet, we aim to make every trip stress-free
                                    and reliable.
                                </div>
                            </div>

                            {/** Laravel News Card */}
                            <div className="p-6 border-b md:border-r border-gray-200">
                                <div className="flex items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-orange-500">
                                        <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                    </svg>
                                    <div className="ml-4 text-lg font-semibold">
                                        <p className="text-orange-500">
                                            "Your Destination, Our Priority."
                                        </p>
                                    </div>
                                </div>
                                <div className="ml-12 mt-2 text-gray-600 text-sm">
                                    With a focus on comfort and punctuality, we
                                    are dedicated to making your travel
                                    experience seamless. Our modern vehicles and
                                    experienced team are here to ensure that
                                    every journey exceeds your expectations.
                                </div>
                            </div>

                            {/** About Us Card */}
                            <div className="p-6">
                                <div className="flex items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-orange-500">
                                        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div className="ml-4 text-lg font-semibold">
                                        <p className="text-orange-500">
                                            About Us
                                        </p>
                                    </div>
                                </div>
                                <div className="ml-12 mt-2 text-gray-600 text-sm">
                                    We prioritize safety, comfort, and
                                    punctuality in all trips. Our mission is to
                                    provide seamless experiences with our modern
                                    fleet and experienced drivers.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-8 text-sm text-gray-500">
                        <p>&copy; 2024 TRANSPORT. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
