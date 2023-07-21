import React from 'react'
import VideoCard from './VideoCard'

type Props = {
    title: string
}

function Shelf({ title }: Props) {
    const videos = [
        {
            title: "Como jugar a las cartas siendo ciego? Como jugar a las cartas siendo ciego?Como jugar a las cartas siendo ciego? Como jugar a las cartas siendo ciego?",
            duration: 63,
            thumbnail: "https://i.ytimg.com/vi/utX0yRJHiZ8/maxresdefault.jpg",
            id: "2f424f34f3r5f",
            creator: {
                id: "dfsdfsdfsdfsdfsd",
                avatar: "https://m.media-amazon.com/images/M/MV5BMTkzMDExOTIyOV5BMl5BanBnXkFtZTYwNTQ2MDM0._V1_FMjpg_UX1000_.jpg"
            }
        },
        {
            title: "Como jugar a las cartas siendo ciego? Como jugar a las cartas siendo ciego?Como jugar a las cartas siendo ciego? Como jugar a las cartas siendo ciego?",
            duration: 63,
            thumbnail: "https://i.ytimg.com/vi/utX0yRJHiZ8/maxresdefault.jpg",
            id: "2f424f34f3r5f",
            creator: {
                id: "dfsdfsdfsdfsdfsd",
                avatar: "https://m.media-amazon.com/images/M/MV5BMTkzMDExOTIyOV5BMl5BanBnXkFtZTYwNTQ2MDM0._V1_FMjpg_UX1000_.jpg"
            }
        },
        {
            title: "Como jugar a las cartas siendo ciego? Como jugar a las cartas siendo ciego?Como jugar a las cartas siendo ciego? Como jugar a las cartas siendo ciego?",
            duration: 63,
            thumbnail: "https://i.ytimg.com/vi/utX0yRJHiZ8/maxresdefault.jpg",
            id: "2f424f34f3r5f",
            creator: {
                id: "dfsdfsdfsdfsdfsd",
                avatar: "https://m.media-amazon.com/images/M/MV5BMTkzMDExOTIyOV5BMl5BanBnXkFtZTYwNTQ2MDM0._V1_FMjpg_UX1000_.jpg"
            }
        },
        {
            title: "Como jugar a las cartas siendo ciego? Como jugar a las cartas siendo ciego?Como jugar a las cartas siendo ciego? Como jugar a las cartas siendo ciego?",
            duration: 63,
            thumbnail: "https://i.ytimg.com/vi/utX0yRJHiZ8/maxresdefault.jpg",
            id: "2f424f34f3r5f",
            creator: {
                id: "dfsdfsdfsdfsdfsd",
                avatar: "https://m.media-amazon.com/images/M/MV5BMTkzMDExOTIyOV5BMl5BanBnXkFtZTYwNTQ2MDM0._V1_FMjpg_UX1000_.jpg"
            }
        }, {
            title: "Como jugar a las cartas siendo ciego? Como jugar a las cartas siendo ciego?Como jugar a las cartas siendo ciego? Como jugar a las cartas siendo ciego?",
            duration: 63,
            thumbnail: "https://i.ytimg.com/vi/utX0yRJHiZ8/maxresdefault.jpg",
            id: "2f424f34f3r5f",
            creator: {
                id: "dfsdfsdfsdfsdfsd",
                avatar: "https://m.media-amazon.com/images/M/MV5BMTkzMDExOTIyOV5BMl5BanBnXkFtZTYwNTQ2MDM0._V1_FMjpg_UX1000_.jpg"
            }
        }
    ]
    const groupSize = 3;
    const rows = Array.from({ length: Math.ceil(videos.length / groupSize) }, (_, index) =>
        videos.slice(index * groupSize, index * groupSize + groupSize)
    );
    return (
        <section>
            <h2 className="text-xl">{title}</h2>
            <div className="videos flex flex-col gap-8 pt-8 pb-12">
                {
                    rows.map(row => (
                        <div className="row flex flex-rows gap-5 justify-start">
                            {row.map(video => (<VideoCard video={video} />))}
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Shelf