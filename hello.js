console.log('hello world');

let [name,setName]=useState("abc");

setName("def")



let [orders,setOrders]=useState([]);

setOrders([])

let newOrders=[...orders];
//...代表撈
//{}要一塊heep空間
newOrders.push();
setOrders(newOrders);


let str = JSON.stringify(person);
console.log(str);
let another =JSON.parse(str);
person.age = 28;
console.log('another', another);

