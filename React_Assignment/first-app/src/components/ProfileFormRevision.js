import React, { useState } from "react";
//react hook to keep track of component state
const ProfileFormRevision = () => {
  const [profile, setProfile] = useState({
    fullName: "",
    age: "",
    gender: "",
    hobbies: [],
    contactNo: "",
    emailAddress: "",
    qualification: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  //Event handler for full name change event
  const handleFullNameChange = (e) => {
    setProfile({ ...profile, fullName: e.target.value });
  };
  //Event handler for age change event

  const handleAgeChange = (e) => {
    setProfile({ ...profile, age: e.target.value });
  };

  //event handler for form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
    setIsSubmitted(true);
  };
  //event handler to handle hobbies
  const handleHobbiesChange = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      setProfile({ ...profile, hobbies: [...profile.hobbies, value] });
    } else {
      setProfile({
        ...profile,
        hobbies: profile.hobbies.filter((item) => item !== value),
      });
    }
  };
  return (
    <div className="container mt-5 w-50 border border-primary round p-3 text-bg-secondary">
      {!isSubmitted && (
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="fullname" className="form-label">
                Full Name :
              </label>
              <input
                className="form-control border border-dark"
                id="i1"
                value={profile.fullName}
                onChange={handleFullNameChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Age :
              </label>
              <input
                className="form-control border border-dark"
                id="i2"
                type="number"
                min={12}
                max={50}
                value={profile.age}
                onChange={handleAgeChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Gender :
              </label>
              <div className="form-check">
                <input
                  required
                  className="form-check-input"
                  id="g1"
                  type="radio"
                  name="gender"
                  value="Male"
                  onClick={() => {
                    profile.gender = "Male";
                  }}
                />
                <label htmlFor="g1">Male</label>
              </div>
              <div className="form-check">
                <label htmlFor="g2">Female</label>
                <input
                  className="form-check-input"
                  id="g2"
                  type="radio"
                  name="gender"
                  value="Female"
                  required
                  onClick={() => {
                    profile.gender = "Female";
                  }}
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Hobbies :</label>
              <div className="form-check">
                <input
                  className="form-check-label"
                  type="checkbox"
                  id="hb1"
                  name="hobbies"
                  value="Singing"
                  checked={profile.hobbies.includes("Singing")}
                  onChange={handleHobbiesChange}
                />
                <label className="form-label m-2" htmlFor="hb1">
                  Singing
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-label"
                  type="checkbox"
                  id="hb2"
                  name="hobbies"
                  value="Dancing"
                  checked={profile.hobbies.includes("Dancing")}
                  onChange={handleHobbiesChange}
                />
                <label className="form-label m-2" htmlFor="hb2">
                  Dancing
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-label"
                  type="checkbox"
                  id="hb3"
                  name="hobbies"
                  value="Travelling"
                  checked={profile.hobbies.includes("Travelling")}
                  onChange={handleHobbiesChange}
                />
                <label className="form-label m-2" htmlFor="hb3">
                  Travelling
                </label>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="cn">
                  Contact No :
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="cn"
                  required
                  value={profile.contactNo}
                  pattern="[0-9]{10}"
                  onChange={(e) =>
                    setProfile({ ...profile, contactNo: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="eml">
                Email Address :
              </label>
              <input
                className="form-control"
                type="email"
                value={profile.emailAddress}
                onChange={(e) =>
                  setProfile({ ...profile, emailAddress: e.target.value })
                }
                required
                placeholder="abc.xyz@example.com"
              />
            </div>
            <div className="mb-3 ">
              <label className="form-label" htmlFor="qu">
                Educational Qualification :
              </label>
              <select data-live-search="true"
                required
                className="form-select"
                value={profile.qualification}
                onChange={(e) => {
                  setProfile({ ...profile, qualification: e.target.value });
                }}
              >
                <option value="">Select Qualification</option>
                <option value="B.S.C"> B.S.C</option>
                <option value="B.C.A">B.C.A</option>
                <option value="B.COM">B.COM</option>
                <option value="M.S.C">M.S.C</option>
                <option value="M.C.A">M.C.A</option>
                <option value="M.COM">M.COM</option>
              </select>
            </div>
            <div className="mt-3">
              <button className="btn btn-primary m-3" type="submit">
                Save
              </button>
              <button
                className="btn btn-danger m-3"
                type="reset"
                onClick={() => {
                  setProfile({
                    fullName: "",
                    age: "",
                    hobbies: [],
                    contactNo: "",
                    emailAddress: "",
                    qualification: "",
                  });
                }}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      )}
      {isSubmitted && (
        <div className="container">
          <h2>Full Name: {profile.fullName}</h2>
          <h2>Age: {profile.age}</h2>
          <h2>Gender: {profile.gender}</h2>
          <h2>Hobbies :</h2>
          <ul>
            {profile.hobbies.map((hobby) => {
              return <li key={hobby}>{hobby}</li>;
            })}
          </ul>
          <h2>Contact No : {profile.contactNo}</h2>
          <h2>Email : {profile.emailAddress}</h2>
          <h2>Educational Qualification : {profile.qualification}</h2>
          <button
            className="btn btn-primary m-3"
            onClick={() => {
              setIsSubmitted(false);
              setProfile({
                fullName: "",
                age: "",
                hobbies: [],
                contactNo: "",
                emailAddress: "",
                qualification: "",
              });
            }}
          >
            Back to form
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileFormRevision;
