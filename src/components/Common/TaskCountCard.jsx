import React from 'react'

const TaskCountCard = ({bgColor,noOfTasks,Status}) => {
  return (
    <div className={`${bgColor} px-9 w-[45%] py-6 rounded-xl`} >
        <h2 className='text-3xl font-semibold'>{noOfTasks}</h2>
        <h3 className='text-xl font-medium'>{Status}</h3>
    </div>
  )
}

export default TaskCountCard