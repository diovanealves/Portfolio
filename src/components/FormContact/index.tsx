import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export function FormContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e: FormEvent) {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };

    if (name === "" || email === " " || message === "") {
      return alert("Preencha todos os campos");
    }

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICEID,
        import.meta.env.VITE_EMAILJS_TEMPLATEID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLICKEY
      )
      .then(
        (res) => {
          alert("Email Enviado com Sucesso");
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("error");
        }
      );
  }

  return (
    <form className="flex flex-col gap-4 mt-10" onSubmit={sendEmail}>
      <input
        className="bg-[#041A27] rounded-lg border-2 border-[#8CD1FF] text-center p-1"
        pattern="^[a-zA-Z]{2,}(?: [a-zA-Z]+){1,}$"
        title="Por favor, insira seu nome completo"
        type="text"
        placeholder="Digite seu nome"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <input
        className="bg-[#041A27] rounded-lg border-2 border-[#8CD1FF] text-center p-1"
        pattern="^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
        title="Por favor, insira um endereço de email válido."
        type="text"
        placeholder="Digite seu email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <textarea
        className="bg-[#041A27] rounded-lg border-2 border-[#8CD1FF] h-40 p-2 resize-none text-center"
        placeholder="Digite sua mensagem..."
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />

      <input
        className="bg-[#8CD1FF] text-black font-bold rounded-lg border-2 border-[#8CD1FF] h-12 hover:bg-[#041A27] hover:text-[#8CD1FF]"
        type="submit"
        value="Enviar"
      />
    </form>
  );
}
