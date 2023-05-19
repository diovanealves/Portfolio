import { useEffect, useState } from "react";

export default function SuccessfulMailing() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#041A27] text-black flex justify-center items-center p-8">
      <div className="bg-white py-16 px-8 rounded-3xl">
        <video
          src="./src/assets/successfullySend.mp4"
          muted
          autoPlay
          className="w-64 inline"
        />
        <h1 className="text-4xl font-bold">
          Menssagem enviada <br /> com sucesso!
        </h1>
      </div>
    </div>
  );
}
