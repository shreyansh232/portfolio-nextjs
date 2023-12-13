import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 bg-gradient-to-b from-teal-300 to-orange-300 bg-clip-text text-transparent">Who I Am</h2>
          <p className="py-2 bg-gradient-to-tl from-cyan-600 to-rose-500 bg-clip-text text-transparent">
            In my journey as a developer, I've honed my skills in constructing
            mobile-responsive front-end UI applications, where the seamless
            interaction with APIs and backend technologies is paramount. My
            passion for staying at the forefront of technological advancements
            is a driving force in my professional growth. While I've established
            a solid foundation in HTML, CSS, Javascript, and React, I understand
            that the ever-evolving landscape demands versatility. This
            philosophy has led me to be a quick learner, enabling me to embrace
            and adapt to new tech stacks as project requirements dictate.
            Expanding my toolkit, I've incorporated Next.js, a powerful React
            framework that enhances the developer experience and optimizes
            performance. Chakra UI brings a component library for React that
            facilitates the creation of accessible and visually appealing
            interfaces. Tailwind CSS, with its utility-first approach, has
            become another valuable asset in my skill set, enabling rapid and
            efficient styling.
          </p>
          <p className="py-2 bg-gradient-to-tl from-cyan-600 to-rose-500 bg-clip-text text-transparent">
            My belief in the art of software development extends beyond the
            confines of a single language. Instead, I champion the philosophy of
            selecting the most fitting tools for each unique task. This approach
            allows me to deliver not only functional but also efficient and
            elegant solutions tailored to the specific needs of each project. In
            essence, my commitment as a developer lies not just in mastering a
            specific language but in embracing the dynamic nature of technology
            and choosing the best tools available to craft innovative and
            impactful solutions.
          </p>
          <Link href="/#projects">
            <p className="py-2 bg-gradient-to-b from-teal-300 to-orange-300 bg-clip-text text-transparent underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
