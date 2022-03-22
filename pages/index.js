import Head from "next/head";
import { Header } from "../components/Header";
import { Skills } from "../components/Skills";
import { Timeline } from "react-twitter-widgets";
import { Button } from "../components/Button";
import { Projects } from "../components/Projects";
import { motion, useViewportScroll } from "framer-motion";
import { Footer } from "../components/Footer";
import MessageForm from "../components/MessageForm";

export default function Home() {
  const { scrollYProgress } = useViewportScroll();

  return (
    <div>
      <Head>
        <title>fullStackJosh | Full Stack Developer</title>
        <meta
          name="Full Stack Josh"
          content="Josh aka Full Stack Josh is a Full Stack web developer from London, UK. I use the latest technology to build robust, cost effective, fully scalable web applications for all types of organisations"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-another-blue">
        <section className="flex flex-col justify-center text-center group">
          <div className="flex flex-col justify-center text-center mx-6 mt-20 cursor-pointer lg:mx-44">
            <h2
              id="about"
              className="flex justify-center hero-feature-text text-5xl mb-20 drop-shadow-md text-black-100"
            >
              About
            </h2>
            <article className="justify-center">
              <p className="text-lg font-medium text-left">
                Firstly, thanks so much for visiting my site. It means a lot!{" "}
                <br />
                <br />
                Where do i start? I am a{" "}
                <strong className="font-extrabold">
                  passionate full stack developer
                </strong>
                . I work for a technology company on the south coast and
                consider myself extremely lucky to be doing what i love.
                <br />
                <br />
                Im a bootcamp grad. I went from zero knowledge in web dev to
                employed full stack in 6 months.
                <br />
                <br />
                If you&#39;re on a similar path, or just love talking web dev,
                please, feel free to reach out!
                <br />
                <br />I absolutely love writing code, building products, solving
                problems and learning new things. I regularly invest in new
                courses to make sure i keep my skills relevant, and am always
                open to new, freelance projects.
              </p>
              <Button
                title="Lets Chat"
                link="https://www.instagram.com/fullstackjosh/"
              />
            </article>
          </div>
        </section>
        <article>
          <Skills />
        </article>
        <section>
          <Projects />
        </section>
        <div className="flex flex-col justify-center text-center mt-20 mx-6 md:hidden lg:mx-44">
          <h2 className="hero-feature-text text-5xl mb-20 drop-shadow-md text-black-100">
            Twitter
          </h2>
          <article className="shadow-2xl rounded-3xl mx-6">
            <Timeline
              dataSource={{
                sourceType: "profile",
                screenName: "fullstackjoshua",
              }}
              options={{ height: "500", width: "600" }}
            />
          </article>
        </div>
        {/* <div className="flex flex-col mt-20 items-center">
          <h2 className="hero-feature-text text-center text-5xl drop-shadow-md text-black-100" id="contact">
            Contact Me
          </h2>
          <MessageForm />
        </div> */}
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
