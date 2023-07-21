import { Link } from 'react-router-dom'
import "./VideoCard.css"

type Props = {
    video: {
        title: string,
        duration: number,
        thumbnail: string,
        id: string,
        creator: {
            id: string,
            avatar: string
        }
    }
}

function VideoCard({ video }: Props) {
    const formatDuration = (seconds: number) => {
        const minutes = Math.floor(seconds / 60)
        const secondsFormat = (seconds % 60).toString().length == 1 ? "0" + (seconds % 60) : (seconds % 60)
        return minutes + ":" + secondsFormat
    }
    return (
        <article className="video-card rounded-lg overflow-hidden flex flex-col w-72">
            <Link to={`/video/${video.id}`}>
                <div className="thumbnail relative">
                    <img className="w-full h-full object-cover" src={video.thumbnail} alt="" />
                    <span className="absolute">{formatDuration(video.duration)}</span>
                </div>
                <div className="details p-3">
                    <Link to={`/user/${video.creator.id}`}>
                        <img className="w-12 h-12 rounded-full object-cover" src={video.creator.avatar} alt="" />
                    </Link>
                    <h3 className="ml-3 font-semibold">{video.title}</h3>
                </div>
            </Link>
        </article>
    )
}

export default VideoCard