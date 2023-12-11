import React from 'react';
import styles from '../styles/users.module.css';
import Link from 'next/link';
import Header from './components/Header'
import Footer from './components/Footer'
import Head from 'next/head';

function Users({ users }) {
    return (
        <div>
            <Header></Header>
            <div id={styles.objetos}>
                <h1> Lista itens</h1><br></br>
                {users.map((user, index) => (
                    <Link href='/profile/[id]' as={`/profile/${index}`}>
                        <div key={user.index}>
                            <p> {user.nome} </p><hr></hr>
                        </div>
                    </Link>
                ))}
            </div>
            <Footer></Footer>
        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal')
    const repo = await res.json()
    const users = await repo;
    return {
        props: { users }
    }
})
export default Users;