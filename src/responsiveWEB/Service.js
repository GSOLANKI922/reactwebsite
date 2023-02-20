import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'


const Service = () => {
  const [data, setData] = useState([])
  const { search } = useSelector((state) => state);
  console.log(search, 'asdad')
  useEffect(() => {
    (async () => {
      const res = await fetch("https://api.unsplash.com/photos/?client_id=pbP8hUYZS1nv5m6e09I0Jg17NC0WSb5AKq4fZa-C-KU")
      const newData = await res.json()
      setData(newData);
    })()
  }, [])

  const getFilteredData = (data) => {
    if (!search?.search) {
      return data;
    }
    return data.filter((d) => {
      return d.user.username.includes(search.search);
    });
  }
  return (
    <>
      <div className="container">
        <div>
          <h1>Our Services</h1>
        </div>
        <div className='row ' >
          {
            getFilteredData(data).map((d, i) => {
              return (
                <Card web={d.urls.small} title={d.user.username} proImg={d.user.profile_image.medium} bio={d.alt_description} key={i} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Service