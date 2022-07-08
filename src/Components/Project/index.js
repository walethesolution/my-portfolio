import "./index.scss"
import { useEffect, useState } from "react"
// import flashcard from "../../Images/flashcard.png"
// import restaurant from "../../Images/restaurant.png"
import AnimatedLetters from "../AnimatedLetters"
import ProjectList from "../ProjectList"
import { bootcampProjects, ideaProjects } from "../../data"

function Project() {
  const [lettersClass, setLettersClass] = useState("text-animation")
  const [selected, setSelected] = useState("bootcamp")
  const [data, setData] = useState([])
  const projectArray = ["P", "r", "o", "j", "e", "c", "t", "s"]

  const list = [
    {
      id: "bootcamp",
      title: "Bootcamp",
    },
    {
      id: "idea",
      title: "Idea",
    },
  ]

  useEffect(() => {
    switch (selected) {
      case "bootcamp":
        setData(bootcampProjects)
        break
      case "idea":
        setData(ideaProjects)
        break
      default:
        setData(bootcampProjects)
    }
  }, [selected])

  return (
    <div className="container">
      <h1>
        <AnimatedLetters
          lettersClass={lettersClass}
          stringArray={projectArray}
          index={15}
        />
      </h1>

      <ul>
        {list.map((item) => (
          <ProjectList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>

      <div className="project-container">
        {data.map((d) => (
          <div className="item">
            <img
              src={
                d.id === 1
                  ? d.img["flashcard"] || d.img["godsLeague"]
                  : d.img["restaurant"] || d.img["sixP"]
              }
              alt="home page of app"
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
