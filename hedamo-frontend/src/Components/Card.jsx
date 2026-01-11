function Card({ title, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>View More</button>
    </div>
  );
}

export default Card;
