import "./index.scss"
import { useEffect, useState } from "react"
import AnimatedLetters from "../AnimatedLetters"
import ProjectList from "../ProjectList"
import { bootcampProjects, ideaProjects } from "../../data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

function Project() {
  const lettersClass = "text-animation"

  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])
  const projectArray = ["P", "r", "o", "j", "e", "c", "t", "s"]

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "idea",
      title: "Idea",
    },
  ]

  useEffect(() => {
    switch (selected) {
      case "featured":
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
          <div className="project-items">
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
              <h4>{d.desc}</h4>
            </div>
            <button className="btn" onClick={() => window.open(d.url)}>
              <FontAwesomeIcon icon={faGithub} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
