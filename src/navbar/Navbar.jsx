import { NavLink, useLocation } from "react-router-dom";
import imagNav from "../assets/image/logo-GdqARQRt.png"
import styles from './Navbar.module.css'
export default function Navbar() {
    const loction = useLocation()
  return (
    <nav className={`py-3 ${styles.bgDark} z-3 position-fixed top-0 start-0 end-0 text-light`}>
        <div className="container">
            <div className="d-flex justify-content-around align-items-center">
                <div className="d-flex justify-content-around align-items-center">
                    <article>
                        <img src={imagNav} alt="logo" className={`img-fluid ${styles.hw48} `} />
                    </article>
                    <div className="me-2">
                        <h2 className="h5 text-end">عدسة</h2>
                        <p className={`mb-0 ${styles.textOrange} ${styles.fs}`}>عالم التصوير الفوتوغرافي</p>
                    </div>
                </div>
                <div className={`rounded-end-pill rounded-start-pill ${styles.border} ${styles.bgBlack}`}>
                    <ul className="d-flex justify-content-around align-items-center p-0 m-0 fa-ul">
                        <li className="p-3"><NavLink to={"/home"} 
                        className={loction.pathname === "/" || loction.pathname === "/home"? `${styles.active} ${styles.textDecrtion} rounded-5  `: `${styles.textDecrtion} text-white `}>
                            الرئيسية</NavLink></li>
                        <li className="p-3"><NavLink to={"/blog"} className={({ isActive }) => isActive ? `${styles.active} ${styles.textDecrtion} rounded-5 `: `${styles.textDecrtion}  text-white`}>المدونة</NavLink></li>
                        <li className="p-3"><NavLink to={"/about"} className={({ isActive }) => isActive ? `${styles.active} ${styles.textDecrtion} rounded-5 `: `${styles.textDecrtion}  text-white`}>من نحن</NavLink></li>
                    </ul>
                </div>
                <form>
                    <span className={`px-3 py-2  rounded-2 ${styles.search}`}>
                        <i className={`fas fa-search ${styles.searchIcone}`}></i>
                    </span>
                    <button className={`${styles.bgLinear} px-4 py-3 border-0 me-4 text-white rounded-end-pill rounded-start-pill`}>
                        ابدأ القراءة
                    </button>
                </form>
            </div>
        </div>
    </nav>
  )
}
