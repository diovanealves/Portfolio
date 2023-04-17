export function AboutMe() {
  return (
    <section
      className="max-w-4xl w-11/12 bg-[#052131] rounded-lg mx-auto mt-5 py-5 px-4"
      id="QuemSou"
    >
      <div className="flex flex-wrap items-center gap-7">
        <img
          src="https://github.com/diovanealves.png"
          className="rounded-lg max-w-xs w-full"
          alt="Minha foto de perfil no github"
        />

        <div className="flex-1">
          <h1 className="text-[#8CD1FF] text-4xl font-bold mb-10">Sobre mim</h1>
          <span className="text-lg leading-tight">
            Meu nome e Diovane mais conhecido como "Deluxy" nos jogos e tenho 20
            anos. Adoro construir Aplicações Web. <br />
            Quando estou no meu tempo livre, estou codando em algum projeto
            pessoal.
          </span>
        </div>
      </div>
    </section>
  );
}
