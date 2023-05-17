import { useState } from 'react';
import './App.css';
import Card from "./components/card/Card";

function App() {
  const [product,setProduct]=useState([
    { 
     id:1, 
     title:"Cinnamoroll", 
     image:"https://cdn.shopify.com/s/files/1/0416/8083/0620/products/594679-Zoom.1_600x.jpg?v=1664907957",
     info:"Classic Mascot Plush", 
     number:1,
    },
    { 
      id:2, 
      title:"Kuromi", 
      image:"https://cdn.shopify.com/s/files/1/0416/8083/0620/products/769126-Zoom.1_600x.jpg?v=1642043014",
      info:"Pastel Baby 8 Inches Plush", 
      number:1,
    }, 
    { 
      id:3, 
      title:"Pompompurin", 
      image:"https://cdn.shopify.com/s/files/1/0416/8083/0620/products/594652-Zoom.1_600x.jpg?v=1664908033",
      info:"Classic Mascot Plush ", 
      number:1,
    }, 
    { 
      id:4, 
      title:"Keroppi", 
      image:"https://cdn.shopify.com/s/files/1/0416/8083/0620/products/594717-Zoom.1_600x.jpg?v=1664907986",
      info:"Classic Mascot Plush", 
      number:1,
    },
    { 
      id:5, 
      title:"Pochacco & Pi-chan", 
      image:"https://cdn.shopify.com/s/files/1/0416/8083/0620/products/610801-Zoom.1_600x.jpg?v=1657303300",
      info:"With Friends Series 6 Inches Plush", 
      number:1,
    },
    { 
      id:6, 
      title:"Hello Kitty", 
      image:"https://cdn.shopify.com/s/files/1/0416/8083/0620/products/591963-Zoom.1_600x.jpg?v=1652223812",
      info:"Fluffy Baby 5 Inches Mascot Plush ", 
      number:1,
    },
    { 
      id:7, 
      title:"My Melody", 
      image:"https://cdn.shopify.com/s/files/1/0416/8083/0620/products/615072-Zoom.1_600x.jpg?v=1666112426",
      info:"Besties Costume Series 8 Inches Plush", 
      number:1,
    },
    { 
      id:8, 
      title:"LittleTwinStars Kiki", 
      image:"https://cdn.shopify.com/s/files/1/0416/8083/0620/products/770965-Zoom.1_600x.jpg?v=1649815204",
      info:"Carnival Balloons 8 Inches Plush ", 
      number:1,
    },
  
  ]);

  const [basket,setBasket]=useState([]);
 return ( 
  <div className="App">
    <div className='header'>
    <h1>Sanrio</h1>
    <h2>Plushes Menu</h2>
    </div>
    <div className="products">
      {
        product.map((element,index)=>{
         return (
         <Card 
            onClick={()=>{
              const arr=[...basket];
              if(arr.findIndex((ind)=>{
                return element.id===ind.id;
              })===-1)
              {
                arr.push(element);// 2.method but addinh element to the barckets above [...basket,element]
                setBasket(arr);
              }
              else {
                arr.map((item)=>{
                  if(item.id===element.id)
                  {
                    return (element.number+=1);
                  }
                  setBasket(arr);
                });
              }
              console.log(basket);
            }}
            key={index}
            title={element.title} 
            image={element.image} 
            info={element.info}
            />
         );
        })}
      
     </div>

     <div className="basket">
      <h2> Our Basket</h2>
      <ul className="basket">
       {
        basket.map((element,index)=>{
          return <li>
            {element.title + "---->"+element.info+" number : "}{""}
            <b style={{ fontSize: "18px",color:"royalblue" }}>{element.number}</b>
          </li>;

        })
       }
      </ul>
      {
        basket.length>0 ? (
        <button onClick={()=>{
          setBasket([]);
        }}>Clear Basket</button>
        ):(
          
        <h2>You don't have any items in your basket.</h2>
        )}
     </div>
   
  </div>
  ); 
}

export default App;

