// Работа с модулями
import styles from './Header.module.css';

function Header() {
    const changeUser = (e) => {
        console.log(e.target.value);
    }

    return (
        // class="_logo_tsrpx_1" - модуль обеспечил уникальность имени
        <>
            <img className={styles.logo} src="/logo.png" alt="Логотип журнала" />
            <select name="user" id="user" onChange={changeUser}>
                <option value="1">Антон</option>
                <option value="2">Вася</option>
            </select>
        </>
    )
}

export default Header