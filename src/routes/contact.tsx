import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin } from "react-icons/Bi";

export const Contact = () => {
  return (
    <main className="bg-gray-200 dark:bg-zinc-900">
      <section className="flex justify-center items-center py-4 m-auto max-w-7xl h-screen">
        <div className="text-white bg-zinc-950 p-4 rounded-xl w-1/2 flex flex-col gap-4">
          <h2 className="text-3xl font-bold">Contato</h2>
          <p className="w-2/3">
            Estou sempre à disposição para novos desafios e colaborações empolgantes. Se você está procurando alguém para se juntar à sua equipe, contribuir para um projeto interessante ou
            simplesmente deseja trocar ideias, fique à vontade para entrar em contato. Tenho paixão pelo que faço e estou comprometido em oferecer resultados excepcionais. Vamos trabalhar juntos para
            transformar suas ideias em realidade. Estou ansioso para conversar e encontrar maneiras de criar algo incrível juntos!
          </p>
          <div className="flex flex-col gap-1">
            <BiLogoLinkedin size="1.7rem" />
            <BiLogoGithub size="1.7rem" />
            <BiLogoGmail size="1.7rem" />
          </div>
        </div>
      </section>
    </main>
  );
};
