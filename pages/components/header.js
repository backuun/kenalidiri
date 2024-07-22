import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Header.module.css';
import Link from 'next/link';
import { LuChevronDown } from "react-icons/lu";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

export default function Header() {
    const [dropdownActive, setDropdownActive] = useState(false);
    const router = useRouter();

    const toggleDropdown = () => {
        setDropdownActive(!dropdownActive);
    };

    const isActive = (path) => {
        return router.asPath === path ? styles.active : '';
    };

    const [menuActive, setMenuActive] = useState(false);

    const handleHamburger = () => {
      setMenuActive(!menuActive);
    }

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src='/images/logo.png' alt='Kenali Diri Logo'/>
            </div>
            <button className={styles.hamburger} onClick={handleHamburger}><IoMenuOutline/></button>
            <div className={`${styles.nav_wrapper} ${menuActive ? styles.active : ''}`}>
                <div className={styles.nav}>
                    <ul>
                        <li className={isActive('/')}><Link href="/">Beranda</Link></li>
                        <li className={isActive('/tentang-kami')}><Link href="/tentang-kami">Tentang Kami</Link></li>
                        <li>
                            <span onClick={toggleDropdown} className={isActive('/layanan')}>Layanan <LuChevronDown/></span>
                            <div className={`${styles.dropdown_menu} ${dropdownActive ? styles.active : ''}`}>
                                <ul>
                                    <li><Link href="/layanan/kampus">Kampus</Link></li>
                                    <li><Link href="/layanan/keluarga">Keluarga</Link></li>
                                    <li><Link href="/layanan/perusahaan">Perusahaan</Link></li>
                                    <li><Link href="/layanan/sekolah">Sekolah</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className={isActive('/artikel')}><Link href="/artikel">Artikel</Link></li>
                        <li className={isActive('/kontak-kami')}><Link href="/kontak-kami">Kontak Kami</Link></li>
                    </ul>
                    <button className={styles.closeMenu} onClick={handleHamburger}><IoCloseOutline/></button>
                    <Link href="https://kenali-diri.prahwa.net/" className={styles.btn_login}><button>Login</button></Link>
                </div>
            </div>
        </div>
    );
}
