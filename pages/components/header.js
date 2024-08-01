import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Header.module.css';
import Link from 'next/link';
import { LuChevronDown } from "react-icons/lu";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

export default function Header() {
    const [dropdownActive, setDropdownActive] = useState(null); // Use null for no dropdown open
    const [menuActive, setMenuActive] = useState(false);
    const router = useRouter();
    const headerRef = useRef(null); // Reference to the header element

    // Function to handle click outside of dropdown
    const handleClickOutside = (event) => {
        if (headerRef.current && !headerRef.current.contains(event.target)) {
            setDropdownActive(null); // Close dropdown if click is outside
        }
    };

    // Function to handle scroll event
    const handleScroll = () => {
        setDropdownActive(null); // Close dropdown on scroll
    };

    // Add and remove event listeners
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleDropdown = (dropdownName) => {
        setDropdownActive(dropdownActive === dropdownName ? null : dropdownName);
    };

    const isActive = (path) => {
        return router.asPath === path ? styles.active : '';
    };

    const handleHamburger = () => {
        setMenuActive(!menuActive);
    }

    return (
        <div className={styles.header} ref={headerRef}>
            <div className={styles.logo}>
                <img src='/images/logo.png' alt='Kenali Diri Logo'/>
            </div>
            <button className={styles.hamburger} onClick={handleHamburger}><IoMenuOutline/></button>
            <div className={`${styles.nav_wrapper} ${menuActive ? styles.active : ''}`}>
                <div className={styles.nav}>
                    <ul>
                        <li className={isActive('/')}><Link href="/">Home</Link></li>
                        {/* <li className={isActive('/tentang-kami')}><Link href="/tentang-kami">Tentang Kami</Link></li> */}
                        <li>
                            <span onClick={() => toggleDropdown('company')} className={isActive('/layanan')}>Company <LuChevronDown/></span>
                            <div className={`${styles.dropdown_menu} ${dropdownActive === 'company' ? styles.active : ''}`}>
                                <ul>
                                    <li><Link href="/layanan/kampus">About Us</Link></li>
                                    <li><Link href="/layanan/keluarga">Contact</Link></li>
                                    <li><Link href="/layanan/perusahaan">Konsultasi</Link></li>
                                    <li><Link href="/layanan/sekolah">News</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <span onClick={() => toggleDropdown('services')} className={isActive('/layanan')}>Services <LuChevronDown/></span>
                            <div className={`${styles.dropdown_menu} ${dropdownActive === 'services' ? styles.active : ''}`}>
                                <ul>
                                    <li><Link href="/layanan/kampus">Kampus</Link></li>
                                    <li><Link href="/layanan/keluarga">Keluarga</Link></li>
                                    <li><Link href="/layanan/perusahaan">Perusahaan</Link></li>
                                    <li><Link href="/layanan/sekolah">Perseorangan</Link></li>
                                </ul>
                            </div>
                        </li>
                        {/* <li className={isActive('/artikel')}><Link href="/artikel">Artikel</Link></li>
                        <li className={isActive('/kontak-kami')}><Link href="/kontak-kami">Kontak</Link></li> */}
                    </ul>
                    <button className={styles.closeMenu} onClick={handleHamburger}><IoCloseOutline/></button>
                    <Link href="https://kenali-diri.prahwa.net/" className={styles.btn_login}><button>Login</button></Link>
                </div>
            </div>
        </div>
    );
}
