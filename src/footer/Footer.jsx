import styles from "./footer.module.css"
export default function Footer() {
  return (
    <footer className={`py-4 ${styles.bgDark} ${styles.borderBottom} text-white`}>
        <div className="container">
            <div className={`row g-4 py-5`}>
                <div className="ps-4 col-12 col-lg-6 col-xl-3">
                    <h2 className="h5 d-inline-flex align-items-center justify-content-between"><span className={`${styles.span} ms-2 px-3 py-2 rounded-3`}>ع</span> عدسة</h2>
                    <p className={`text-secondary py-2 ${styles.fs14}`}>مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.</p>
                    <div className="d-flex my-3 gap-3">
                        <span className={`${styles.icon} rounded-3`}><i className="fab fa-youtube"></i></span>
                        <span className={`${styles.icon} rounded-3`}><i className="fab fa-linkedin"></i></span>
                        <span className={`${styles.icon} rounded-3`}><i className="fab fa-github"></i></span>
                        <span className={`${styles.icon} rounded-3`}><i className="fab fa-x-twitter"></i></span>
                    </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-3">
                    <h2 className="h5 d-flex align-items-center"><span className={`${styles.lineSpan} ms-2`}></span>استكشف</h2>
                    <ul className="me-0 my-3 text-secondary fa-ul">
                        <li className={`pb-2 ${styles.liHover}`}>الرئيسية</li>
                        <li className={`pb-2 ${styles.liHover}`}>المدونة</li>
                        <li className={`pb-2 ${styles.liHover}`}>من نحن</li>
                    </ul>
                    
                </div>
                <div className="col-12 col-lg-6 col-xl-3">
                    <h2 className="h5 d-flex align-items-center"><span className={`${styles.lineSpan} ms-2`}></span>التصنيفات</h2>
                    <ul className="me-0 my-3 text-secondary fa-ul">
                        <li className={`pb-2 ${styles.liHover}`}>إضاءة</li>
                        <li className={`pb-2 ${styles.liHover}`}>بورتريه</li>
                        <li className={`pb-2 ${styles.liHover}`}>مناظر طبيعية</li>
                        <li className={`pb-2 ${styles.liHover}`}>تقنيات</li>
                    </ul>
                </div>
                <div className="col-12 col-lg-6 col-xl-3">
                    <h2 className="h5 d-flex align-items-center"><span className={`${styles.lineSpan} ms-2`}></span>ابقى على اطلاع</h2>
                    <p className="text-secondary my-3">اشترك للحصول على أحدث المقالات والتحديثات.</p>
                    <form>
                        <input name="emil" id="emil" className={`p-2 rounded-4 btn-outline-warning mb-3 ${styles.inputFooter}`} type="text" placeholder="أدخل بريدك الإلكتروني"/>
                        <button className={`${styles.btn} text-white rounded-end-pill rounded-start-pill`}>اشترك</button>
                    </form>
                </div>
            </div>
            <div className="pt-5 row gy-3">
                <div className="text-secondary col-12 col-lg-6">
                    <p className="mb-0">© 2026 عدسة. صنع بكل <span><i className="fas fa-heart text-warning"></i></span> جميع الحقوق محفوظة.</p>
                </div>
                <div className="col-12 col-lg-6 text-start">
                    <button className="bg-transparent border-0 text-secondary">سياسة الخصوصية</button>
                    <button className="bg-transparent border-0 text-secondary">شروط الخدمة</button>
                </div>
            </div>
        </div>
    </footer>
)
}