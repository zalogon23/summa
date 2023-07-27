import React, { useEffect, useState } from 'react'
import Scaffold from '../components/Scaffold'
import Header from '../components/Header'
import "./Summary.css"

type Props = {}

function HomeScreen({ }: Props) {
    const [summary, setSummary] = useState("")

    return (
        <Scaffold>
            <Header setSummary={setSummary} />
            {summary && <section className="summary" dangerouslySetInnerHTML={{ __html: summary }} />}
        </Scaffold>
    )
}

export default HomeScreen