import "../styles/globals.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppManager from '../contexts/AppManager';

const MyApp = ({ Component, pageProps }) => {
  
  return (
    <>
      <AppManager>
        <Component {...pageProps} />
      </AppManager>
    </>
  );
}

export default MyApp;