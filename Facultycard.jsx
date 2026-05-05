import FacultyDetails from "./FacultyDetails";
import KECCard from "./KECCards";
import "./Facultycard.css";

export default function Facultycard() {
  return (
    <div className="faculty-container">
      {FacultyDetails.map((faculty, index) => (
        <KECCard
          key={index}
          name={faculty.name}
          designation={faculty.designation}
          image={faculty.image}
        />
      ))}
    </div>
  );
}