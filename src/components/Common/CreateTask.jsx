import React from 'react'

const CreateTask = () => {
    const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-[#1c1c1c] py-5 px-10 mt-7 rounded">
        <form
          onSubmit={submitHandler}
          className="flex flex-wrap w-full items-start justify-between"
        >
          <div className="w-1/2">
            <div>
              <h3 className="text-sm mb-0.5 text-gray-300">Task title</h3>
              <input
                className="text-sm py-1 outline-none px-2 rounded w-4/5 bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Make a UI design"
              />
            </div>
            <div>
              <h3 className="text-sm mb-0.5 text-gray-300">Date</h3>
              <input
                className="text-sm py-1 outline-none px-2 rounded w-4/5 bg-transparent border-[1px] border-gray-400 mb-4"
                type="date"
              />
            </div>
            <div>
              <h3 className="text-sm mb-0.5 text-gray-300">Assign to</h3>
              <input
                className="text-sm py-1 outline-none px-2 rounded w-4/5 bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Employee name"
              />
            </div>
            <div>
              <h3 className="text-sm mb-0.5 text-gray-300">Category</h3>
              <input
                className="text-sm py-1 outline-none px-2 rounded w-4/5 bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Design,development,etc..."
              />
            </div>
          </div>
          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm mb-0.5 text-gray-300">Description</h3>
            <textarea
              className="text-sm py-2 h-44 outline-none px-4 rounded w-full bg-transparent border-[1px] border-gray-400 mb-4"
              name=""
              id=""
              rows="10"
              cols="30"
              placeholder="Detailed description of task (MAX 500 words)"
            />
            <button className="text-sm py-3 bg-emerald-500 hover:bg-emerald-600 outline-none px-5 rounded w-full mt-4">
              Create task
            </button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask