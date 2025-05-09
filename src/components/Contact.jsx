import { useState } from "react";
const Contact = () => {
  const [name, setName] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [messageForm, setMessageForm] = useState(false);
  return (
    <div
      id="contact"
      className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 mt-40 text-white font-title"
    >
      {/* Formulaire à gauche */}
      {!messageForm ? (
        <form className="bg-white max-w-[600px] text-black rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#8b0000]">
            Contactez-nous
          </h2>
          <div className="flex flex-col gap-4">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              className="border border-gray-300 rounded p-2"
            />

            <label htmlFor="prenom">Prénom</label>
            <input
              type="text"
              id="prenom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              name="prenom"
              className="border border-gray-300 rounded p-2"
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              className="border border-gray-300 rounded p-2"
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="border border-gray-300 rounded p-2"
            ></textarea>

            <button
              onClick={(e) => {
                e.preventDefault();
                setMessageForm(true);
              }}
              type="submit"
              className="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition"
            >
              Envoyer
            </button>
          </div>
        </form>
      ) : (
        <div className="bg-white max-w-[600px] text-black rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#8b0000]">
            Merci de nous avoir contacté{" "}
            <span className="text-[#8b0000]">
              {" "}
              {name} {prenom}
            </span>
            .!
          </h2>
          <p className="text-center">
            Nous vous répondrons dans les plus brefs délais sur votre email
            <span className="text-[#8b0000]"> {email} </span>.
          </p>
        </div>
      )}

      {/* Informations à droite */}
      <div className="flex flex-col justify-center gap-4">
        <h2 className="text-2xl font-semibold">Adresse</h2>
        <p>123 Rue de la Gastronomie, Paris, France</p>

        <h3 className="text-2xl font-semibold mt-6">
          Réservation & Renseignements
        </h3>
        <p className="underline underline-offset-2">+33 1 23 45 67 89</p>

        <p className="mt-10 text-lg italic">
          Nous vous accueillons avec le sourire dans une ambiance chaleureuse et
          conviviale, inspirée des traditions africaines.
        </p>
      </div>
    </div>
  );
};

export default Contact;
