import { IonSegment, IonSegmentButton, IonLabel, IonIcon } from "@ionic/react";
import { cashOutline, cardOutline, walletOutline } from "ionicons/icons";

const Pagos: React.FC<{ onMetodoSeleccionado: (metodo: string) => void }> = ({ onMetodoSeleccionado }) => {
  return (
    <div style={{ margin: "16px" }}>
      <h2 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "18px" }}>Método de Pago</h2>
      <IonSegment 
        onIonChange={(e) => onMetodoSeleccionado(e.detail.value as string)} // Corrección clave
      >
        <IonSegmentButton value="Efectivo">
          <IonIcon icon={cashOutline} />
          <IonLabel>Efectivo</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="Tarjeta">
          <IonIcon icon={cardOutline} />
          <IonLabel>Tarjeta</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="Transferencia">
          <IonIcon icon={walletOutline} />
          <IonLabel>Transferencia</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </div>
  );
};

export default Pagos;