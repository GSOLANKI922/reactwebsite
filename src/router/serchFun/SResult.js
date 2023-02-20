import React, { useState, useEffect } from 'react'

const SResult = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      const res = await fetch("https://api.unsplash.com/photos/?client_id=pbP8hUYZS1nv5m6e09I0Jg17NC0WSb5AKq4fZa-C-KU")
      const curData = await res.json()
      setData(curData)
      console.log(curData);
    })();
  }, [])

  return (
    <div>

      {
        data.map((c) => {
          return (
            <>
              <img src={c.user.profile_image.small} alt="search" />
              <h1>{c.alt_description}</h1>
            </>
          )
        })
      }
      {/* ><h1>{data}</h1 */}
    </div>
  )
}

export default SResult