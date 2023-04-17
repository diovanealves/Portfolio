import { FormContact } from "../FormContact";

export function Contact() {
  return (
    <section className="w-3/4 mx-auto text-center mt-32" id="Contato">
      <h1 className="text-[#8CD1FF] text-3xl font-bold">Vamos conversar!</h1>
      <p className="w-3/4 mx-auto text-base my-4">
        A minha caixa de entrada está sempre aberta. Caso tenha um duvida ou
        apenas queira me dizer algo, envie-me uma mensagem no formulario abaixo.
      </p>

      <FormContact />
    </section>
  );
}
