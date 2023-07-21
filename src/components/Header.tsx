import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Helper } from "../lib/helper"
import GoogleSignInButton from './GoogleSignInButton'
import { useContext, useEffect } from 'react'
import { userContext } from '../contexts/UserContext'

type Props = {}

function Header({ }: Props) {
    const user = useContext(userContext)
    return (
        <header className="flex items-center pt-3 pb-5 justify-between">
            {
                user != null
                    ?
                    <img src={user.avatar} className="w-10 h-10 mr-10 rounded-full" />
                    :
                    <div className="w-10 h-10 mr-10"></div>
            }
            <form
                className="border-gray-400 border-2 rounded-3xl overflow-hidden"
                onSubmit={Helper.prevent}>
                <input className="w-80 py-2 rounded-l-3xl pl-3 pr-1" type="text" />
                <button className="w-12 text-gray-400 py-2 pr-1 border-y-0 border-r-0 border-l-gray-400 border-2">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
            <GoogleSignInButton />
        </header >
    )
}

export default Header