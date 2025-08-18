function AboutContentSection({ data }) {
  if (!data) return null;
  return (
    <div className="w-[90%] max-w-[1000px] mx-auto mb-8">
      {/* Plain text, background biru, text putih */}
      {data.plainText && (
        <div className="text-white text-[1.1rem] mb-6">
          <pre className="whitespace-pre-wrap font-sans bg-none m-0">
            {data.plainText}
          </pre>
        </div>
      )}

      {/* Container text, background putih */}
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
        <div className="flex flex-col lg:flex-row gap-6 mb-6 items-stretch">
          {/* Kiri: Visi & Misi */}
          <div className="flex flex-col gap-6 flex-1 lg:flex-[2]">
            {/* Visi */}
            {data.visi && (
              <section className="bg-white rounded-xl shadow-md p-6 flex-1">
                <h4 className="font-bold mb-4 text-[#0a3d91]">Visi</h4>
                <p className="text-[#222] text-base m-0">{data.visi}</p>
              </section>
            )}
            {/* Misi */}
            {data.misi && (
              <section className="bg-white rounded-xl shadow-md p-6 flex-1">
                <h4 className="font-bold mb-4 text-[#0a3d91]">Misi</h4>
                <ul className="list-none p-0 m-0">
                  {data.misi.map((m, idx) => (
                    <li key={idx} className="flex items-start mb-3">
                      <span className="inline-block min-w-[28px] min-h-[28px] bg-[#0a3d91] text-white rounded-full text-center font-bold mr-2 text-base leading-[28px]">
                        {idx + 1}
                      </span>
                      <span className="text-[#222] text-base">{m}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
          {/* Kanan: Tujuan */}
          {data.tujuan && (
            <section className="bg-white rounded-xl shadow-md p-6 flex-1 flex flex-col">
              <h4 className="font-bold mb-4 text-[#0a3d91]">Tujuan</h4>
              <ol className="list-decimal pl-5 m-0 text-[#222] text-base flex-1">
                {data.tujuan.map((t, idx) => (
                  <li key={idx} className="mb-3">
                    {t}
                  </li>
                ))}
              </ol>
            </section>
          )}
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
