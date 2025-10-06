// Utility/AddToDb.js
const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("readList");
  if (storedBookSTR) {
    return JSON.parse(storedBookSTR);
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedBookData = getStoredBook();

  if (storedBookData.includes(id)) {
    return
  } else {
    storedBookData.push(id);
    localStorage.setItem("readList", JSON.stringify(storedBookData)); // save হচ্ছে
    console.log("Updated read list:", storedBookData);
  }
};

export { addToStoredDB,getStoredBook };
