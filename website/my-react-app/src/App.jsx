import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button/Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";
import ClickButton from "./ClickButton";
import ProfilePicture from "./ProfilePicture";
import MyComponent from "./MyComponent";
import Counter from "./Counter";

function App() {
  const fruits = [{id: 1, name: "apple", calories: 95}, 
                  {id: 2, name: "orange", calories: 45}, 
                  {id: 3, name: "banana", calories: 105}, 
                  {id: 4, name: "coconut", calories: 159}, 
                  {id: 5, name: "pinapple", calories: 37}];

  const vegetables = [{id: 6, name: "potatoes", calories: 110}, 
                      {id: 7, name: "celery", calories: 15}, 
                      {id: 8, name: "carrots", calories: 25}, 
                      {id: 9, name: "corn", calories: 63}, 
                      {id: 10, name: "broccoli", calories: 50}];

  const nothing = [];
  
  return(<>
        <Header/>
        {/* 
        <UserGreeting isLoggedIn={true} username="Current User"/>
        <UserGreeting />

        <Food/>
        
        <Student name="First Student" age={20} isStudent={true}/>
        <Student name="Sec Student" age={22} isStudent={true}/>
        <Student name="Third Student" age={25} isStudent={true}/>
        <Student name="Teacher" age={50} isStudent={false}/>
        <Student/>

        <Button/> 
        
        {fruits.length > 0 ? <List items={fruits} category = "Fruits"/> : null}
        {vegetables.length > 0 ? <List items={vegetables} category = "Vegetables"/> : null}
        {nothing.length > 0 ? <List items={nothing} category = "Nothing"/> : null}

        <ProfilePicture/>

        // Here's a shortcut to the trinary operator use && instead of ? in javascript 
        {fruits.length > 0 && <List items={fruits} category = "Fruits"/>}
        {vegetables.length > 0 && <List items={vegetables} category = "Vegetables"/>}
        {nothing.length > 0 && <List items={nothing} category = "Nothing"/>}

        <ClickButton/>

        <Counter/>

        */}

        <Card/>

        <MyComponent/>
        
        <Footer/>
      </>
  );
}

export default App
