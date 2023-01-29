import Carousel from '@/components/Carousel'
import MainJoke from '@/components/MainJoke'
import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.HomeContainer}>
        <Carousel />
        <MainJoke />
  </div>
  )
}
