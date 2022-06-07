import { useEffect, useState } from "react";
import Btn from "../component/btn";

function UseEffectTest() {
    const [counter, setCounter] = useState(0);
    const [keyword, setKeyword] = useState('');
    const onClick =  () => setCounter((currentCounter) => currentCounter + 1);
    const onChange = (event) => setKeyword(event.target.value);
    useEffect(() => console.log('i run only once.'), []);
    useEffect(() => console.log('counter >> ', counter), [counter]);
    useEffect(() => console.log('Search for ', keyword), [keyword]);

    return (
        <div>
            <input value={keyword} onChange={onChange} type="text" placeholder='Search here...' />
            <h1>{counter}</h1>
            {/* <button onClick={onClick}>click me</button> */}
            <Btn onClick={onClick} text="click me" />
        </div>
    )
}

export default UseEffectTest;