import ComponentC from "./ComponentC";

function ComponentB(){

    return(
        <div className="box">
            <h1>Component B</h1>
            {/* <ComponentC user={props.user}/> */}
            <ComponentC/>
        </div>
    );
}

export default ComponentB;