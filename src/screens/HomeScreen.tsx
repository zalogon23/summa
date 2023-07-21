import React from 'react'
import Scaffold from '../components/Scaffold'
import Header from '../components/Header'
import Shelf from '../components/Shelf'

type Props = {}

function HomeScreen({ }: Props) {
    return (
        <Scaffold shelf>
            <Header />
            <Shelf title="Recent Content" />
        </Scaffold>
    )
}

export default HomeScreen