import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import docList from "../util/docs";

export async function getStaticProps() {
  // 在构建时将接收到 `posts` 参数
  return { props: { docInfo: docList[0] } };
}

const SSGPage: NextPage = ({ docInfo }: any) => {
  const { title, author, content } = docInfo;
  const [text, setText] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setText(" + CSR");
    }, 1000);
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>SSG测试页面</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          SSG{text}
          <p>getStaticProps</p>
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>
            编译时调用getStaticProps，并把对应的数据传递给组件渲染成一张完整页面，再保存为一张静态页面
          </code>
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>{title} &rarr;</h2>
            <h3>{author} &rarr;</h3>
            <p>{content}</p>
          </a>
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

export default SSGPage;
