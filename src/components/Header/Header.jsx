// Работа с модулями
import SelectUser from '../SelectUser/SelectUser';
import styles from './Header.module.css';

function Header() {
    return (
        // class="_logo_tsrpx_1" - модуль обеспечил уникальность имени
        <>
            <img className={styles.logo} src="/logo.png" alt="Логотип журнала" />
            <SelectUser />
        </>
    )
}

export default Header