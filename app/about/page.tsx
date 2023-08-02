import React from 'react'
import styles from './about.module.scss'

export default function AboutPage() {
    return (
        <main className={styles.AboutPage}>
            <h1>About Page</h1>
            <section className={styles.CardGrid}>
                <div className={styles.Card}>
                    <h3>Card Title 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quod eligendi! Assumenda numquam natus aliquid minima quae? Minima quos inventore, quibusdam quas harum architecto deserunt nesciunt ex omnis doloremque eaque.</p>
                </div>
                <div className={styles.Card}>
                    <h3>Card Title 2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quod eligendi! Assumenda numquam natus aliquid minima quae? Minima quos inventore, quibusdam quas harum architecto deserunt nesciunt ex omnis doloremque eaque.</p>
                </div>
                <div className={styles.Card}>
                    <h3>Card Title 3</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quod eligendi! Assumenda numquam natus aliquid minima quae? Minima quos inventore, quibusdam quas harum architecto deserunt nesciunt ex omnis doloremque eaque.</p>
                </div>
                <div className={styles.Card}>
                    <h3>Card Title 4</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quod eligendi! Assumenda numquam natus aliquid minima quae? Minima quos inventore, quibusdam quas harum architecto deserunt nesciunt ex omnis doloremque eaque.</p>
                </div>
            </section>
        </main>
    )
}
