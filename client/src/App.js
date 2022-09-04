import React, { useEffect } from 'react'
import axios from 'axios'


const taskIndex = () => {

  useEffect(() => {
    const getData = async () => {
      try {

        const res = await axios.get('/api/tasks')
        console.log('res', res)

      } catch (err) {
        console.log(err)
      }
    }
    getData()
  })
  



  return (
    <h1>Hello Task App</h1>
  )
}

export default taskIndex
