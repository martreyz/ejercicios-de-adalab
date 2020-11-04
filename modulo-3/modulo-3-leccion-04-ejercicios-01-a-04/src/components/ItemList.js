import React from "react";
import Item from "./Item";

const arrayOfItems = [
  {
    name: "Cereales con chocolate",
    description: "Cereales rellenos de chocolate",
    quantity: 2,
    category: "Cereales",
    price: 5,
  },
  {
    name: "Hamburguesa con queso",
    description: "Hamburguesa rica y saludable",
    quantity: 1,
    category: "Fast-food",
    price: 15,
  },
  {
    name: "Agua mineral",
    description: "Agua de un charco del Himalaya",
    quantity: 2,
    category: "Bebida",
    price: 5,
  },
  {
    name: "Servesa",
    description: "Servesa pa React",
    quantity: 10,
    category: "Bebida",
    price: 0,
  },
  {
    description: "Cereales rellenos de chocolate",
    quantity: 2,
    category: "Cereales",
    price: 5,
  },
];

// let accLi = [];

// accLi = arrayOfItems.map((ItemInfo) => (
//   <li>
//     <Item
//       name={ItemInfo.name}
//       description={ItemInfo.description}
//       quantity={ItemInfo.quantity}
//       category={ItemInfo.category}
//       price={ItemInfo.price}
//     />
//   </li>
// ));

// class ItemList extends React.Component {
//   render() {
//     return <ul className="item-list">{accLi}</ul>;
//   }
// }

// export default ItemList;

let accLi = [];
const arrayLess10 = arrayOfItems.filter((item) => item.price < 10);

accLi = arrayLess10.map((ItemInfo) => (
  <li>
    <Item
      name={ItemInfo.name}
      description={ItemInfo.description}
      quantity={ItemInfo.quantity}
      category={ItemInfo.category}
      price={ItemInfo.price}
    />
  </li>
));

class ItemList extends React.Component {
  render() {
    return <ul className="item-list">{accLi}</ul>;
  }
}

export default ItemList;
