export default function Contact() {
  return (
    <div className="flex flex-col items-center">
      <span className="text-2xl text-[#8cd1ff] font-bold">Contato</span>
      <span className="text-3xl font-bold mt-2 mb-6">Vamos Conversar!</span>
      <ul className="max-w-3xl w-11/12">
        <li>
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
              className="bg-[#041A27] rounded-lg border-2 border-[#8cd1ff] text-center p-1"
            ></input>
            <input
              placeholder="E-mail"
              type="email"
              name="email"
              required
              className="bg-[#041A27] rounded-lg border-2 border-[#8cd1ff] text-center p-1"
            ></input>
            <textarea
              placeholder="Mensagem"
              name="mensagem"
              required
              className="bg-[#041A27] rounded-lg border-2 border-[#8cd1ff] h-40 p-2 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-[#8cd1ff] text-[#000] font-bold rounded-lg border-2 border-[#8cd1ff] h-12 hover:bg-[#041A27] hover:text-[#DFF6FF]"
            >
              Enviar
            </button>
          </form>
        </li>
      </ul>
    </div>
  );
}
