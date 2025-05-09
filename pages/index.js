import Head from "next/head";
import { Fragment } from "react";
import Hero from "../components/UI/Hero";
import Work from "../components/UI/Work";
import About from "../components/UI/About";
import Projects from "../components/UI/Projects";
import Tools from "../components/UI/Tools";
import Contact from "../components/UI/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        {/* <title>Shakil Ahmed</title>
        <meta data-react-helmet="true" name="description" content="Online software development portfolio." />
        <meta data-react-helmet="true" property="og:title" content="Shakil Ahmed| Full Stack Software Engineer"></meta>
        <meta data-react-helmet="true" property="og:description" content="Online software development portfolio."></meta>
        <meta data-react-helmet="true" property="og:type" content="website"></meta>
        <meta property="og:url" content="YOUR_URL"></meta>
        <meta property="og:image" content="YOUR_IMAGE_URL"></meta>
        <meta data-react-helmet="true" name="twitter:card" content="summary"></meta>
        <meta data-react-helmet="true" name="twitter:creator" content="@dariansampare"></meta>
        <meta data-react-helmet="true" name="twitter:title" content="Darian Sampare | Full Stack Software Engineer"/>
        <meta data-react-helmet="true" name="twitter:description" content="Online software development portfolio."></meta> */}

        {/* <!-- Primary Meta Tags --> */}
        <title>Shakil Ahmed</title>
        <meta name="title" content="Shakil Ahmed | Portfolio 📃" />
        <meta
          name="description"
          content="Online software development portfolio."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ahmed-shakil.netlify.app/" />
        <meta property="og:title" content="Shakil Ahmed | Portfolio 📃" />
        <meta
          property="og:description"
          content="Online software development portfolio."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/hawktech-cloud/image/upload/v1669712926/Portfolio_nilyjm.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          data-react-helmet="true"
          name="twitter:creator"
          content="@dariansampare"
        ></meta>
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Shakil Ahmed | Portfolio 📃" />
        <meta
          property="twitter:description"
          content="Online software development portfolio."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/hawktech-cloud/image/upload/v1669712926/Portfolio_nilyjm.png"
        />
      </Head>
      <Fragment>
        <Hero />
        <Work />
        <Projects />
        <About />
        <Tools />
        <Contact />
      </Fragment>
    </div>
  );
}
