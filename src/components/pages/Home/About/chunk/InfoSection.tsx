import { FC } from 'react';
import Heading3 from '../../../../widget/Headings/Heading3';

const InfoSection: FC = () => {
  return (
    <div className="fony-bold flex flex-1 flex-col gap-6 pb-10 pl-10 pt-3 text-lg md:text-xl">
      <Heading3 extra="-left-8">
        {' '}
        Hii
        <span className="not-italic"> 👋 </span>
        I' am <span className="text-primary"> Joiner</span>,{' '}
      </Heading3>
      <article className="relative space-y-5 before:block before:-translate-x-8 before:font-mono before:text-lg before:font-normal before:not-italic before:text-base-200 before:content-['<p>'] after:block after:-translate-x-10 after:font-mono after:text-lg after:font-normal after:not-italic after:text-base-200 after:content-['</p>']">
        <p>
          I have worked as a founding engineer and a lead developer in various
          agile teams, and I strive to use my skills and background to develop
          products that are well-crafted and thoughtfully designed. My expertise
          has led me to craft pioneering solutions that foster business
          expansion. One of my standout achievements involves the seamless
          integration of AI capabilities into numerous web3 products. Notably,
          my key contribution has been the development of OneClick DeFi.
          Continually seeking to push the boundaries of what's achievable, I am
          driven to innovate and contribute to this dynamic technological realm.
        </p>
        <p>
          As a full-stack engineer with over 7 years of experience, I have a
          passion for creating web-based software solutions. I can turn
          prototypes and ideas into reality with efficiency and quality, using
          JavaScript and TypeScript frameworks such as React, Next and Node. I
          also have expertise in cloud services such as AWS and Azure.
        </p>

        <p>
          If you're looking for a reliable and skilled Full Stack Developer to
          help you build your website, look no further than me. I'm committed to
          helping my clients achieve their goals and providing exceptional
          service every step of the way.
        </p>
      </article>
    </div>
  );
};
export default InfoSection;
