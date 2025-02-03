import Button from "./components/Button";
import { useState, useEffect } from "react";
import ListItem from "./ListItem";

const DisplayPage = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [activeIndex, setActiveIndex] = useState(null);
  const [reqType, setReqType] = useState("comments");
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}${reqType}`);

        if (!res.ok) {
          throw new Error("Error loading data");
        }
        const data = await res.json();
        console.log(data);
        setJsonData(data);
      } catch (err) {
        console.log(err.message);
      } finally {
      }
    };

    fetchData();
  }, [reqType]);

  return (
    <section className="flex flex-col padding-desktop max-lg:padding-tablet max-sm:padding-phone p-4">
      <div
        className="flex w-full space-x-1 justify-between mb-4"
        aria-label="buttons' wrapper"
      >
        {["Users", "Posts", "Comments"].map((text, index) => (
          <Button
            key={index}
            text={text}
            isClicked={activeIndex === index}
            onClick={() => {
              setActiveIndex(index);
              //toggle the type of request
              setReqType(text.toLowerCase());
            }}
            hoverColor="hover:bg-blue-200"
          />
        ))}
      </div>
      {jsonData.map((obj) => (
        /*   <li className="mb-5" key={obj.id}>
          {JSON.stringify(obj)}
        </li> */
        <ListItem obj={obj} />
      ))}
      <div>{/* render the list item here */}</div>
    </section>
  );
};

export default DisplayPage;
