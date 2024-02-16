import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button/Button";
import Student from "./Student";

function App() {
    return(
      <>
        <Header/>
        {/* <Food/> */}
        <Card/>
        <Student name="First Student" age={20} isStudent={true}/>
        <Student name="Sec Student" age={22} isStudent={true}/>
        <Student name="Third Student" age={25} isStudent={true}/>
        <Student name="Teacher" age={50} isStudent={false}/>
        <Student/>
        {/* <Button/> */}
        <Footer/>
      </>
    );
}

export default App
