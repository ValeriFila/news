import React, { useEffect, useState } from 'react'
import { getUsers } from './getUsers'
import './Users.scss'
import { Users as UsersProps } from './getUsers'

export const Users = () => {
    const [users, setUsers] = useState<UsersProps[]>([])

    const loadUsers = async () => {
        const users =  await getUsers()
        if (typeof users !== 'string') {
            setUsers(users)
        }
    }

    useEffect(() => {
        loadUsers()
    }, [])

    return (
        <div>
            {users.map((user) => (
                <div
                    key={user.id}
                    data-testid='users'
                >
                    {user.name}
                </div>
            ))}
        </div>
    )
}
