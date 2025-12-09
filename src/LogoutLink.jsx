import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    axios.delete("/sessions.json").then((response) => {
      console.log(response);
      localStorage.removeItem("email");
      window.location.href = "/"; //change later
    });
  };

  return (
    <a href="#" onClick={handleClick}>
      Logout
    </a>
  );
}