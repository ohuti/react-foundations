import LikeButton from "./like-button.js"

function Header({ title }) {
  return (<h1>{ title ? title : 'Develop. Preview. Ship.'}</h1>)
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']

  return <div>
    <Header />
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
    <LikeButton />
  </div>
}
