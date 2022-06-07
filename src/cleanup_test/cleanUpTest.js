import { useEffect, useState } from "react";
import Btn from "../component/btn";

function Hello() {
    // created!!
    useEffect(() => {
        console.log("created hello component! :)");
        // destroyed!!
        return () => console.log("destroyed! :(");
    }, []);
    return <h1>Hello!!</h1>;
}

function CleanUpTest() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    const btnText = showing ? 'Hide' : 'Show';
    return (
        <div>
            <Btn onClick={onClick} text={btnText} />
            {showing ? <Hello /> : null}
        </div>
    )
}

export default CleanUpTest;