import styles from '../../styles/Components.module.css'

export default function Header() {
    return (
        <div id={styles.header}>
            <div id={styles.menu}>
                <h1>Pequenas Noticias</h1>
                <a href='/'>Home</a>
                <a href='/users'>Objetos</a>
            </div>
        </div>
    )
}
