export default function AboutMe() {
  return (
    <div className="flex flex-wrap items-center justify-around gap-6">
      <img
        src="https://avatars.githubusercontent.com/u/87160050?v=4"
        className="rounded-full max-w-xs w-2/4"
        alt="Foto de Perfil Github"
      />
      <div className="flex flex-col ml-4">
        <span className="text-3xl font-bold text-[#8CD1FF]">Sobre Mim.</span>
        <span className="text-lg">
          Me chamo Diovane Alves, mas pode me chamar como “Deluxy”. Prazer!
        </span>
        <span className="text-lg">
          Fazendo a Graduação em Análise e Desenvolvimento de Sistemas pela
          Unicesumar
        </span>
        <span className="text-lg">
          Interesses em Desenvolvimento Full Stack com React, React Native,
          NodeJS.
        </span>
      </div>
    </div>
  );
}
