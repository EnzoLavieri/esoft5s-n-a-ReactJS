import styles from './card.module.css'

interface CardSectionProps{
    h2: string
    children: React.ReactNode
}

export function CardSection({h2, children}: CardSectionProps) {
  return(
  <section className={styles.section}>
          <h2>{h2}</h2>
          {children}
    </section>
    )
}