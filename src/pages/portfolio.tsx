import { About, Contact, Hero, Projects } from '@/components/pages/Home';
import SecModal from '@/components/pages/Home/15SecModal';
import Cursor from '@/components/pages/Home/Cursor';
import Navbar from '@/components/widget/Navbar';
import { NextPage } from 'next';
import Head from 'next/head';

const Landing: NextPage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-mono">
      <div className="layout">
        <Head>
          <title>Portfolio - Chandraprakash Darji</title>
        </Head>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
      <Cursor />
    </div>
  );
};

export default Landing;
