import { Post } from './post';
import { Header } from './components/header';
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/sidebar';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Paulo Saluceste"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Post
            author="Paulo Saluceste"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </main>
      </div>
    </div>
  )
}
