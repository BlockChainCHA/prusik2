import { headers } from './headers';

export const getProductosFront = async () =>
  await fetch('http://localhost:20001/getProducts', { method: 'GET', headers }).then((response) =>
    response.json()
  );

  export const setProductosFront = async (productos: string) =>
  await fetch(`http://localhost:20001/getProducts/?producto=${productos}`, {
    method: 'PUT',
    headers
  }).then((response) => response.json());


  export async function fetchTienda() {
    try {
      //const response = await fetch("/getProducts");
      const response = await fetch("http://localhost:20001/getProducts");
      if (!response.ok) {
        throw new Error("Error al obtener la lista de productos...");
      }
  
      const data = await response.json();
      return data.products;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }