import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [employeeEmails, setEmployeeEmails] = useState("");
  const [results, setResults] = useState("");

  const handleClick = () => {
    console.log(employeeEmails);
  };
  const handleClickScore = () => {
    console.log(results);
  };
  useEffect(() => {
    const getData = async () => {
      await axios
        .get("api/users")
        .then((res) => {
          setEmployeeEmails(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const getdataScore = async () => {
      await axios
        .get("api/employee-score")
        .then((res) => {
          setResults(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
    getdataScore();
  }, []);
  return (
    <>
      <div>Welcome!!!</div>
      <button onClick={handleClick}>Get Users</button>
      <button onClick={handleClickScore}>Get All Scores</button>
    </>
  );
};

export default Home;
