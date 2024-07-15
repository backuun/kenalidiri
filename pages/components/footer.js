import styles from "@/styles/Footer.module.css"
import Link from "next/link"
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export default function Footer() {
    return(
        <>
        <div className={styles.footer}>
            <div className={styles.divider}></div>
            <div className={styles.footer_company}>
                <img src="images/logo.png" alt="Kenali Diri Logo" />
                <p>Kenali dirimu.</p>
                <p>Aplikasi untuk membantu mengenali diri secara akurat.</p>
                <div className={styles.social_media}>
                    <Link href='#'>
                        <div className={styles.social_media_box}>
                            <FaWhatsapp/>
                        </div>
                    </Link>
                    <Link href='#'>
                        <div className={styles.social_media_box}>
                            <FaInstagram/>
                        </div>
                    </Link>
                    <Link href='#'>
                        <div className={styles.social_media_box}>
                            <FaFacebook/>
                        </div>
                    </Link>
                    <Link href='#'>
                        <div className={styles.social_media_box}>
                            <FaTiktok/>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={styles.footer_menu}>
                <h3>Perusahaan</h3>
                <div className={styles.divider_list}></div>
                <ul>
                    <Link href='#'><li>Tentang Kami</li></Link>
                    <Link href='#'><li>Syarat & Ketentuan</li></Link>
                    <Link href='#'><li>Kebijakan Privasi</li></Link>
                </ul>
            </div>
            <div className={styles.footer_menu}>
                <h3>Bantuan</h3>
                <div className={styles.divider_list}></div>
                <ul>
                    <Link href='#'><li>Hubungi Kami</li></Link>
                    <Link href='#'><li>Faq</li></Link>
                    <Link href='#'><li>Artikel Kami</li></Link>
                </ul>
            </div>
            <div className={styles.footer_contact}>
                <p>Perum Alexandria Jl. Palermo No. 1, Tugujaya, Cihideung</p>
                <p>0878-6629-1056</p>
                <p>support@kenalidiri.id</p>
            </div>
        </div>
        <div className={styles.copyright}>
            <span>Copyright 2023 © All Right Reserved Prahwa Tech</span>
        </div>
        </>
    )
}