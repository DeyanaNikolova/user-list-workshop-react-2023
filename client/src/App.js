
import './App.css'
import CreateEdit from './components/CreateEdit';
import Details from './components/Details';
import Delete from './components/Delete';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <div>
    <Header />
    <main className="main">
      <UserContainer />

     {/* <Details /> */}

     {/* <CreateEdit /> */}

     {/* <Delete /> */}

    </main>
    <Footer />
    </div>
  );
}

export default App;
