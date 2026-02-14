import SectionArtical from "./articals/SectionArtical";
import SectionCard from "./blogs/SectionCard";
import Category from "./Category/Category";

// import posts from "../data/data.json"
export default function Home() {
    
  return (
    <section>
      <SectionCard/>
      <Category/>
      <SectionArtical/>
    </section>
)
}
