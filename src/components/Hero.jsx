import Reveal from "./Reveal";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center"
    >
      <Reveal>
        <h1 className="text-5xl md:text-6xl font-bold text-indigo-400">
          Hi, I’m Dharmendra Dhital
        </h1>
      </Reveal>

      <Reveal delay={0.3}>
        <p className="text-gray-400 mt-4 max-w-2xl text-lg">
          A Full-Stack Developer passionate about creating modern web
          experiences.
        </p>
      </Reveal>
    </section>
  );
};

export default Hero;
