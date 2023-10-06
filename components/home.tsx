"use client";
import Typewriter from "typewriter-effect";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Presentation() {
  return (
    <section className=" mx-auto">
      <div className="flex flex-row items-center justify-between mx-10">
        <div className="flex flex-col gap-10 w-[100vh]">
          <h1 className="scroll-m-20 text-4xl text-left font-extrabold tracking-tight lg:text-7xl">
            Bonjour 👋🏼 ,<br />
            Je suis
            <span className="text-sky-500"> Alexandre Dissi,</span>
            <br />
            <Typewriter
              options={{
                delay: 50,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter

                  .typeString("Un Developpeur Fullstack")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Un Developpeur Front-End")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Un Developpeur Back-End")
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          </h1>
        </div>

        <div className="p-2 bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 rounded-full">
          <div className="rounded-full overflow-hidden w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 xl:w-96 xl:h-96">
            <img
              src="me.png"
              alt="Profil picture of Alexandre Dissi"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="w-12/12 bg-secondary">
        <p className="text-justify mt-10 mx-20 p-6 text-xl md:text-xl ">
          Bonjour, je m&apos;appelle Alexandre Dissi, j&apos;ai 24 ans et je
          suis développeur web. J&apos;ai suivi deux formations, l&apos;une de
          développeur web et l&apos;autre de concepteur-développeur
          d&apos;applications, qui m&apos;ont permis d&apos;acquérir un large
          éventail de compétences. Ce portfolio met en avant mes compétences en
          matière de design et de développement front-end. N&apos;hésitez pas à
          explorer mon portfolio pour découvrir mes projets et mes réalisations.
          J&apos;ai travaillé sur diverses technologies web telles que
          JavaScript, PHP , GO , NodeJS et des frameworks comme React, Next JS,
          VueJS , Symfony et Laravel. J&apos;accorde une grande importance à
          l&apos;expérience utilisateur et à la création d&apos;interfaces
          esthétiques et conviviales. Si vous avez des questions ou souhaitez
          discuter de collaborations potentielles, n&apos;hésitez pas à me
          contacter. Je suis ouvert aux opportunités de travail et toujours prêt
          à relever de nouveaux défis. Je vous remercie de votre visite et de
          l&apos;intérêt que vous portez à mon travail.
          <br />
          <Link href={"/CV.pdf"} target="_blank" className="underline">
            Voir mon CV
          </Link>
        </p>
      </div>
      <div className="mt-10 flex flex-row justify-between mx-10 ">
        <li className="text-red-600">
          <span className="text-primary">
            Status : Recherche d&apos;alternance
          </span>
        </li>
        <Button asChild>
          <Link href="/contact">Contacter moi</Link>
        </Button>
      </div>
    </section>
  );
}
