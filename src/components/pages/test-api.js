import React from "react";
import Header from '../Header';
import Footer from '../Footer';
import Newsletter from '../Newsletter';

const Testapi = () => {

  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  const initialFormData = Object.freeze({
    username: "",
    password: ""
  });

  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
      updateFormData({
        // Trimming any whitespace
        [e.target.name]: e.target.value.trim()
      });
  };

  const handleSubmit = () => {
    console.log(formData);
  }

  
  React.useEffect(() => {
    const url = "https://randomuser.me/api/?results=15";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json['results']))
      .catch((error) => console.log(error));
  }, []);

  React.useEffect(() => {
    if (data.length !== 0) {
      setIsLoading(false);
    }
    console.log(data);
  }, [data]);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data.map((user) => (
          <p>
            {user.name.first} {user.name.last}
          </p>
        ))
      )}
     
     <label>
        Username
        <input name="username" onChange={handleChange} />
      </label>
      <br />
      <label>
        Password
        <input name="password" onChange={handleChange} />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>

    </>
  );
};
  
export default Testapi;