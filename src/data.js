import restaurant from "./Images/restaurant.png"
import flashcard from "./Images/flashcard.png"
import godsLeague from "./Images/godsLeague.png"
import sixP from "./Images/sixP.png"

export const bootcampProjects = [
  {
    id: 1,
    title: "Flashcard-o-matic",
    img: { flashcard: flashcard },
    url: "https://github.com/walethesolution/Flashcard-App",
    desc: "This is a complex web application that uses data from an external API and keeps the URL in sync with what is displayed on the screen. I was tasked to manage the state of the React application, define the routes and URLs, and use state effectively over multiple components during bootcamp.",
  },
  {
    id: 2,

    title: "YKY restaurant",
    img: { restaurant: restaurant },
    url: "https://github.com/walethesolution/restaurant-project",
    desc: "This is the final capstone for my bootcamp. This full-stack application was built using React on the client and Node.js and Express for the API, and PostgreSQL for your database.",
  },
]

export const ideaProjects = [
  {
    id: 1,
    title: "Coming soon",
    img: { godsLeague: godsLeague },
    desc: "This is the web application for the upcoming godsLeague, date TBA.",
  },
  {
    id: 2,
    title: "Coming soon",
    img: { sixP: sixP },
    desc: "This is the future! date TBD.",
  },
]
