import { FormContact } from "../../components/FormContact";

export function Contact() {
  return (
    <div className="flex flex-col items-center mb-9" id="Contact">
      <h1 className="text-3xl text-highlight font-bold">Contato</h1>
      <p className="text-2xl font-semibold mt-2 mb-6">Vamos Conversar!</p>
      <div className="max-w-7xl w-10/12">
        <FormContact />
      </div>
    </div>
  );
}
