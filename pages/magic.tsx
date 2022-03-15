import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const MagicPage: NextPage = ({ title }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>数据获取方式之getInitialProps</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          数据获取方式
          <p>getStaticProps</p>
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>
            getInitialProps
            会在服务端渲染时执行，也会在客户端渲染时执行​，当页面通过页面刷新等直接形式访问时，会触发
            Nextjs 使用服务端渲染的方式返回页面数据​ 此时 getInitialProps
            会在服务端执行，浏览器端不会执行​，当页面通过浏览器端路由跳转的形式访问时（如浏览器前进后退），该页面渲染不会触发
            Nextjs 服务端渲染​ 此时页面渲染前仍会触发 getInitialProps
            方法，只不过执行时在浏览器端。所以实际上 getInitialProps
            方法会根据当前页面渲染时的端侧不同，自主地选择在 Node 端还是 Client
            端执行​
          </code>
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>{title} &rarr;</h2>
            <h3>说明&rarr;</h3>
            <p>
              因为是双端执行，所以需要尤为小心地使用仅一端存在的
              API，如：document、window 等
              因为是双端执行，数据获取需要某些时候考虑如何取用户状态如服务端侧可以使用
              ctx.req/ctx.res
            </p>
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

MagicPage.getInitialProps = () => {
  // console.log(arguments);
  return { title: "注意点" };
};

export default MagicPage;
