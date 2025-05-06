import RestoPhoto from "../assets/interieurresto.jpg";

const Horaire = () => {
  return (
    <section className=" mt-26 ">
      <h2 className=" font-title font-bold text-3xl text-white tracking-wider  text-center">
        Horaires d'ouverture
      </h2>
      <p className=" text-white font-title text-xl text-center mt-4">
        {" "}
        Nous vous recevons dans notre restaurant de 70 places
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 mt-20 items-center justify-items-center gap-4">
        <img
          src={RestoPhoto}
          className=" object-cover rounded-3xl w-96 h-96 border border-white shadow-2xl"
          alt="restaurant"
        />
        <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center text-[#8b0000] mb-4">
            Horaires d'ouverture
          </h2>
          <table className="w-full text-left table-auto border-collapse">
            <thead>
              <tr className="bg-yellow-100 text-[#8b0000]">
                <th className="px-4 py-2">Jour</th>
                <th className="px-4 py-2">Horaires</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-t">
                <td className="px-4 py-2 font-medium">Lundi</td>
                <td className="px-4 py-2 text-red-600">Fermé</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-medium">Mardi - Vendredi</td>
                <td className="px-4 py-2">11h30 - 14h00 / 19h00 - 22h30</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-medium">Samedi - Dimanche</td>
                <td className="px-4 py-2">11h30 - 14h00 / 19h00 - 23h30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Horaire;
