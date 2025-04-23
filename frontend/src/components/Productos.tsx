import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonButton, IonGrid, IonRow, IonCol } from "@ionic/react";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
}

const Productos: React.FC<{ agregarAlCarrito: (producto: Producto) => void }> = ({ agregarAlCarrito }) => {
  const productos: Producto[] = [
    { id: 1, nombre: "Laptop", precio: 12000000, imagen: "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UF1000,1000_QL80_.jpg" },
    { id: 2, nombre: "Teléfono", precio: 3000000, imagen: "https://m.media-amazon.com/images/I/61DwXnVN9QL.jpg" },
    { id: 3, nombre: "Inears", precio: 70000, imagen: "https://www.globalmusic.com.co/wp-content/uploads/2023/07/INEARS-KZ-DQS.jpeg" },

  ];

  return (
    <IonGrid>
      <IonRow>
        {productos.map((producto) => (
          <IonCol size="6" key={producto.id}>
            <IonCard style={{ borderRadius: "10px" }}>
              <IonImg src={producto.imagen} style={{ height: "150px", objectFit: "cover" }} />
              <IonCardHeader>
                <IonCardTitle>{producto.nombre}</IonCardTitle>
                <IonCardSubtitle>${producto.precio.toLocaleString()}</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonButton expand="block" color="primary" onClick={() => agregarAlCarrito(producto)}>
                  Agregar al carrito
                </IonButton>
              </IonCardContent>
            </IonCard>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
};

export default Productos;