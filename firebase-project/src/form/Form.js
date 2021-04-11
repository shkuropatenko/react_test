import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../Auth";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/user");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <>
      <div className="container">
        <div className="login_block">
          {error && <div variant="danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                id="email"
                placeholder="Email"
                ref={emailRef} />

              <input
                type="password"
                id="password"
                placeholder="Password"
                ref={passwordRef} />
              
              <input
                type="submit"
                value="Send"
                disabled={loading} />
              
              <a href="/reg" className="reg-link" onClick={() => {
                this.props.history.push("/reg");
              }}>Registration</a>
          </form>
        </div>
      </div>
    </>
  )
}