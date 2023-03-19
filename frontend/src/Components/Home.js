import "./HomeStyles.css"
import Image from "./Image";
import Text from "./Text";

function Home (){
    return (
        <>
            <div className="home">
                <div className="mainDiv">
                    <Text/>
                    <Image/>
                </div>
            </div>
        </>
    );
}

export default Home;