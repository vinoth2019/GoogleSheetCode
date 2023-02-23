import React, { useEffect, useState } from "react";
import "./GetSheet.css";

function GetSheet() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch(
      "https://sheetdb.io/api/v1/4gj0yqccf0plz"
    )
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
       
        {user &&
          user.length > 0 &&
          user.map((userObj, index) => (
            <div key={userObj.id}>
              {<div className="name-image">{<img src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" height={20} alt='not' />} {userObj.Name}</div>} 
              
              {<div>{userObj.Message}<br></br><br></br></div>}
              </div> 
          ))} 
    </main>
  );
}

export default GetSheet;