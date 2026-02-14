import { Link } from 'react-router-dom'
import styles from './CatgoryCard.module.css'

export default function CategoryCard({name , count}) {
  return (
    <div className={`col-6 col-lg-3`}>
        <div className={`rounded-4 py-4 px-2 ${styles.card}`}>
            <Link to={"/blog"} className={`${styles.link}`}>
                <span className={`rounded-3 d-block p-2 ${styles.icone}`}><i className='fas fa-sun'></i></span>
                <p className='text-white fw-bold mt-2'>{name}</p>
                <span className='text-secondary'>مقالة {count}</span>
            </Link>
        </div>
    </div>
    
  )
}
