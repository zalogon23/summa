import Scaffold from '../components/Scaffold'
import Header from '../components/Header'
import MediaPlayer from '../components/MediaPlayer'
import MediaDescription from '../components/MediaDescription'
import { useLoaderData } from 'react-router-dom'

type Loader = {
    videoId: string
}

function VideoScreen() {
    const { videoId } = useLoaderData() as Loader
    return (
        <Scaffold>
            <Header />
            <MediaPlayer />
            <MediaDescription />
        </Scaffold>
    )
}

export default VideoScreen