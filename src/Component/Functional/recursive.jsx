const isObject = (data) => typeof data === "object" && data !== null;

export const Recursive = ({ data }) => {
  if (!isObject(data)) {
    return <li>{data}</li>;
  }

  const pairs = Object.entries(data);
  console.log(pairs, "pairs convert into array");
  return (
    <>
      {pairs.map(([key, value]) => {
        return (
          <li>
            {key}:
            <ul>
              <Recursive data={value} />
            </ul>
          </li>
        );
      })}
    </>
  );
};
