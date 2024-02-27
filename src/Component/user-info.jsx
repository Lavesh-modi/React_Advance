import { useCurrentUser } from "./custom-hook/current-user.hook";
import { useResourceUser } from "./custom-hook/resource-hook";

export const UserInfo = () => {
  const user = useResourceUser("users/3");
  const { name, age, country, books } = user || {};
  return user ? (
    <>
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book}> {book} </li>
        ))}
      </ul>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};
