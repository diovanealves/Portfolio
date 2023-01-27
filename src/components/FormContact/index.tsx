export function FormContact() {
  return (
    <div>
      <form
        action="https://formsubmit.co/alvdiovane@gmail.com"
        className="flex flex-col gap-4 mb-10"
        method="POST"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="www.diovanealves.github.io/Portfolio/"
        />

        <input
          placeholder="Nome"
          type="text"
          name="name"
          required
          className="bg-background rounded-lg border-2 border-highlight text-center p-1"
        ></input>
        <input
          placeholder="E-mail"
          type="email"
          name="email"
          required
          className="bg-background rounded-lg border-2 border-highlight text-center p-1"
        ></input>
        <textarea
          placeholder="Mensagem"
          name="mensagem"
          required
          className="bg-background rounded-lg border-2 border-highlight h-40 p-2 resize-none text-center"
        ></textarea>
        <button
          type="submit"
          className="bg-highlight text-black font-bold rounded-lg border-2 border-highlight h-12 hover:bg-background hover:text-highlight"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
