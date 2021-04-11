import React, { useRef, useState } from "react";
import { useAuth } from "../Auth";
import { Link, useHistory } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/login");
    } catch {
      setError("Failed to create an account");
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
                type="password"
                id="password"
                placeholder="Password"
                ref={passwordConfirmRef} />
              
              <input
                type="submit"
                value="Send"
                disabled={loading} />

              <div className="account-box">
                  Already have an account? <Link to="/login">Log In</Link>
              </div>
          </form>
        </div>
      </div>
    </>
  )
}
