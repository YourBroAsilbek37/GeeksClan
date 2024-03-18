import Header from "@/components/3page/header";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Apteka</title>
      </Head>

      <Navbar />
      <Header />
    </>
  );
}
