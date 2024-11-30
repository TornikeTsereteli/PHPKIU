import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter()
    const params = useParams()

    const { data: user, error, mutate } = useSWR('/api/user', () =>
        axios
            .get('/api/user')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error
                console.log("from useSWR")
                router.push('/verify-email')
            }),
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const register = async ({ setErrors, ...props }) => {
        await csrf()

        setErrors([])

        axios
            .post('/register', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const login = async ({ setErrors, setStatus, ...props }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/login', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const forgotPassword = async ({ setErrors, setStatus, email }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/forgot-password', { email })
            .then(response => setStatus(response.data.status))
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resetPassword = async ({ setErrors, setStatus, ...props }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/reset-password', { token: params.token, ...props })
            .then(response =>
                router.push('/login?reset=' + btoa(response.data.status)),
            )
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resendEmailVerification = ({ setStatus }) => {
        axios
            .post('/email/verification-notification')
            .then(response => setStatus(response.data.status))
    }

    const logout = async () => {
        // if (!error) {
        //     await axios.post('/logout').then(() => mutate())
        // }
        //
        // window.location.pathname = '/login'

        await csrf();


        axios
            .get('/api/test2')
            .then(res => console.log(res.data))
            .catch(error => {
                if (error.response.status !== 409) throw error
                console.log("from useSWR")
                // router.push('/verify-email')
            })
    }

    const test2 = async () => {
        await csrf();


        axios
            .get('/api/test2')
            .then(res => console.log(res.data))
            .catch(error => {
                if (error.response.status !== 409) throw error
                console.log("from useSWR")
                // router.push('/verify-email')
            })

    }



    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user)
            router.push(redirectIfAuthenticated)


        // if(user == null){
        //     router.back();
        //     return;
        // }

        // if(middleware === 'auth' && !user){
        //
        // }

        if (user && middleware === 'auth' && !user?.email_verified_at) {
            console.log(user)
            console.log(Date.now())
            // console.log("fromn gsfgsdgs")
            router.push('/verify-email')
        }

        if(user) {
            console.log(user);

            axios
                .get('/api/test2')
                .then(res => console.log(res.data))
                .catch(error => {
                    if (error.response.status !== 409) throw error
                    console.log("from useSWR")
                    // router.push('/verify-email')
                })
        }

        if (
            window.location.pathname === '/verify-email' &&
            user?.email_verified_at
        )
            router.push(redirectIfAuthenticated)
        if (middleware === 'auth' && error) logout()
    }, [user, error])

    return {
        user,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
    }
}
