import './App.css'

import CreateEdit from './components/CreateEdit';
import Details from './components/Details';
import Delete from './components/Delete';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Search from './components/search/Search';
import UserSection from './components/user-section/UserSection';
import Pagination from './components/Pagination';

function App() {
    return (
        <div>
            <Header />

            <main className="main">
                <section className="card users-container">

                    <Search />

                    <UserSection />
                    
                    <Pagination />

                    {/* <Details /> */}

                    {/* <CreateEdit /> */}

                    {/* <Delete /> */}
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default App;
