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
      {/* <p>
        These are some projects i built in bootcamp using React for the
        frontend.
      </p> */}
      <div className="project-container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="home page of flashcard" />
            <h3>{d.title}</h3>
          </div>
          // <div className="item">
          //   <img src={restaurant} alt="home page of restaurant site" />
          //   <h3>Periodic Tables</h3>
          // </div>
        ))}
      </div>
    </div>
  )
}

export default Project
