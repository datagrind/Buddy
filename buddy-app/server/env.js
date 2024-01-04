import { getUser } from './controllers/appController'
import { useAuthStore } from '../store/store'

export const  Username = () => {
    const { username } = useAuthStore( state => state.auth )
    const emailuser = getUser(username)
    return emailuser
}

console.log (Username())

module.exports = {
    EMAIL: Username(),
    PASSWORD:'irco uxeo ftcq bhmc'
}