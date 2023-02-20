import React from 'react'
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Common from './Common'

const Home = () => {
    const web = "https://ezgif.com/images/format-demo/butterfly.gif"
    const CName = `Grow your business with`
    const Name = "GautamSolanki"
    const btn = "Get Service"
    const path = "/service"
    const tag = 'We are the team of talented devloper making website'
    return (
        <>
            <Common tag={tag} path={path} web={web} CName={CName} Name={Name} btn={btn} />
        </>
    )
}

export default Home