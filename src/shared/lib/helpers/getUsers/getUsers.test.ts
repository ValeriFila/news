import axios from 'axios'
import { getUsers } from './getUsers'
jest.mock('axios')

describe('getUsers', () => {
    const result = {
        data: [
            {
                'id': 1,
                'name': 'Leanne Graham',
                'username': 'Bret',
                'email': 'Sincere@april.biz'
            }
        ]
    }

    test('Получение первого юзера', async () => {
        (axios.get as jest.Mock).mockResolvedValue(result)

        const data = await getUsers()
        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(data).toBe(result.data)
    })
})
