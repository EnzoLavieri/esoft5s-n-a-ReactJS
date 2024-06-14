import styles from './header.module.css'

interface HeaderProps{
  titulo: string
}

export function Header({titulo}: HeaderProps) {
  return(
  <header className={styles.header}>
      <h1>{titulo}</h1>
    </header>
    )
}