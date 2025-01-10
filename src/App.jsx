import { useState } from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";
import "./index.css";

function App() {
  const [info, setInfo] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
  });

  const [background, setBackground] = useState([
    {
      title: "",
      institution: "",
      date1: "",
      date2: "",
      id: crypto.randomUUID(),
    },
  ]);

  const [experience, setExperience] = useState([
    {
      role: "",
      company: "",
      date1: "",
      date2: "",
      city: "",
      accomplishments: [],
      id: crypto.randomUUID(),
    },
  ]);

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleBackgroundChange = (e, id) => {
    const { name, value } = e.target;
    const newBackground = background.map((background) =>
      background.id === id ? { ...background, [name]: value } : background
    );
    setBackground(newBackground);
  };

  const handleExperienceChange = (e, id) => {
    const { name, value } = e.target;
    const newExperience = experience.map((experience) =>
      experience.id === id
        ? {
            ...experience,
            [name]:
              name === "accomplishments"
                ? value.split("\n").filter((line) => line.trim() !== "") // .filter is to ignore empty lines
                : value,
          }
        : experience
    );
    setExperience(newExperience);
  };

  const handleCloseBtn = (e, id, type) => {
    e.preventDefault();
    if (type === "background") {
      // If the condition item.id !== id is true, the item is included in the new array. If false, the item is excluded.
      setBackground(background.filter((item) => item.id !== id));
    } else if (type === "experience") {
      setExperience(experience.filter((item) => item.id !== id));
    }
  };

  const addNewBackground = () => {
    setBackground([
      ...background,
      {
        title: "",
        institution: "",
        date1: "",
        date2: "",
        id: crypto.randomUUID(),
      },
    ]);
  };

  const addNewExperience = () => {
    setExperience([
      ...experience,
      {
        role: "",
        company: "",
        date1: "",
        date2: "",
        city: "",
        accomplishments: [],
        id: crypto.randomUUID(),
      },
    ]);
  };

  return (
    <>
      <header>
        <div className="header-content">
          <h1>CV App</h1>
        </div>
      </header>
      <main>
        <Form
          info={info}
          background={background}
          experience={experience}
          handleInfoChange={handleInfoChange}
          handleBackgroundChange={handleBackgroundChange}
          handleExperienceChange={handleExperienceChange}
          addNewBackground={addNewBackground}
          addNewExperience={addNewExperience}
          handleCloseBtn={handleCloseBtn}
        />
        <Preview
          info={info}
          background={background}
          experience={experience}
        />
      </main>
      <footer>
        {" "}
        CV App
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/900px-Octicons-mark-github.svg.png?20180806170715"
          alt="Github"
          id="github"
          onClick={() => window.open("https://github.com/HardRoof", "_blank")}
        />
      </footer>
    </>
  );
}

export default App;