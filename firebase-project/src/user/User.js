import React, { useState } from "react";
import { useAuth } from "../Auth";
import { useHistory } from "react-router-dom";
import SliderMain from "../slider/SliderMain";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <div className="container">
        <div className="login_block">
          <h1>Hello user</h1>
          {error && <div variant="danger">{error}</div>}
          <button type="submit" onClick={handleLogout} className="btn">Logout</button>
        </div>
        <SliderMain />
      </div>
    </>
  )
}

