import { Link } from "react-router-dom";
import styles from './Posts.module.css'
export default function Posts({posts}) {
// console.log(posts);

        return (
    <div className="col-md-6 col-lg-4">
        <Link to={"/blog"} className={`card rounded-4 position-relative ${styles.card}`}>
            <img src={posts.image} className="card-img-top" alt={posts.title}/>
            <span className={`position-absolute rounded-pill py-1 px-3 text-white ${styles.categ}`}>{posts.category}</span>
            <div className="card-body">
                <div className="text-secondary d-flex gap-3">
                    <p>{posts.readTime}</p>
                    <p>{posts.date}</p>
                </div>
                <h3 className={`${styles.title}`}>{posts.title}</h3>
                <p className="text-secondary">{posts.title}</p>
            </div>
            <hr className="w-75 text-secondary m-auto"/>
            <div className="d-flex justify-content-between align-items-center px-3 py-1">
                <article className="d-flex gap-3 align-items-center">
                    <img src={posts.author.avatar} className={`rounded-circle img-fluid ${styles.img}`} alt={posts.author.name} />
                    <div>
                        <h4 className="text-white mb-0 h6 fw-bold">{posts.author.name}</h4>
                        <p className="text-secondary">{posts.author.role}</p>
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
