import React, { useState, useEffect } from "react";
import Card from "./Card/Card";
import "./App.css";
function CardData() {
  useEffect(() => {
    fetchUser();
  }, []);

  const [user, setUser] = useState([]);

  const fetchUser = async () => {
    const fetchUser = await fetch(`http://localhost:5000/api`);
    const user = await fetchUser.json();
    setUser(user);
    console.log(user);
  };
  return (
    <div className="card-container" id="community">
      {user &&
        user.map((user) => (
          <div key={user._id}>
            <Card name={user.name} tagline={user.tagline} image={user.image} github={user.github} linkedin={user.linkedin} instagram={user.instagram} />
          </div>
        ))}
    </div>
  );
}

export default CardData;
