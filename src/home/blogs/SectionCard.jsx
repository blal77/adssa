import Card from "./Cards/Card";
import {posts} from '../../data/data.json'
import styles from './SectionCard.module.css'
import { Link } from "react-router-dom";
export default function SectionCard() {
    let cards = posts.slice(0,3)
return (
    <section className={`py-5 ${styles.section}`}>
    <div className="container">
        <div className="d-flex justify-content-between">
            <div>
                <div>
                    <p className={`${styles.pvip} px-3 py-2 rounded-pill`}>
                        <span className={`${styles.cricleDot}`}></span>
                        <span className={`mx-2 ${styles.cricleDot}`}></span>
                        مميز
                    </p>
                </div>
                <h2 className="text-white fw-bolder display-3">مقالات مختارة</h2>
                <p className="text-white-50 mt-3">محتوى منتقى لبدء رحلة تعلمك</p>
            </div>
            <Link className={`${styles.link} py-2 px-4 text-white rounded-3`} to={"/blog"}>عرض الكل</Link>
        </div>
        <div className=" mb-3" >
            {cards.map(card => <Card key={card.id} Post={card} /> )}
        </div>
    </div>
</section>
)
}

