"use client";

import { useState } from "react";

const LoginButton = (props: { toggleLoggedIn: () => void }) => {
  return (
    <>
      <div>You are logged out</div>
      <div>
        <button onClick={props.toggleLoggedIn}>Log In</button>
      </div>
    </>
  );
};
const LogoutButton = (props: { toggleLoggedIn: () => void }) => {
  return (
    <>
      <div>You are now logged in</div>
      <div>
        <button onClick={props.toggleLoggedIn}>Log Out</button>
      </div>
    </>
  );
};
export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  // Define a function that can change the condition value
  const toggleLoggedIn = () => {
    setLoggedIn((currState) => {
      return !currState;
    });
  };

  // Use an if...else statement to render one out of two components based on the login state
  if (loggedIn) return <LogoutButton toggleLoggedIn={toggleLoggedIn} />;
  else return <LoginButton toggleLoggedIn={toggleLoggedIn} />;
}
