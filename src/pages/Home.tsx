import Benefit from "../components/Benefit"
import Homepage from "../components/Homepage"
import Courselist from "../components/Courselist"
import Testomonial from "../components/Testomonial"
import Team from "../components/Team"
import Newsletter from "../components/Newsletter"
import Recap from "../components/Recap"

const Home = () => {
  return (
      <div>
        <Homepage/>
        <Benefit />
        <Recap />
        <Courselist />
        <Testomonial />
        <Newsletter />
        <Team />
      </div>
  )
   
}

export default Home