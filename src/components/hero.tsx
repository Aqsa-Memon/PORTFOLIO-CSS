'use client';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return(
    <section className="hero-section">
      <div className="hero-content">
      <h1 className="hero-title">
  Hello, {`I'm`} <span className="hero-name">UROOJ MEMON</span>
</h1>
<div className="hero-subtitle">
  <Typewriter
    options={{
      strings: ['Web Developer', 'UI/UX Designer', 'Front-End Developer'],
      autoStart: true,
      loop: true,
    }}
  />
</div>

        <p className="hero-subtitle">Passionate about blending creativity with functionality, I transform ideas into immersive digital experiences. With a focus on intuitive design and seamless interaction, I create websites that {`don’t`} just look good—they feel right.</p>
        <button className="hero-button">Explore More</button>
      </div>
      <div className="particles"></div>
    </section>
    
  )
}
  export default Hero;
  
  