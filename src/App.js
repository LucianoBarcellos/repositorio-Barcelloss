import './App.css';
import ar from "./assets/teste.jpg";

function App() {
  return (
    <div className="container">
      <span className='titulo'> Tele Frio </span>
      <img src={ar} className={'img'} alt={'banner'}/>
      <span className='subtitulo'> Informações para contato</span>
      <span className='telefone'> Telefone: {'(54) 99175-9012'}</span>
      <button onClick={()=>window.location.replace('https://wa.me/5554991759012?text=Oi%20quero%20saber%20')} className='button-call-me'> Chamar whatsapp </button>

    </div>
  );
}

export default App;
