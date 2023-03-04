import { useEffect, useState } from 'react';

import * as userService from './services/userService';


import Delete from './components/Delete';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Search from './components/search/Search';
import UserSection from './components/user-section/UserSection';
import Pagination from './components/Pagination';
import './App.css';

function App() {
    const [users, setUsers] = useState([]);

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

                    <button className="btn-add btn">Add new user</button>

                    <Pagination />

                    {/* <Delete /> */}
                </section>
            </main>

            <Footer />
        </>
    );
}

export default App;
