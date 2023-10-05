import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-zinc-900 darkMode-effect px-5 h-20 pb-4">
      <section className="flex justify-between gap-1 items-center flex-wrap m-auto max-w-7xl text-black dark:text-white pt-4 ">
        <p className="font-sans font-semibold">© 2023 Felipe Santos</p>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/felipesantosmarcelino/" target="_blank">
            <BsLinkedin size="1.6rem" />
          </a>
          <a href="https://github.com/felipesantos5" target="_blank">
            <BsGithub size="1.6rem" className="hover:text-zinc-950 dark:hover:text-gray-400" />
          </a>
        </div>
      </section>
    </footer>
  );
};
