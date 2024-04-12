import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { BsFillRocketTakeoffFill, BsGithub } from "react-icons/bs";

interface ProjectCardProps {
  title: string;
  textDescription: string;
  linkProject: string;
  printProject: string;
  githubProject: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  const closeOnOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", closeOnOutsideClick);

    return () => {
      window.removeEventListener("mousedown", closeOnOutsideClick);
    };
  }, []);

  const closeAnimation = {
    opacity: 0,
    scale: 0.5,
  };

  const openAnimation = {
    opacity: 1,
    scale: 1,
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="p-4 bg-black rounded-lg flex flex-col justify-between cursor-pointer w-64 h-80 text-white"
        onClick={toggleModal}
      >
        <h2 className="text-center font-semibold text-2xl mb-6 h-10">{props.title}</h2>

        <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ ease: "easeOut", duration: 0.3 }} className="bg-white text-black p-2 rounded-lg mt-6 font-semibold">
          {t("projects.button")}
        </motion.button>
      </motion.div>
      {isModalOpen && (
        <div className={`fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 px-10 backdrop-blur overflow-y-auto`}>
          <motion.div
            initial={closeAnimation}
            animate={isModalOpen ? openAnimation : closeAnimation}
            transition={{ duration: 0.4 }}
            className="bg-white p-6 rounded-lg max-w-6xl overflow-y-auto"
            ref={modalRef}
          >
            <div className="flex justify-end mb-4">
              <button className="text-black text-3xl rounded-full " onClick={toggleModal}>
                <MdClose />
              </button>
            </div>

            <section className="flex flex-col gap-5 justify-between mt-4">
              <h2 className="text-center font-black text-5xl sm:text-3xl">{props.title}</h2>
              <img src={props.printProject} alt="" className="w-full" />
              <p className="text-justify">{props.textDescription}</p>

              <div className="flex justify-center gap-8 text-lg">
                <a href={props.linkProject} target="_blank">
                  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-3 rounded-lg bg-black text-white flex justify-center items-center gap-2 w-40 sm:w-full">
                    Deploy <BsFillRocketTakeoffFill size="1.3rem" />
                  </motion.button>
                </a>
                <a href={props.githubProject} target="_blank">
                  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-3 rounded-lg bg-black text-white flex justify-center items-center gap-2 w-40 sm:w-full">
                    Github <BsGithub size="1.3rem" />
                  </motion.button>
                </a>
              </div>
            </section>
          </motion.div>
        </div>
      )}
    </>
  );
};
