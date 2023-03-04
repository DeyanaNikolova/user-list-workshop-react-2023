import './App.css';
import { useEffect, useState } from 'react';

import * as userService from './services/userService';

import CreateEdit from './components/CreateEdit';
import Details from './components/Details';
import Delete from './components/Delete';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Search from './components/search/Search';
import UserSection from './components/user-section/UserSection';
import Pagination from './components/Pagination';

function App() {
    const [ users, setUsers] = useState([]);
    useEffect(() => {
        userService.getAll()
        .then(users => {
            setUsers(users);
        })
        .catch(err => {
            console.log('Error' + err);
        });
        
    }, []);
    return (
        <>

            <Header />

            <main className="main">
                <section className="card users-container">

                    <Search />

                    <UserSection users={users} />
                    
                    <Pagination />

                    {/* <Details /> */}

                    {/* <CreateEdit /> */}

                    {/* <Delete /> */}
                </section>
            </main>

            <Footer />
        </>
    );
}

export default App;
