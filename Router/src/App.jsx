
import './App.css'
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate
} from "react-router-dom";

const products=[
  {id:1, name:"Producto 1",description:"Descripción de Producto 1"},
  {id:2, name:"Producto 2",description:"Descripción de Producto 2"},
  {id:3, name:"Producto 3",description:"Descripción de Producto 3"},
  {id:4, name:"Producto lalal",description:"Descripción de Producto 3"},
  {id:5, name:"Producto 333",description:"Descripción de Producto 3"},
  {id:6, name:"Producto 777",description:"Descripción de Producto 3"},
  {id:7, name:"Producto 888",description:"Descripción de Producto 3"},
  {id:8, name:"Producto 9",description:"Descripción de Producto 3"},
  {id:9, name:"Producto 38",description:"Descripción de Producto 3"},
  {id:10, name:"Producto 4",description:"Descripción de Producto 4"},
  {id:11, name:"Producto 5",description:"Descripción de Producto 5"}
];

// Lista de Productos

function ProductList(){
  return (
    <div>
      <h2>Listas de Productos</h2>
      <ul>
        {products.map((product)=>(
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


function ProductDetail(){

  const {productId}=useParams(); //3
  const navigate=useNavigate();

  const productIndex=products.findIndex((product)=>product.id==productId)

  if(productIndex==-1) {
    return <div>Producto no encontrado</div>
  }

  const product =products[productIndex]

  const handleNextProduct= ()=>{
    const nextProductIndex= (productIndex+1) % products.length;  
    navigate(`/products/${products[nextProductIndex].id}`)
  }

  const handlePrevProduct = () => {
    const prevProductIndex =
      (productIndex - 1 + products.length) % products.length;
    navigate(`/products/${products[prevProductIndex].id}`);
  };



  return (
   <div>
    <h2>Detalle del producto</h2>
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <button onClick={handlePrevProduct}>Anterior</button>
    <button onClick={handleNextProduct}>Siguiente</button>
   </div>
  )

}


// App Principal

function App(){
  return (
    <Router>
      <div className='App'>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/products">Productos</Link>
            </li>
          </ul>
        </nav>
        <Routes>
            <Route path='/' element={<h2>Página de Inicio</h2>} />
            <Route path='products' element={<ProductList/>}/>
            <Route path='products/:productId' element={<ProductDetail/>}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;






