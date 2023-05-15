import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import LoginForm from "../../components/LoginForm";
import Timer from "../../components/Timer";
import { Button } from "@mui/material";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="this is not important"
          content="The key to this website is row 5 and column 4."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <Timer />
          <Link href={"/Journal"}>
            <Button variant="contained">Journal</Button>
          </Link>
          <LoginForm />
        </div>
      </main>
    </>
  );
}
