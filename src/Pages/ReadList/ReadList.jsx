import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/AddToDb";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort,setSort]=useState('')
  const data = useLoaderData();
//   console.log(data);

useEffect(() => {
  const storedBookData = getStoredBook();
  const convatedStoredBook = storedBookData.map((id) => parseInt(id));
  const myReadList = data.filter((book) =>
    convatedStoredBook.includes(book.bookId)
  );
  setReadList(myReadList); // ✅ এখানে শুধু IDs না, পুরো book object দিন
}, [data]);


const handelSort = (type) => {
  setSort(type);

  if (type === "pages") {
    const sortedPages = [...readList].sort((a, b) => a.totalPages - b.totalPages);
    setReadList(sortedPages); // sorted list state এ update
  };
  if(type==="rating"){
     const sortedRatings= [...readList].sort((a, b) => a.rating - b.rating);
        setReadList(sortedRatings); 
  }
};


// console.log(readList);
  return (
    
    <div>
        <details className="dropdown">
  <summary className="btn m-1">Sort By:{sort?sort:""}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handelSort("pages")}>pages</a></li>
    <li><a onClick={()=>handelSort("rating")}>Rating</a></li>
  </ul>
</details>


      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book I read {readList.length}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {readList?.map((b) => (
              <Book key={b.bookId} singleBook={b} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
