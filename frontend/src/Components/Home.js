import "./HomeStyles.css";
import Image from "./Image";
import { useContext } from "react";
import Text from "./Text";
import Navbar from "./Navbar";
import { AuthContext } from "../context/auth-context-firebase-trash";
function Home() {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <div className="home">
        <div className="mainDiv">
          <Navbar />
          <Text />
          <Image />
        </div>
      </div>
    </>
  );
}

export default Home;
