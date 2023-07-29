import { faCoins, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Helper } from "../lib/helper"
import GoogleSignInButton from './GoogleSignInButton'
import { useContext, useRef, useState } from 'react'
import { userContext } from '../contexts/UserContext'
import { videoService } from '../services/VideoService'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
import { userService } from '../services/UserService'

type Props = {
    setResponse: React.Dispatch<any>
    setLoading: React.Dispatch<React.SetStateAction<any>>,
    loading: boolean
}

function Header({ setResponse, setLoading, loading }: Props) {
    const { user, setUser } = useContext(userContext)
    const [search, setSearch] = useState("")

    return (
        <>
            <header className="flex items-center pt-3 pb-5 justify-between">
                <div className="log flex items-center">
                    {
                        user
                            ?
                            <>
                                <img src={user.avatar} className="w-10 h-10 mr-2 rounded-full" />
                                <div
                                    className="bg-black py-1 px-2 flex flex-nowrap items-center rounded-md text-white"
                                >
                                    <span
                                        className="font-semibold mr-1"
                                    >{user.coins}</span>
                                    <FontAwesomeIcon icon={faCoins} />

                                </div>
                            </>
                            :
                            <GoogleSignInButton />
                    }
                </div>
                <form
                    className="border-gray-400 border-2 rounded-3xl overflow-hidden"
                    onSubmit={Helper.prevent}>
                    <input value={search} onChange={e => setSearch(e.target.value)} className="w-80 py-2 rounded-l-3xl pl-3 pr-1 search" type="text" placeholder="Enter a Youtube URL!" />
                    <button
                        disabled={loading}
                        onClick={async () => {
                            try {
                                if (!user) {
                                    toast.error("You gotta login with Google")
                                    return
                                }
                                if (!videoService.isValidYouTubeUrl(search)) {
                                    toast.error("Doesn't look like a valid Youtube URL")
                                    return
                                }
                                setLoading(true)
                                setResponse(null as any)

                                const url = search
                                setSearch("")

                                const duration = Math.floor((await videoService.getDuration(url)).duration)

                                if (user.coins < duration) {
                                    toast.warn("You haven't enough coins for this video. 😢 (" + duration + " coins)")
                                    setLoading(false)
                                    return
                                }
                                const toastId = toast.info("This redaction is estimated to take " + Math.floor(duration * Number(process.env.REACT_APP_SUMMARY_RATIO)) + " seconds.", {
                                    hideProgressBar: false,
                                    position: "bottom-center",
                                    pauseOnFocusLoss: false,
                                    pauseOnHover: false,
                                    autoClose: duration * Number(process.env.REACT_APP_SUMMARY_RATIO) * 1000
                                })

                                const summaryJson = await videoService.getSummary(url)
                                const coins = await userService.getCoins()

                                setUser({ ...user, coins })

                                toast.dismiss(toastId)
                                setLoading(false)
                                setResponse(summaryJson)
                            } catch (err) {
                                setLoading(false)
                                toast.dismiss()
                            }
                        }} className="w-12 text-gray-400 py-2 pr-1 border-y-0 border-r-0 border-l-gray-400 border-2">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </header >
            <ToastContainer
                position="top-center"
                autoClose={4400} // Set the time (in milliseconds) that the toast should be shown
                hideProgressBar={true}
                closeOnClick
                pauseOnHover
                draggable
                pauseOnFocusLoss
            />
        </>
    )
}

export default Header