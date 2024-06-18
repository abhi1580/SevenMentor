import React, { useState } from "react";
//react hook to keep track of component state
const ProfileForm = () => {
  const [profile, setProfile] = useState({
    fullName: "",
    age: "",
    gender: "",
    hobbies: [],
    contactNo: "",
    emailAddress: "",
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
    <div className="container w-50 border border-primary round p-2 text-bg-secondary">
      {!isSubmitted && (
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullname" className="form-label">
                Full Name:
              </label>
              <input
                className="form-control border border-dark"
                id="i1"
                value={profile.fullName}
                onChange={handleFullNameChange}
                required
              />
            </div>
            <div>
              <label htmlFor="age" className="form-label">
                Age:
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
            <div>
              <label htmlFor="gender" className="form-label">
                Gender:
              </label>
              <div className="form-check">
                <input
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
                  onClick={() => {
                    profile.gender = "Female";
                  }}
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Hobbies</label>
              <div className="form-check">
                <input
                  className="form-check-label"
                  type="checkbox"
                  id="hb1"
                  name="hobbies"
                  value="singing"
                  checked={profile.hobbies.includes("singing")}
                  onChange={handleHobbiesChange}
                />
                <label className="form-label" htmlFor="hb1">
                  Singing
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-label"
                  type="checkbox"
                  id="hb2"
                  name="hobbies"
                  value="dancing"
                  checked={profile.hobbies.includes("dancing")}
                  onChange={handleHobbiesChange}
                />
                <label className="form-label" htmlFor="hb2">
                  Singing
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-label"
                  type="checkbox"
                  id="hb3"
                  name="hobbies"
                  value="travelling"
                  checked={profile.hobbies.includes("travelling")}
                  onChange={handleHobbiesChange}
                />
                <label className="form-label" htmlFor="hb3">
                  Travelling
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="form-label">Contact No:</label>
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
              <label htmlFor="eml">Email Address:</label>
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
            <div className=" mt-3">
              <button className="btn btn-outline-primary m-3" type="submit">
                Save
              </button>
              <button
                className="btn btn-outline-danger m-3"
                type="reset"
                onClick={() => {
                  setProfile({
                    fullName: "",
                    age: "",
                    contactNo: "",
                    emailAddress: "",
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
          <p>Full Name: {profile.fullName}</p>
          <p>Age: {profile.age}</p>
          <p>Gender: {profile.gender}</p>
          <h2>Hobbies :</h2>
          <ul>
            {profile.hobbies.map((hobby) => {
              return <li key={hobby}>{hobby}</li>;
            })}
          </ul>
          <h2>Contact No : {profile.contactNo}</h2>
          <h2>Email Address : {profile.emailAddress}</h2>

          <button
            className="btn btn-outline-primary m-3"
            onClick={() => {
              setIsSubmitted(false);
              setProfile({
                fullName: "",
                age: "",
                contactNo: "",
                emailAddress: "",
                hobbies: [],
              });
            }}
          >
            back to form
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileForm;
