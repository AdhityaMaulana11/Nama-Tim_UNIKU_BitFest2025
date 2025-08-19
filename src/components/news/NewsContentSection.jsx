import { Link } from "react-router-dom";

export default function NewsContentSection({ data }) {
  if (!data || !data.items) return null;

  return (
    <div className="w-[90%] max-w-[1200px] mx-auto mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {data.items.map((item, idx) => (
          <div
            key={item.id || idx}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition"
          >
            <Link to={`/warta-ucic/${item.id}`}>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-40 object-cover"
                />
              )}
              <div className="p-5 flex flex-col flex-1">
                {/* Category label */}
                {item.category && (
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#f5f7fa] text-[#0a3d91] mb-2">
                    {item.category}
                  </span>
                )}
                <h3 className="font-bold text-[#0a3d91] text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-[#1976d2] text-sm mb-2 font-semibold">
                  {item.date}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
