import styles from "./Blog.module.css"
import {categories, posts} from "./../data/data.json"
import NavBlog from "./NavBlog/NavBlog"
import Posts from "./Posts/Posts"
import { useState } from "react"
export default function Blog() {
  const [btnCategor, setBtnCategor] = useState("all")
  const [search, setSearch] = useState("")
  const filterCateg =  posts.filter(post => post.category === btnCategor)
  let dataPosts = btnCategor === "all"? posts.slice(0,6) : filterCateg.slice(0,6)
  const filterSearch = posts.filter( item => item.title.toLowerCase().includes(search.toLowerCase())).slice(0,6)
  if(search){
    dataPosts = filterSearch
  }

  function nameCatgory(nameCat) {
    console.log(nameCat.name);
    setBtnCategor(nameCat.name)
  }
  return (
    <section className='py-5 bg-black'>
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-4">
            <div className="mb-3 mb-lg-0">
              <input type="text" value={search}
              onChange={e => setSearch(e.target.value)}
              className={`py-3 w-50 px-4 rounded-2 ${styles.search}`} placeholder="ابحث في المقالات..." />
            </div>
          </div>
          <div className="col-lg-8 text-start">
            <div>
              <button
                    type="button"
                    onClick={() => {
                      nameCatgory("all")
                      setBtnCategor("all")
                    }}
                    className={`
                      me-3 rounded-2 py-2 px-3
                      ${btnCategor === "all" ? styles.active : styles.link}
                    `}
                  >
                    جميع المقالات
                  </button>
              {categories.map(catg => <NavBlog
              key={catg.name}
              isActive={btnCategor === catg.name}
              onClick={() => nameCatgory(catg)}
              name={catg.name} />)}
            </div>
          </div>
          <hr className="text-secondary my-3"/>
        </div>
        <div className="row g-5">
          {dataPosts.map(post=> <Posts key={post.id} posts={post}/>)}
        </div>
      </div>
    </section>
  )
}