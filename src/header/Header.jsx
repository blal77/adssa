import {Link, useLocation} from "react-router-dom"
import styles from './header.module.css'
export default function Header() {
    const location = useLocation()
    let textP = "";
    let textP2 = "";
    let textH = "";
    switch (location.pathname) {
        case "/":
        case "/home":
            textP ="مرحباً بك في عدسة";
            textH = "اكتشف فن التصوير الفوتوغرافي"
            textP2 = "انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير."
            break;
        case "/blog":
            textP = "مدونتنا "
            textH = "استكشف مقالاتنا"
            textP2 = "اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث"
            break;
        case "/about":
            textP = "من نحن"
            textH = "مهمتنا هي الإعلام والإلهام"
            textP2 = "مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة."
            break;
    }
    
    return (
        <header className={` bg-black ${styles.header}`}>
            <div className="container">
                <div className="w-50 m-auto text-center text-white">
                    <p className={`mb-4 d-flex align-items-center gap-1 justify-content-center py-1 px-3 rounded-pill ${styles.pHeader}`}>
                        <span className={`${styles.cricleDot}`}></span>
                        <span className={`${styles.cricleDot}`}></span>
                        {textP}
                    </p>
                    <h1 className={`mb-4 ${styles.hHeader}`}>{textH}</h1>
                    <p className="text-secondary mt-5">{textP2}</p>
                    <div className={`${location.pathname === "/" || location.pathname === "/home" ? "mt-5 py-4" : "d-none"}`}>
                        <Link className={` py-3 px-5 rounded-pill text-white ms-4 ${styles.btnBlog}`} to={"/blog"}>استكشف المقالات</Link>
                        <Link className={` py-3 px-4 rounded-pill ${styles.btn}`} to={"/about"}>اعرف المزيد</Link>
                    </div>
                    <div className={`row py-4 ${location.pathname === "/" || location.pathname === "/home" ? "mt-5 py-4" : "d-none"}`}>
                        <div className={`col-6 col-lg-3`}>
                            <div className={`py-3  ${styles.card}`}>
                                <i className={`fas fa-newspaper ${styles.icon}`}></i>
                                <span className={`${styles.spNum}`}>+50</span>
                                <p className="text-secondary mb-0">مقالة</p>
                            </div>
                        </div>
                        <div className={`col-6 col-lg-3`}>
                            <div className={`py-3 ${styles.card}`}>
                                <i className={`fas fa-users ${styles.icon}`}></i>
                                <span className={`${styles.spNum}`}>+10ألف</span>
                                <p className="text-secondary mb-0">قارئ</p>
                            </div>
                        </div>
                        <div className={`col-6 col-lg-3`}>
                            <div className={`py-3  ${styles.card}`}>
                                <i className={`fas fa-folder-open ${styles.icon}`}></i>
                                <span className={`${styles.spNum}`}>4</span>
                                <p className="text-secondary mb-0">تصنيفات</p>
                            </div>
                        </div>
                        <div className={`col-6 col-lg-3`}>
                            <div className={`py-3  ${styles.card}`}>
                                <i className={`fas fa-pen-nib ${styles.icon}`}></i>
                                <span className={`${styles.spNum}`}>6</span>
                                <p className="text-secondary mb-0">كاتب</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
