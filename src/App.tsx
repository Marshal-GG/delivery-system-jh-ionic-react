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
  IonSegmentButton,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonRoute
} from '@ionic/react';
import { calculatorOutline, pin, refreshOutline } from 'ionicons/icons';
import { Router } from 'react-router';
import { Routes, Route, Link } from 'react-router-dom';

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

  function Home() {
    return (
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </>
    );
  }

  function About() {
    return (
      <>
        <main>
          <h2>Who are we?</h2>
          <p>
            That feels like an existential question, don't you
            think?
          </p>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </>
    );
  }

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
          <IonContent fullscreen className='ion-padding'>
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
