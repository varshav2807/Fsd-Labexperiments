import "./KECCards.css";

export default function KECCard({ name, designation, image }) {
  return (
    <div className="faculty-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{designation}</p>
    </div>
  );
}