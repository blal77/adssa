import { Link } from 'react-router-dom'
import styles from './SectionArtical.module.css'
import {posts} from './../../data/data.json'
import Artical from './artical/Artical';
export default function SectionArtical() {
    let cards = posts.slice(3,6)
    console.log(cards);
    return (
    <section className={`py-5 ${styles.sectionArtic}`}>
        <div className="container">
            <div className="d-flex justify-content-between m-4">
                <div>
                    <div className={`rounded-pill mb-3 py-1 px-3 ${styles.categ}`}>
                        <span className={`${styles.cricleDot}`}></span>
                        <span className={`mx-2 ${styles.cricleDot}`}></span>
                        الأحدث
                    </div>
                    <h2 className='text-white display-4 fw-bolder'>أحدث المقالات</h2>
                    <p className='text-white-50'>محتوى جديد طازج من المطبعة</p>
                </div>
                <Link to={"/blog"} className={`${styles.link} d-flex align-items-center`}> 
                عرض جميع المقالات
                <i className="fas fa-arrow-left me-2"></i>
                </Link>
            </div>
            <div className='row g-4'>
                {cards.map(post => <Artical key={post.id} {...post}/>)}
            </div>
        </div>
    </section>
)
}
