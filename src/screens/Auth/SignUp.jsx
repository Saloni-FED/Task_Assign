import React, { useState } from "react";
import "./Auth.css";
import vector from "../../assets/Vector.svg";

function SignUp() {
  const [NGOName, setNGOName] = useState("");
  const [founderName, setFounderName] = useState("");
  const [NGOType, setNGOType] = useState("");
  const [NGOEmail, setNGOEmail] = useState("");
  const [NGOWebsite, setNGOWebsite] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [addressGoogleMapURL, setAddressGoogleMapURL] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [FCRA, setFCRA] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [eightyGNumber, setEightyGNumber] = useState("");
  const [twelveANumber, setTwelveANumber] = useState("");
  const [totalBeneficiaries, setTotalBeneficiaries] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [accessLevel, setAccessLevel] = useState("");

  const handleSubmit = () => {
    console.log({
      NGOName,
      founderName,
      NGOType,
      NGOEmail,
      NGOWebsite,
      mobileNumber,
      address,
      city,
      addressGoogleMapURL,
      registrationNumber,
      FCRA,
      panNumber,
      eightyGNumber,
      twelveANumber,
      totalBeneficiaries,
      userEmail,
      accessLevel,
    });
  };

  const [users, setUsers] = useState([{ email: "", accessLevel: "",  }]);

  const handleAddUser = () => {
    setUsers([...users, { email: "", accessLevel: "" }]);
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const handleUserChange = (index, key, value) => {
    // key == "email" ? setUserEmail(value) : setAccessLevel(value);
    const updatedUsers = [...users];
    updatedUsers[index][key] = value;
    setUsers(updatedUsers);
  };

  return (
    <form className="login">
      <div className="container sign_page">
        <h3 className="signup_heading">Enter Your NGO details</h3>
        <div className="grid-2-uneven">
          <div className="grid-3-cols">
            <div>
              <p className="Sign_label">
                NGO Name <span>*</span>
              </p>
              <input
                type="text"
                placeholder="Enter your NGO name here.."
                className="Log_Input_sign"
                value={NGOName}
                onChange={(e) => setNGOName(e.target.value)}
                required
              />
            </div>
            <div>
              <p className="Sign_label">
                Founder Name <span>*</span>
              </p>
              <input
                type="text"
                placeholder="Enter name here.."
                className="Log_Input_sign"
                value={founderName}
                onChange={(e) => setFounderName(e.target.value)}
                required
              />
            </div>
            <div>
              <p className="Sign_label">
                NGO Type <span>*</span>
              </p>
              <input
                type="text"
                placeholder="Enter type here.."
                className="Log_Input_sign"
                value={NGOType}
                onChange={(e) => setNGOType(e.target.value)}
                required
              />
            </div>
            <div>
              <p className="Sign_label">
                NGO Email <span>*</span>
              </p>
              <input
                type="email"
                placeholder="Enter your email here.."
                className="Log_Input_sign"
                value={NGOEmail}
                onChange={(e) => setNGOEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <p className="Sign_label">
                NGO Website <span>*</span>
              </p>
              <input
                type="url"
                placeholder="Enter URL here.."
                className="Log_Input_sign"
                value={NGOWebsite}
                onChange={(e) => setNGOWebsite(e.target.value)}
                required
              />
            </div>
            <div>
              <p className="Sign_label">
                Mobile Number <span>*</span>
              </p>
              <input
                type="tel"
                placeholder="Enter mobile number here.."
                className="Log_Input_sign"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </div>
            <div>
              <p className="Sign_label">
                Address <span>*</span>
              </p>
              <input
                type="text"
                placeholder="Enter detail here.."
                className="Log_Input_sign"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div>
              <p className="Sign_label">
                City <span>*</span>
              </p>
              <input
                type="text"
                placeholder="Enter your city.."
                className="Log_Input_sign"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div>
              <p className="Sign_label">Address Google Map URL</p>
              <input
                type="url"
                placeholder="Paste URL"
                className="Log_Input_sign"
                value={addressGoogleMapURL}
                onChange={(e) => setAddressGoogleMapURL(e.target.value)}
              />
            </div>
            <div>
              <p className="Sign_label">
                Registration Number <span>*</span>
              </p>
              <input
                type="text"
                placeholder="Enter registration number here.."
                className="Log_Input_sign"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
                required
              />
            </div>
            <div>
              <p className="Sign_label">FCRA Number</p>
              <input
                type="text"
                placeholder="Enter number here.."
                className="Log_Input_sign"
                value={FCRA}
                onChange={(e) => setFCRA(e.target.value)}
              />
            </div>
            <div>
              <p className="Sign_label">Pan Number</p>
              <input
                type="text"
                placeholder="Enter number here.."
                className="Log_Input_sign"
                value={panNumber}
                onChange={(e) => setPanNumber(e.target.value)}
              />
            </div>
            <div>
              <p className="Sign_label">
                80G Number <span>*</span>
              </p>
              <input
                type="text"
                placeholder="Enter registration number here.."
                className="Log_Input_sign"
                value={eightyGNumber}
                onChange={(e) => setEightyGNumber(e.target.value)}
                required
              />
            </div>
            <div>
              <p className="Sign_label">
                12A Number<span>*</span>
              </p>
              <input
                type="text"
                placeholder="Enter number here.."
                className="Log_Input_sign"
                value={twelveANumber}
                onChange={(e) => setTwelveANumber(e.target.value)}
                required
              />
            </div>
            <div>
              <p className="Sign_label">
                Total Beneficiaries <span>*</span>
              </p>
              <input
                type="number"
                placeholder="Enter number here.."
                className="Log_Input_sign"
                value={totalBeneficiaries}
                onChange={(e) => setTotalBeneficiaries(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="add_image mx-auto">
            <div>
              <h2 className="title">Upload NGO Logo</h2>
            </div>
            <div className="add_circle"></div>
            <img src={vector} alt="Add Image" className="Add_Image" />
            <div className="Add_span">+</div>
            <div>
              <h2 className="title-img">Click here to upload your NGO image</h2>
            </div>
          </div>
        </div>
        <div>
          <h1 className="title title-add">Add users</h1>

          {/* Another */}

          {users.map((user, index) => (
            <div key={index} className="grid-2-uneven margin">
              <div className="grid-3-cols">
                <div>
                  <p className="Sign_label">
                    User {index + 1} {"'"}s Email <span>*</span>
                  </p>
                  <input
                    type="email"
                    placeholder="Enter email here.."
                    className="Log_Input_sign"
                    value={user.email}
                    onChange={(e) =>
                      handleUserChange(index, "email", e.target.value)
                    }
                    required
                  />
                </div>
                <div>
                  <p className="Sign_label">
                    Access Level <span>*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Enter access level here.."
                    className="Log_Input_sign"
                    value={user.accessLevel}
                    onChange={(e) =>
                      handleUserChange(index, "accessLevel", e.target.value)
                    }
                    required
                  />
                </div>
                <div>
                  {index === 0 ? (
                    ""
                  ) : (
                    <button
                      className="Add_btn flex x_btn"
                      onClick={() => handleDeleteUser(index)}
                    >
                      X
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-start">
          <span className="Add_btn flex" onClick={handleAddUser}>
            +
          </span>
          <p className="title title-add" onClick={handleAddUser}>
            Add User
          </p>
        </div>
        <div className="text-center">
          <button className="my-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
