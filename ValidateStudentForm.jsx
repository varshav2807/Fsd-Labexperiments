import { useState } from "react";
import "./ValidateStudentForm.css";

function ValidateStudentForm() {
  const [fullname, setName] = useState('');
  const [rollno, setRollno] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [date, setDate] = useState('');
  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');
  const [cgpa, setCgpa] = useState('');
  const [address, setAddress] = useState('');
  const [formdata, setFormdata] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const x = {
      fullname,
      rollno,
      email,
      phoneno,
      date,
      department,
      year,
      cgpa,
      address,
    };

    setFormdata(x);
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" value={fullname} onChange={(e) => setName(e.target.value)} required />
        <br />

        <label>Registration number: </label>
        <input type="text" value={rollno} onChange={(e) => setRollno(e.target.value)} required />
        <br />

        <label>Email ID: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <br />

        <label>Phone Number: </label>
        <input type="tel" value={phoneno} onChange={(e) => setPhoneno(e.target.value)} required />
        <br />

        <label>Date Of Birth: </label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <br />

        <label>Select Department: </label>
        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option value="">Select Department</option>
          <option value="CSE">CSE</option>
          <option value="IT">IT</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
          <option value="MECH">MECH</option>
        </select>
        <br />

        <label>Year of Study:</label>
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">Select Year</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>
        <br />

        <label>CGPA:</label>
        <input type="number" step="0.01" min="0" max="10"
          value={cgpa}
          onChange={(e) => setCgpa(e.target.value)}
        />
        <br />

        <label>Address:</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          rows="3"
        />
        <br />

        <button type="submit">Register</button>
      </form>

      {formdata && (
        <div>
          <h3>{formdata.fullname}</h3>
          <h3>{formdata.rollno}</h3>
          <h3>{formdata.email}</h3>
          <h3>{formdata.phoneno}</h3>
          <h3>{formdata.date}</h3>
          <h3>{formdata.department}</h3>
          <h3>{formdata.year}</h3>
          <h3>{formdata.cgpa}</h3>
          <h3>{formdata.address}</h3>
        </div>
      )}
    </div>
  );
}

export default ValidateStudentForm;
