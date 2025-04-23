import { IonPage, IonContent, IonFab, IonFabButton, IonIcon, IonBadge } from "@ionic/react";
import { cartOutline } from "ionicons/icons";
import { useState } from "react";
import Productos from "../components/Productos";
import Factura from "../components/Factura";
import Pagos from "../components/Pagos";

const Home: React.FC = () => {
  const [carrito, setCarrito] = useState<any[]>([]);
  const [metodoPago, setMetodoPago] = useState<string>("");

  const agregarAlCarrito = (producto: any) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <IonPage>
      <IonContent>
        <Factura cliente="Juan Pérez" fecha={new Date().toLocaleDateString()} />
        <Productos agregarAlCarrito={agregarAlCarrito} />
        <Pagos onMetodoSeleccionado={setMetodoPago} />

        {/* Carrito flotante */}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="primary">
            <IonIcon icon={cartOutline} />
            <IonBadge color="danger" style={{ position: "absolute", top: "-8px", right: "-8px" }}>
              {carrito.length}
            </IonBadge>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;