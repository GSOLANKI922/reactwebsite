import React from 'react'
import Common from './Common'

const About = () => {
  const web = "https://www.mathworks.com/matlabcentral/mlc-downloads/downloads/submissions/21944/versions/3/screenshot.gif"
  const CName = "Welcome to About Page"
  const Name = "GautamSolanki"
  const btn = "Contact Now"
  const path = "/contact"
  const tag = 'We are the team of talented devloper making website'
  return (
    <div>
      <Common tag={tag} path={path} web={web} CName={CName} Name={Name} btn={btn} />
    </div>
  )
}

export default About