import React, { useEffect, useState } from 'react'
import Scaffold from '../components/Scaffold'
import Header from '../components/Header'
import "./HomeScreen.css"
import { PacmanLoader } from 'react-spinners'

type Props = {}

function HomeScreen({ }: Props) {
    const [response, setResponse] = useState(null as any)
    const [loading, setLoading] = useState(false)

    return (
        <>
            <Header {...{ setLoading, setResponse, loading }} />
            <Scaffold>
                {loading
                    &&
                    <section className="loading-section">
                        <PacmanLoader />
                        <span
                            className="pt-4 text-lg font-semibold"
                        >College graduates are summarizing this video. We are hurrying them up!</span>
                    </section>
                }
                {
                    !loading && !response &&
                    <section className="summary">
                        <h2 className="text-3xl mb-4">Summarize media content to consume faster 🍗</h2>
                        <ul>
                            <li>Write a Youtube video URL</li>
                            <li>Click Search</li>
                            <li>Enjoy your summary!</li>
                        </ul>

                        <img
                            className="w-full mb-8 rounded-lg"
                            src="https://res.cloudinary.com/binaring/image/upload/v1690510237/How-to-Summarize-Information-and-Present-it-Visually_aucjks.jpg" alt="" />

                        <p className="text-3xl mb-4">Get 30+ minutes content in a couple minutes ⚡</p>
                    </section>

                }
                {response && <section className="summary">
                    {response.image
                        &&
                        <img
                            className="w-full mb-8 rounded-lg"
                            src={response.image} alt="" />}
                    <div dangerouslySetInnerHTML={{ __html: response.result }} />
                </section>
                }
            </Scaffold>
        </>
    )
}

export default HomeScreen