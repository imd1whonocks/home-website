import Head from 'next/head';
import styles from './index.module.scss';
const links = [
  {
    name: 'Resume',
    key: 'resume',
    href: 'https://media-exp1.licdn.com/dms/document/C4E2DAQGAaTcDDN98TA/profile-treasury-document-pdf-analyzed/0?e=1603011600&v=beta&t=ZR7iErUGzwDvhWhaSAxim6z5Qe8-um_342bGPbPSo44',
  },
  {
    name: 'LinkedIn',
    key: 'linkedin',
    href: 'https://www.linkedin.com/in/sksingh24/',
  },
  {
    name: 'Github',
    key: 'github',
    href: 'https://github.com/imd1whonocks',
  },
  {
    name: 'Twitter',
    key: 'twitter',
    href: 'https://twitter.com/IMD1WhoNocks',
  }
]
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shashank Singh | Frontend Engineer</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.profile}>
          <img src={'/favicon.png'} />
        </div>
        <div className={styles.details}>
          <h1 className={styles.name}>Shashank Singh</h1>
          <h3 className={styles.desc}>Senior Software Engineer @ Toppr</h3>
        </div>
        <div className={styles.links}>
          {links.map(link => {
            return (
              <a key={link.key} href={link.href} target='_blank' >{link.name}</a>
            )
          })}
        </div>
      </main>
    </div>
  )
}
