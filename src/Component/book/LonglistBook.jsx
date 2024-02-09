const LargeListBook = ({ books }) => {
    const { name, pages, title, price } = books;
    return (
      <>
        <h2>Name : {name}</h2>
        <p>Title: {title}</p>
        <p>Pages in the total : {pages}</p>
        <div className="book-price">Price: ${price}</div>
      </>
    );
  };
  
  export default LargeListBook;
  