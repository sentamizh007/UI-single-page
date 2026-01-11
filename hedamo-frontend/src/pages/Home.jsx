import Card from "../components/Card";

function Home() {
  const items = [
    { id: 1, title: "Simple UI", description: "Clean and easy user interface." },
    { id: 2, title: "React Basics", description: "Built using basic React concepts." },
    { id: 3, title: "Beginner Friendly", description: "Perfect for freshers." }
  ];

  return (
    <div className="container">
      <h1>Welcome to Sentamizh</h1>
      <p>This is a simple frontend assignment using React.js.</p>

      <div className="card-container">
        {items.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
