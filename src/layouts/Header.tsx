import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const localUserName = localStorage.getItem("name") ?? "invitado";

    setUserName(localUserName);
  }, []);

  return (
    <header>
      <div>
        <h1>¡Hola, {userName}! </h1>
      </div>
    </header>
  );
};

export default Header;
