import { useForm, ValidationError } from "@formspree/react";
import SuccessfulMailing from "../SuccessfulMailing";

export function FormContact() {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_KEY);

  if (state.succeeded) {
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  }

  return (
    <form className="flex flex-col gap-4 mt-10" onSubmit={handleSubmit}>
      <input name="subject" type="hidden" value="Formulario do Portfolio" />

      <input
        className="bg-[#041A27] rounded-lg border-2 border-[#8CD1FF] text-center p-1"
        type="text"
        id="name"
        name="name"
        placeholder="Digite seu nome"
      />
      <ValidationError field="name" prefix="Name" errors={state.errors} />

      <input
        className="bg-[#041A27] rounded-lg border-2 border-[#8CD1FF] text-center p-1"
        type="email"
        id="email"
        name="email"
        placeholder="Digite seu email"
      />
      <ValidationError field="email" prefix="Email" errors={state.errors} />

      <textarea
        className="bg-[#041A27] rounded-lg border-2 border-[#8CD1FF] h-40 p-2 resize-none text-center"
        placeholder="Digite sua mensagem..."
        id="message"
        name="message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        className="bg-[#8CD1FF] text-black font-bold rounded-lg border-2 border-[#8CD1FF] h-12 hover:bg-[#041A27] hover:text-[#8CD1FF]"
        type="submit"
        disabled={state.submitting}
      >
        Enviar
      </button>

      {state.succeeded && <SuccessfulMailing />}
    </form>
  );
}
