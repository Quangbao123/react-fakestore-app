
import './App.css';
import Footer from './components/main_layout/Footer';
import Header from './components/main_layout/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';
function App(props) {
  return (
    <div>
      <Header/>
      {props.children}
      <Footer/>
    </div>
  );
}
export default App;
