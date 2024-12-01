import LoginLinks from '@/app/LoginLinks'

export const metadata = {
    title: 'Laravel',
}

const Home = () => {
    return (
        <>
            <div className=" bg-wallpaper bg-cover bg-center relative flex items-top justify-center min-h-screen  sm:items-center sm:pt-0">
                <LoginLinks />

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-center pt-8 sm:justify-start sm:pt-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100"
                            height="100">
                            <image
                                href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScWWZF6iMI_EnrUCiWn9ZaFRh17ge7x_7-9Q&s"
                                width="100"
                                height="100"
                            />
                        </svg>
                    </div>

                    <div className="mt-8 bg-white dark:bg-transparent overflow-hidden shadow sm:rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6">
                                <div className="flex items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-500">
                                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>

                                    <div className="ml-4 text-lg leading-7 font-semibold">
                                        <p className="underline text-gray-900 dark:text-white">
                                            Documentation
                                        </p>
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                        Laravel has wonderful, thorough
                                        documentation covering every aspect of
                                        the framework. Whether you are new to
                                        the framework or have previous
                                        experience with Laravel, we recommend
                                        reading all of the documentation from
                                        beginning to end.
                                    </div>
                                </div>
                            </div>

                            <div className="p-6  border-gray-200 dark:border-gray-700 md:border-t-0 ">
                                <div className="flex items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-500">
                                        <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>

                                    <div className="ml-4 text-lg leading-7 font-semibold">
                                        <p
                                            href="https://laracasts.com"
                                            className="underline text-gray-900 dark:text-white">
                                            Laracasts
                                        </p>
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                        Laracasts offers thousands of video
                                        tutorials on Laravel, PHP, and
                                        JavaScript development. Check them out,
                                        see for yourself, and massively level up
                                        your development skills in the process.
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border-gray-200 dark:border-gray-700">
                                <div className="flex items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-500">
                                        <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                    </svg>

                                    <div className="ml-4 text-lg leading-7 font-semibold">
                                        <p
                                            href="https://laravel-news.com/"
                                            className="underline text-gray-900 dark:text-white">
                                            Laravel News
                                        </p>
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                        Laravel News is a community driven
                                        portal and newsletter aggregating all of
                                        the latest and most important news in
                                        the Laravel ecosystem, including new
                                        package releases and tutorials.
                                    </div>
                                </div>
                            </div>

                            <div className="p-6  border-gray-200 dark:border-gray-700 ">
                                <div className="flex items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-500">
                                        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <div className="ml-4 text-lg leading-7 font-semibold text-gray-900 dark:text-white">
                                        About Us
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                        we’re passionate about providing
                                        reliable and efficient transportation
                                        services to our customers. With a fleet
                                        of modern vehicles and a team of
                                        experienced drivers, we prioritize
                                        safety, comfort, and punctuality above
                                        all else. Our mission is to make every
                                        trip a seamless experience, whether
                                        you're traveling across the city or
                                        across the country.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-4 sm:items-center sm:justify-between">
                        <div className="text-center text-sm text-gray-500 sm:text-left">
                            <div className="flex items-center">
                                <svg
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="-mt-px w-5 h-5 text-gray-400">
                                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                        </div>

                        <div className="ml-4 text-center text-sm text-gray-500 sm:text-right sm:ml-0"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
