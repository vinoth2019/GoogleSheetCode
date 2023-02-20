import React, { useEffect, useState } from "react";
import "./GetSheet.css";

function GetSheet() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch(
      "https://sheet.best/api/sheets/a41ef7a5-4bfd-4e50-8c83-4d21f8c67359"
    )
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <ul>
        {user &&
          user.length > 0 &&
          user.map((userObj, index) => (
            <li key={userObj.id}> {userObj.Name}</li>
          ))}
      </ul>
    </main>
  );
}

export default GetSheet;
