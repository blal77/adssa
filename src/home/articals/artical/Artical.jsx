import { Link } from "react-router-dom";
import styles from './Artical.module.css'
export default function Artical(post) {
  return (
    <div className="col-md-6 col-lg-4">
        <Link to={"/blog"} className={`card rounded-4 position-relative ${styles.card}`}>
            <img src={post.image} className="card-img-top" alt={post.title}/>
            <span className={`position-absolute rounded-pill py-1 px-3 text-white ${styles.categ}`}>{post.category}</span>
            <div className="card-body">
                <div className="text-secondary d-flex gap-3">
                    <p>{post.readTime}</p>
                    <p>{post.date}</p>
                </div>
                <h3 className={`${styles.title}`}>{post.title}</h3>
                <p className="text-secondary">{post.title}</p>
            </div>
            <hr className="w-75 text-secondary m-auto"/>
            <div className="d-flex justify-content-between align-items-center px-3 py-1">
                <article className="d-flex gap-3 align-items-center">
                    <img src={post.author.avatar} className={`rounded-circle img-fluid ${styles.img}`} alt={post.author.name} />
                    <div>
                        <h4 className="text-white mb-0 h6 fw-bold">{post.author.name}</h4>
                        <p className="text-secondary">{post.author.role}</p>
                    </div>
                </article>
                <div className={`${styles.icone}`}>
                    <i className="fas fa-arrow-left "></i>
                </div>
            </div>
        </Link>
    </div>
)
}
