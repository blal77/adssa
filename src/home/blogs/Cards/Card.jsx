import styles from "./card.module.css"
export default function Card({Post}) {
  console.log(Post.author.avatar);
  
  return (<>
  <div className={`row g-4 rounded-4 mt-4 ${styles.card}`}>
    <div className={`col-md-6 mt-0 px-0`}>
        <article className="h-100">
          <img src={Post.image} className="img-fluid rounded-end-4 h-100" alt={Post.title}/>
        </article>
        </div>
        <div className={`col-md-6 mt-0 p-5`}>
            <div className="mb-3">
                <span className={`mx-3 ${styles.catg} rounded-pill py-1 px-2`}>{Post.category}</span>
                <span className="text-secondary">{Post.readTime}</span>
            </div>
            <div className="card-body mb-5">
                <h3 className={` ${styles.title}`}>{Post.title}</h3>
                <p className="text-secondary py-3">{Post.excerpt}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <article className="d-flex align-items-center gap-2">
                <img src={Post.author.avatar} className="img-fluid rounded-circle w-25" alt={Post.author.name} />
                <div>
                  <p className="text-white mb-0">{Post.author.name}</p>
                  <span className="text-secondary">{Post.date}</span>
                </div>
              </article>
              <span className={`${styles.raed}`}>اقرأ المقال</span>
            </div>
        </div>
  </div>
  </>
)}
