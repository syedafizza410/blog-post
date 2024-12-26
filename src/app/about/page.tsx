"use client";

import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8"
    style={{
      backgroundImage: "url('/pic4.jpg')",
     }}>
      <div className="max-w-4xl mx-auto px-4 text-gray-800 bg-white rounded-lg shadow-lg p-6">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">About Me</h1>
          <p className="text-lg leading-relaxed">
            Hi! My name is <strong>Umme Fizza</strong>. I am a passionate web
            developer with experience in building responsive and dynamic
            websites using modern technologies like HTML, CSS, JavaScript,
            TypeScript, React.js, and Next.js. I am currently a student of the
            <strong>Cloud Applied Generative AI Engineer program</strong> at the
            Governor House and a student of <strong>Autonomous AI Agent Developer</strong> at Piaic
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            My journey into web development started with a curiosity for
            creating engaging user experiences. Over the past two years, I have
            honed my skills in frontend development, focusing on building
            seamless and user-friendly interfaces. I enjoy typing as a hobby and
            am always eager to learn and grow in the ever-evolving field of web
            development.
          </p>
        </section>

        <section>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            About My Blog
          </h1>
          <p className="text-lg leading-relaxed">
            Welcome to <strong>Cats Nature Blog</strong>, a space dedicated to
            exploring the fascinating world of cats. Here, you will find articles
            about their behavior, unique traits. This
            blog is not just a platform to share knowledge but also a way to
            celebrate the adorable and mysterious nature of our feline friends.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            As a creative frontend developer, I have designed this blog to offer a
            visually pleasing and engaging experience for all cat lovers. From
            interesting facts about cats to tips for pet care, this blog aims to
            connect cat enthusiasts worldwide. Whether you are a cat owner,
            admirer, or curious reader, there is something here for everyone.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
