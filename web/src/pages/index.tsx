import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NexOrganize</title>
        <meta name="description" content="Modern CRM for freelancers and agencies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.nexorganize}>NexOrganize</span>
        </h1>

        <p className={styles.description}>
          Modern, cross-platform CRM for freelancers and agencies
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Client Management &rarr;</h2>
            <p>Store contacts, track communication, and manage relationships.</p>
          </div>

          <div className={styles.card}>
            <h2>Project Tracking &rarr;</h2>
            <p>Organize projects, milestones, and tasks efficiently.</p>
          </div>

          <div className={styles.card}>
            <h2>Invoicing &rarr;</h2>
            <p>Create, send, and track invoices and payments.</p>
          </div>

          <div className={styles.card}>
            <h2>Dashboard &rarr;</h2>
            <p>Visual overview of your business activity.</p>
          </div>
        </div>
      </main>
    </div>
  )
}