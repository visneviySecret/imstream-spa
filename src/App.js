import './styles/styles.css';
import logoImg from './images/Logo.svg'
import Music from './components/music_component'
import Registration from './components/reg_component';
import AboutUs from './components/about_us';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className="header">
          <a href="https://imstream.net/">
            <img className="header__logo" src={logoImg} alt='IMSTREAM logo' />
          </a>
        </header>
        <div className="header__title">
          <p>Музыка для бизнеса</p>
        </div>

        <Music />

        <Registration />

        <AboutUs />
      </div>
    </div>
  );
}

export default App;
