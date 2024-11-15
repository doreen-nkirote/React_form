import React from 'react'
import { booksModel } from '../models/BooksModel'
const Books = () => {
  const cartItems=[]
  const numberOfCartItems=cartItems.length;
    console.log(booksModel);
    
  return (
    <div className="p-[2rem]">
      <div className="text-center"></div>
      <p>CART ITEMS{""} {numberOfCartItems}</p>
      <p>Total charge:sh. 1200</p>
      <div className="grid grid-cols-1sm:grid-cols-3 gap-10lg:grid-cols-5">

      {bookModel.map((book, index)=>(
        <div key={index} className="borde-2 border-neutral-300 p-[1rem]">

          <h4>{book.title}</h4>
          <div>
            <img src={book.img} alt="" className="w-full"/>
            </div>
            <p>{book.description}</p>
            <p>{book.price}</p>
            <button className="px-[2.5rem] py-[0.3 rem] bg-green-500 text-white border border-green-500 hover:bg-transparent hover:text-green-500 text-sm">ADD TO CART</button>
            </div>

      ))}
    </div>
    </div>
  );
};

export default Books;
