import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pinch of Spice LLC. | ピンチオブスパイス合同会社</title>
      </Head>
      <main>
        <Image
          src="/poc.svg"
          width={184}
          height={29}
          alt="pinch of spice logo"
        />

        <Contact />
        <footer>
          <p>Copyright© Pinch of Spice LLC. All Rights Reserved</p>
        </footer>
      </main>
    </>
  );
};

export default Home;
