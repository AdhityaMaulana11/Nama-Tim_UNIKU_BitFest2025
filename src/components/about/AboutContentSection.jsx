
function AboutContentSection({ data }) {
  if (!data) return null;
  return (
    <div style={{ width: '90%', maxWidth: '1000px', margin: '0 auto 2rem auto' }}>
      {/* Plain text, background biru, text putih */}
      {data.plainText && (
        <div style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1.5rem', background: 'none' }}>
          <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', background: 'none', margin: 0 }}>{data.plainText}</pre>
        </div>
      )}
      {/* Container text, background putih, text hitam (untuk tab lain) */}
      {data.containerText && (
        <section style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '2rem', marginBottom: '1.5rem' }}>
          <h3 style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#0a3d91' }}>{data.title}</h3>
          <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', fontSize: '1rem', color: '#222', margin: 0 }}>{data.containerText}</pre>
        </section>
      )}

      {/* Visi, Misi, Tujuan khusus tab visi-misi */}
      {(data.visi || data.misi || data.tujuan) && (
        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', alignItems: 'stretch' }}>
          {/* Kiri: Visi dan Misi */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 2 }}>
            {/* Visi */}
            {data.visi && (
              <section style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.5rem', flex: 1 }}>
                <h4 style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#0a3d91' }}>Visi</h4>
                <p style={{ color: '#222', fontSize: '1rem', margin: 0 }}>{data.visi}</p>
              </section>
            )}
            {/* Misi */}
            {data.misi && (
              <section style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.5rem', flex: 1 }}>
                <h4 style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#0a3d91' }}>Misi</h4>
                <ul style={{ paddingLeft: 0, margin: 0 }}>
                  {data.misi.map((m, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                      <span style={{
                        display: 'inline-block',
                        minWidth: 28,
                        minHeight: 28,
                        background: '#0a3d91',
                        color: '#fff',
                        borderRadius: '50%',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        marginRight: 10,
                        fontSize: '1rem',
                        lineHeight: '28px'
                      }}>{idx + 1}</span>
                      <span style={{ color: '#222', fontSize: '1rem' }}>{m}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
          {/* Kanan: Tujuan */}
          {data.tujuan && (
            <section style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'stretch' }}>
              <h4 style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#0a3d91' }}>Tujuan</h4>
              <ol style={{ paddingLeft: 18, margin: 0, color: '#222', fontSize: '1rem', flex: 1 }}>
                {data.tujuan.map((t, idx) => (
                  <li key={idx} style={{ marginBottom: '0.75rem' }}>{t}</li>
                ))}
              </ol>
            </section>
          )}
        </div>
      )}
      {/* Images */}
      {data.images && data.images.length > 0 && (
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
          {data.images.map((img, idx) => (
            <img key={idx} src={img} alt={`about-img-${idx}`} style={{ maxWidth: '45%', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
          ))}
        </div>
      )}
    </div>
  );
}
export default AboutContentSection;
