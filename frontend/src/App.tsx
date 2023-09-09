import { useEffect, useState } from 'react';
import './App.css';
//import { ChangeMessengerMessage } from './components/ChangeMessengerMessage';
//import { getMessengerMessage } from './fetchers/messenger';
//import { getProductosFront } from './fetchers/tienda';
//import axios from "axios";
import { fetchTienda  } from './fetchers/tienda';



function ProductList() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const productList = await fetchTienda();
          setProducts(productList);
        } catch (error) {
          // Manejo de errores aquí
        }
      }
  
      fetchData();
    }, []);

    return (
        <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            width: '600px',
            margin: 'auto',
            gap: '10px'              
          }}
        >
    

        <div>
        <h1><u>Proyecto BlockChain</u></h1>
        <h2>Tienda de Productos</h2>
        <h2>Lista de Productos</h2>
        <table style={{ borderCollapse: 'collapse', width: '100%', textAlign: 'center' }}>
        <thead>
            <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Stock</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product: any) => (
            <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.stock}</td>
            </tr>
            ))}
        </tbody>
        </table>
        </div>
        </div>
      );
    }
    
    export default ProductList;