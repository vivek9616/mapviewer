
import './App.css';
import Content from './components/contents';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header className="App-header"></Header> {/* header component */}
      <Content></Content> {/* middle area content*/}
      <Footer></Footer>   {/*footer content component*/}
    </div>
  );
}

export default App;
