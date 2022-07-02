import "./index.scss"

function ProjectList({ id, title, active, setSelected }) {
  return (
    <li
      key={id}
      className={active ? "project-list active" : "project-list"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  )
}

export default ProjectList
