'use client'

import { useAuth } from '@/hooks/auth'

const Admin = () => {
    const {} = useAuth({ middleware: 'auth' })

    return <div>Admin</div>
}

export default Admin
