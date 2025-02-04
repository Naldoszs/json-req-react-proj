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
        aria-label="header & topic wrapper"
        className="flex flex-col w-full h-auto sticky top-2 z-[1000px] backdrop-blur-lg"
      >
        <h3 className="flex- w-full justify-center items-center bg-black text-black bg-opacity-15 text-center text-3xl mb-6 font-bold rounded-sm">
          JSON TYPICODE FETCH PROJECT
        </h3>
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
      </div>
      <div className="flex flex-col space-y-2 w-full h-auto overflow-hidden">
        {jsonData.map((obj) => (
          <ListItem obj={obj} />
        ))}
      </div>
    </section>
  );
};

export default DisplayPage;
