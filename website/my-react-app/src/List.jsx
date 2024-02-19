import PropTypes from 'prop-types';

// function List(){
//     const fruits = [{id: 1, name: "apple", calories: 95}, 
//                     {id: 2, name: "orange", calories: 45}, 
//                     {id: 3, name: "banana", calories: 105}, 
//                     {id: 4, name: "coconut", calories: 159}, 
//                     {id: 5, name: "pinapple", calories: 37}];

//     // fruits.sort((a, b) => a.name.localeCompare(b.name));
//     // fruits.sort((a, b) => a.calories - b.calories);

//     // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
//     // const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>{lowCalFruit.name}: &nbsp; <b>{lowCalFruit.calories}</b></li>);

//     // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
//     // const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>{highCalFruit.name}: &nbsp; <b>{highCalFruit.calories}</b></li>);

//     const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>);

//     return(<ul>{listItems}</ul>);
// }

// export default List;

function List(props){

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>);

    return(<>
        <h3 className="list-category">{category}</h3>
        <ul className="list-items">{listItems}</ul>
        </>
    );
}

List.prototype = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({  id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number})),
}

List.defaultProps = {
    category: "Category",
    items: [], 
}

export default List;