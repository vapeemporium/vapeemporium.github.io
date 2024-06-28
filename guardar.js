import { collection, addDoc } from 'firebase/firestore';

async function agregarVenta(comprador, vendedor, fecha, sabor, estado) {
  try {
    const docRef = await addDoc(collection(db, "ventas"), {
      comprador: comprador,
      vendedor: vendedor,
      fecha: fecha,
      sabor: sabor,
      estado: estado
    });
    console.log("Documento guardado con ID: ", docRef.id);
  } catch (e) {
    console.error("Error al agregar el documento: ", e);
  }
}

export { agregarVenta };

