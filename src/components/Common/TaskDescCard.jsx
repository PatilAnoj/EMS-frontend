import React from 'react'

const TaskDescCard = () => {
  return (
    <div className='flex-shrink-0 w-[300px] p-10 bg-slate-600 h-full rounded-xl'>
        <div className='flex items-center justify-between'>
            <h3 className='text-sm font-medium bg-red-400 px-2 py-1 rounded-md'>High</h3>
            <p>17 Sep 25</p>
        </div>
        <div className='mt-3'>
            <h2 className='text-xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm font-light mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum asperiores nostrum obcaecati inventore ut, tempora odio est facilis enim beatae impedit! Perspiciatis dolor blanditiis doloremque? Cum nemo exercitationem accusamus dignissimos.</p>
        </div>
    </div>
  )
}

export default TaskDescCard