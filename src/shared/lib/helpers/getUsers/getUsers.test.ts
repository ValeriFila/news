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
                'email': 'Sincere@april.biz',
                'address': {
                    'street': 'Kulas Light',
                    'suite': 'Apt. 556',
                    'city': 'Gwenborough',
                    'zipcode': '92998-3874',
                    'geo': {
                        'lat': '-37.3159',
                        'lng': '81.1496'
                    }
                },
                'phone': '1-770-736-8031 x56442',
                'website': 'hildegard.org',
                'company': {
                    'name': 'Romaguera-Crona',
                    'catchPhrase': 'Multi-layered client-server neural-net',
                    'bs': 'harness real-time e-markets'
                }
            }
        ]
    }

    test('Получение первого юзера', async () => {
        (axios.get as jest.Mock).mockResolvedValue(result)

        const data = await getUsers()
        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(data).toBe(1)
    })
})
