import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const entryList = [
  {
    title: "动态路由",
    content: "动态页面示例",
    src: "/num/1",
  },
  {
    title: "CSR",
    content: "客户端渲染页面示例",
    src: "/csr",
  },
  {
    title: "SSR",
    content: "服务端渲染示例",
    src: "/ssr",
  },
  {
    title: "SSG",
    content: "静态生成示例",
    src: "/ssg",
  },
  {
    title: "动态SSG",
    content: "动态生成静态页面示例",
    src: "/doc/1",
  },
  {
    title: "ISR",
    content: "增量静态生成",
    src: "/isr",
  },
  {
    title: "魔法渲染",
    content: "getStaticProps",
    src: "/magic",
  },
];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>Next.js!</a>
        </h1>

        <p className={styles.description}>
          默认首页 <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          {entryList.map(({ title, content, src }) => {
            return (
              <Link key={src} href={src} prefetch={true}>
                <a className={styles.card}>
                  <h2>{title} &rarr;</h2>
                  <p>{content}</p>
                </a>
              </Link>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
