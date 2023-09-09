import { useEffect, useState } from 'react';
import './App.css';
//import { ChangeMessengerMessage } from './components/ChangeMessengerMessage';
//import { getMessengerMessage } from './fetchers/messenger';
import { getProductosFront } from './fetchers/tienda';
//import axios from "axios";

function App() {
  //const [message, setMessage] = useState();
  const [products, setProductos] = useState([]);
  //const [error, setError] = useState(null);
  const [error, setError] = useState<string | null>(null);
  //const [productos, setProductos] = useState<Producto[]>([]);

  /*
  const getApiData = async () => {
    const response = await getMessengerMessage();
    setMessage(response.message);
  };
*/

const getApiData = async () => {
    //const productos = await getProductosFront();
    //response.products;
    //getProductos(response.products);

    const response = await getProductosFront();
    console.log(response);
    setProductos(response.data.products);
  };
 
  

  useEffect(() => {
    getApiData();
  }, []);

  /*
  useEffect(() => {
    // Función para obtener y actualizar la lista de productos
    const obtenerProductos = async () => {
      try {
        const productosData = await getProductosFront();
        setProductos(productosData);
      } catch (error) {
        //setError(error.message || 'Hubo un error al obtener los productos.');
        console.log('ERROR AL LISTAR PRODUCTOS')
      }
    };
   

    // Llama a la función para obtener productos cuando el componente se monta
    obtenerProductos();
  }, []);
 */

  return (
<div>
      {error && <p>{error}</p>}
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>
            {product.name} - Stock: {product.stock}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
