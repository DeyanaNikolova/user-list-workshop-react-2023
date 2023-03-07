import { useEffect, useState } from 'react';

import * as userService from './services/userService';


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

    const onUserCreateSubmit = async (e) => {
        // 1. Stop aothomatic form submit
        e.preventDefault();
        // 2. Get formData from DOM tree
        const formData = new FormData(e.currentTarget);

        // 3. Convert formData to data object
        const data = Object.fromEntries(formData);

        // 4. Sent AJAXS request to server
        const createdUser = await userService.create(data);

        // 4. If successfull add new user to the state
        setUsers(state => [...state, createdUser]);
    };


    const onUserUpdateSubmit = async (e, userId) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        const updatedUser = await userService.update(userId, data);

        setUsers(state => state.map(u => u._id === userId ? updatedUser : u));
 
    };

    const onUserDelete = async (userId) => {
        // Delete from server
        await userService.remove(userId);
        // Delete from state
        setUsers(state => state.filter(u => u._id !== userId));
    };

    return (
        <>
            <Header />

            <main className="main">
                <section className="card users-container">

                    <Search />

                    <UserSection
                        users={users}
                        onUserCreateSubmit={onUserCreateSubmit}
                        onUserUpdateSubmit={onUserUpdateSubmit}
                        onUserDelete={onUserDelete}
                    />

                    <Pagination />

                </section>
            </main>

            <Footer />
        </>
    );
}

export default App;
