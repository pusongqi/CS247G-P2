import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import LoginForm from "../../components/LoginForm";
import Timer from "../../components/Timer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>My legacy</title>
        <meta
          name="I knew you had the engineering instinct of a Stanford student. But do you also know how the coordinates of the pixels on a browser are different from the coordinates in math?"
          content="(0,3), Satoshi's class year, (11,7), Bitcoin's halving time, (4,4)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          {/* <Timer /> */}
          <LoginForm />
        </div>
      </main>
    </>
  );
}
