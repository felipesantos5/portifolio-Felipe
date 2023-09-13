import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-zinc-900">
      <section className="flex justify-between items-center py-4 m-auto max-w-7xl text-black dark:text-white">
        <p className="font-semibold">© 2023 Felipe Santos</p>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/felipesantosmarcelino/" target="_blank">
            <BsLinkedin size="1.8rem" />
          </a>
          <a href="https://github.com/felipesantos5" target="_blank">
            <BsGithub size="1.8rem" />
          </a>
        </div>
      </section>
    </footer>
  );
};
