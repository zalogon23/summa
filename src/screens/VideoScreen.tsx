import Scaffold from '../components/Scaffold'
import Header from '../components/Header'
import MediaPlayer from '../components/MediaPlayer'
import MediaDescription from '../components/MediaDescription'
import { useLoaderData } from 'react-router-dom'
import { useState } from 'react'

type Loader = {
    videoId: string
}

function VideoScreen() {
    const { videoId } = useLoaderData() as Loader
    const [response, setResponse] = useState(null as any)

    return (
        <>
            <Header setLoading={() => { }} loading={false} setResponse={setResponse} />
            <Scaffold>
                <MediaPlayer />
                <MediaDescription />
            </Scaffold>
        </>
    )
}

export default VideoScreen