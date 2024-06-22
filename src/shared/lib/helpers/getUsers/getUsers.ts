import axios from 'axios'

export interface Users {
    id: number
    name: string
    username: string
    email: string
    address: Record<string, Record<string, string>>
    phone: string
    website: string
    company: Record<string, Record<string, string>>
}

export const getUsers = async () => {
    try {
        const { data } = await axios.get<Users[]>('https://jsonplaceholder.typicode.com/users')

        return data[0].id
    } catch (e) {

        return 'Error while getting users'
    }
}
