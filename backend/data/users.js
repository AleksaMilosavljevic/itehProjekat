import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Aleksa Milosavljevic',
        email: 'aleksa@gmail.com',
        password: bcrypt.hashSync('123123',10),
        isAdmin: true

    },
    {
        name: 'Nemanja Nikolic',
        email: 'nemanja@gmail.com',
        password: bcrypt.hashSync('123123',10)

    }
]

export default users