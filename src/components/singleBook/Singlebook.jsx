import React from 'react'

const singleBook = () => {
  return (
    <div
    key={index}
    className="border-2 boreder-green-300 p-[1rem] flex-col justify-center items-center hover:border-green-600">

      <h4 className="text-green-500 font-semibold text-center">{book.title}</h4>
      <div>
        <img src ={book.image} alt="" className="w-full" />
      </div>
    </div>
  )
}

export default singleBook


