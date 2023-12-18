import Hero from "../sections/Hero"
import StoriesByGenre from "../sections/StoriesByGenre"
import TopPicks from "../sections/TopPicks"

const Home = () => {
  return (
    <div>
        <Hero/>
        <hr />
        <TopPicks/>
        <hr />
        <StoriesByGenre/>
        <hr />
    </div>
  )
}

export default Home