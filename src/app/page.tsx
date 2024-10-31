import About from "@/app/about/page";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import Contact from "./contact/page";


export default function Home() {
  return (
    <div>
      <Header />
  
      <Hero />
      <br /> 
      <About />
      <br />
      <Contact />
      <br />
      <Footer />
    </div>
  )
}
