function Home({ name, city, color }) {
    return (
      <div id="home" style={{ color }}>
        <h1>
          {name} is a Web Developer from {city}
        </h1>
      </div>
    );
  }

  export default Home;