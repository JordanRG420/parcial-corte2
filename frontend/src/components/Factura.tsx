import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonItem, IonLabel, IonIcon } from "@ionic/react";
import { personOutline, calendarOutline } from "ionicons/icons";

interface FacturaProps {
  cliente: string;
  fecha: string;
}

const Factura: React.FC<FacturaProps> = ({ cliente, fecha }) => {
  return (
    <IonCard style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)", margin: "16px" }}>
      <IonCardHeader>
        <IonCardTitle style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Factura #12345</IonCardTitle>
        <IonCardSubtitle>Detalles del cliente</IonCardSubtitle>
      </IonCardHeader>
      <IonItem lines="none">
        <IonIcon slot="start" icon={personOutline} color="primary" />
        <IonLabel>
          <h3 style={{ fontWeight: "500" }}>{cliente}</h3>
          <p>Cliente</p>
        </IonLabel>
      </IonItem>
      <IonItem lines="none">
        <IonIcon slot="start" icon={calendarOutline} color="primary" />
        <IonLabel>
          <h3 style={{ fontWeight: "500" }}>{fecha}</h3>
          <p>Fecha de emisión</p>
        </IonLabel>
      </IonItem>
    </IonCard>
  );
};

export default Factura;