import "./index.scss"

function AnimatedLetters({ lettersClass, stringArray, index }) {
  return (
    <span>
      {stringArray.map((char, i) => (
        <span key={char + i} className={`${lettersClass} _${i + index}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
