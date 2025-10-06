// import React, { Suspense, useEffect, useState } from 'react';
import { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    // const [allBooks,setAllBooks]=useState([])

    // useEffect(()=>{
    //     fetch("Data.json")
    //     .then((res)=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setAllBooks(data)   
    //     })
    // },[])  

    // const booksPromise = fetch("Data.json")
    // .then((res)=>res.json())
   

    return (
        <div>
            
        <Suspense fallback={<span>looding........</span>}>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 overflow-x-hidden'>
             {
            data.map((singleBook)=><Book singleBook={singleBook} key={singleBook.bookId}></Book>)
          }
         </div>

        </Suspense>
        </div>
    );
};

export default Books;
