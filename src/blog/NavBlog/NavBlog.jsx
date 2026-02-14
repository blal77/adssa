
import styles from './NavBlog.module.css';

export default function NavBlog({onClick , isActive, name}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        me-3 rounded-2 py-2 px-3
        ${isActive ? styles.active : styles.link}
      `}
    >
      {name}
    </button>
  );
}