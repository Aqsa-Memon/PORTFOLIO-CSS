import Image from 'next/image';

const About = () => {
  return(
  <section className="about-section">
    <div className="about-container">
      <div className="about-image-container">
        <Image src="/images.png" width={300} height={300} alt="my pic" className="about-image" />
      </div>
      <div className="about-text">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
        {`I’m`} a creator at heart, blending artistry with purpose to craft digital experiences that leave a lasting impression. With every project, I strive to create seamless journeys that captivate users and bring ideas to life in fresh, meaningful ways. Whether through innovative design or clean, responsive code,  {`I’m`} driven by a passion to elevate brands and connect with audiences on a deeper level. {`Let’s `}build something extraordinary together.
        </p>
        <button className="about-button">Learn More</button>
      </div> 
    </div>
  </section>
)
}
export default About
