import styles from './Category.module.css'
import {categories} from "../../data/data.json"
import CategoryCard from './CategoryCard/CategoryCard'
export default function Category() {

  
  return (<section className={`py-5 ${styles.sectionCateg}`}>
  <div className="container">
    <div className='text-center mb-5'>
        <div className={`rounded-pill m-auto py-1 px-3 ${styles.categ}`}>
            <span className={`${styles.cricleDot}`}></span>
            <span className={`mx-2 ${styles.cricleDot}`}></span>
            التصنيفات
        </div>
        <h2 className={`text-white ${styles.heading} fw-bolder my-3`}>استكشف حسب الموضوع</h2>
        <p className='text-white-50 fw-medium'>اعثر على محتوى مصمم حسب اهتماماتك</p>
    </div>
    <div className="row g-4">
        {categories.map(categ => <CategoryCard  {...categ} />)}
    </div>
  </div>
  </section>  )
}
