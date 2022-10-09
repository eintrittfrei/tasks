import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Navigation from '../Navigation'

const Show = () => {
const [task, setTask] = useState({})
// const [category, setCategory] = useState({})
const [owner, setOwner] = useState({})
const [comments, setComments] = useState([])
const { id } = useParams()


  useEffect(() => {
      const getData = async () => {
        const { data } = await axios.get(`/api/tasks/${id}`)
        setTask(data)
        // setCategory(data.category)
        setOwner(data.owner)
        setComments(data.comments)
      }  
    getData()
  }, [id])

  return (
    <>
    <Navigation />
      <div className='container px-4 py-4 mx-auto my-5 bg-slate-200 '>
        <div className='flex flex-col  mx-auto sm: w-10/12'>
          <div>{task.task}</div>
          <hr />
          <div>Created by: {owner.username}</div>
          <div>CreatedAt: {task.createdAt}</div>
          <hr />
          <div>UpdatedAt: {task.updatedAt}</div>
        </div>
    </div>
    <div className='container px-4 py-4 mx-auto my-5 bg-slate-200 '>
            <div className='flex flex-col  mx-auto sm: w-10/12'>
            {comments.length > 0 ? 
            comments.map(comment => {
              return (
                <div key={comment._id}>
                  <div>{comment.text}</div>
                  <div>Created by {comment.owner.username} at {comment.createdAt}</div>
                  <div>{comment.updatedAt}</div>
                  <hr/>
                </div>
              )
            } )
          :
          <div className='font-bold px-3 py-2 text-slate-700 rounded-lg'>No comments yet</div>
          }
            </div>
          </div>   
    </>
  )
}

export default Show