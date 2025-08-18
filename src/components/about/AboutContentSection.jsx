function AboutContentSection({ data }) {
  if (!data) return null;
  return (
    <div className="w-[90%] max-w-[1200px] mx-auto mb-8">
      {/* Plain text */}
      {data.plainText && (
        <div className="text-white text-[1.1rem] mb-6">
          <pre className="whitespace-pre-wrap font-sans bg-none m-0">
            {data.plainText}
          </pre>
        </div>
      )}

      {/* Container text */}
      {data.containerText && (
        <section className="bg-white rounded-xl shadow-md p-8 mb-6">
          <h3 className="font-bold mb-4 text-[#0a3d91]">{data.title}</h3>
          <pre className="whitespace-pre-wrap font-sans text-base text-[#222] m-0">
            {data.containerText}
          </pre>
        </section>
      )}

      {/* Visi, Misi, Tujuan */}
      {(data.visi || data.misi || data.tujuan) && (
        <div className="w-full mx-auto mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            {/* Kiri: Visi & Misi */}
            <div className="flex flex-col gap-6 lg:flex-[1.2]">
              {/* Visi */}
              {data.visi && (
                <section className="bg-white rounded-xl shadow-md p-6">
                  <h4 className="font-bold text-xl text-[#0a3d91] mb-3 border-b border-gray-300 pb-2">
                    Visi
                  </h4>
                  <p className="text-[#222] text-base leading-relaxed italic">
                    "{data.visi}"
                  </p>
                </section>
              )}

              {/* Misi */}
              {data.misi && (
                <section className="bg-white rounded-xl shadow-md p-6">
                  <h4 className="font-bold text-xl text-[#0a3d91] mb-3 border-b border-gray-300 pb-2">
                    Misi
                  </h4>
                  <ul className="space-y-4">
                    {data.misi.map((m, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#0a3d91] text-white font-bold mr-3 shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-[#222] text-base leading-relaxed">
                          {m}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Kanan: Tujuan */}
            {data.tujuan && (
              <section className="bg-white rounded-xl shadow-md p-6 lg:flex-[1.2]">
                <h4 className="font-bold text-xl text-[#0a3d91] mb-3 border-b border-gray-300 pb-2">
                  Tujuan
                </h4>
                <ol className="list-decimal pl-6 space-y-3 text-[#222] text-base leading-relaxed">
                  {data.tujuan.map((t, idx) => (
                    <li key={idx}>{t}</li>
                  ))}
                </ol>
              </section>
            )}
          </div>
        </div>
      )}

      {/* Images */}
      {data.images && data.images.length > 0 && (
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-6">
          {data.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`about-img-${idx}`}
              className="max-w-full sm:max-w-[45%] rounded-xl shadow-md object-cover"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default AboutContentSection;
