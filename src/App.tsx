import React from 'react';
import {
  IonApp,
  IonHeader,
  IonContent,
  setupIonicReact,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonCard,
  IonCardContent,
  IonButton,
  IonIcon,
  IonAlert,
  IonPage,
  IonSegment,
  IonSegmentButton
} from '@ionic/react';
import { calculatorOutline, pin, refreshOutline } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {

  return (
    <React.Fragment>
      <IonApp>
        <IonPage>
          <IonHeader>
            <IonToolbar color="primary">
              <IonTitle>
                Home
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className='ion-padding'>
            <IonGrid>
              <IonRow>
                <IonSegment value="First">
                  <IonSegmentButton value='First'>First</IonSegmentButton>
                  <IonSegmentButton value='Second'>Second</IonSegmentButton>
                  <IonSegmentButton value='Third'>Third</IonSegmentButton>
                </IonSegment>
              </IonRow>
              <IonRow>
                <IonCol>
                  Working
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonPage>
      </IonApp>
    </React.Fragment>
  );
};

export default App;
