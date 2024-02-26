import ComponentD from "./ComponentD";
import { useContext } from "react";
import { userContext } from "./ComponentA.jsx";

function ComponentC(){

    const user = useContext(userContext);

    return(
        <div className="box">
            <h1>Component C</h1>
            {/* <ComponentD user={props.user}/> */}
            <h2>{`Hello Again ${user}`}</h2>
            <ComponentD/>
        </div>
    );
}

export default ComponentC;