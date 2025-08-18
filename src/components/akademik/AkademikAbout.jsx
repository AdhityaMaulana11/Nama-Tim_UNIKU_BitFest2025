import aboutImg from "../../assets/Gedung-UCIC-2.png";

export default function AkademikAbout({ fakultasName }) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <h2 className="text-yellow-500 font-semibold">Sekilas Tentang</h2>
      <h3 className="text-3xl md:text-4xl font-bold text-[#0a2540] mt-2">
        {fakultasName}
      </h3>

      <div className="mt-6 flex flex-col md:flex-row md:items-center gap-10">
        <div className="md:w-2/3 space-y-4 text-gray-700 leading-relaxed">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            voluptas molestias dicta nam sunt voluptatibus deserunt, id
            quibusdam non magnam, odio assumenda rem doloribus sequi aut, iusto
            sapiente? Ut suscipit fuga incidunt quos sit sapiente rem
            praesentium, nisi voluptatem maxime vero soluta iusto cumque. Ipsum
            sint quaerat ad architecto nulla.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            mollitia totam, excepturi in ad placeat explicabo, quisquam
            perferendis numquam quaerat, animi vel nam magnam voluptate saepe?
            Itaque consectetur, magni ipsa quas accusantium incidunt
            reprehenderit minima labore, dignissimos molestiae, aperiam nesciunt
            quaerat aut suscipit consequuntur impedit esse delectus reiciendis
            nihil quae. Harum neque laboriosam impedit iusto a vero error
            debitis reprehenderit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            illum! Eaque ab minus pariatur a, temporibus praesentium iure
            doloribus recusandae illo odit aspernatur excepturi consectetur,
            voluptatum velit quisquam accusamus maiores?
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <img
            src={aboutImg}
            alt={`Sekilas ${fakultasName}`}
            className="rounded-xl shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
