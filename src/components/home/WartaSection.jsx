import React from "react";
import { useNavigate } from "react-router-dom";
import newsTabsData from "../../data/newsTabsData";
import { IoIosArrowRoundForward } from "react-icons/io";

function ForwardButton({ onClick, children }) {
	return (
		<button
              onClick={onClick}
              className="border-2 border-[#0a3d91] bg-white text-[#0a3d91] rounded-full px-5 py-2 font-semibold mb-6 flex items-center gap-2 hover:bg-[#e3eafc] transition"
              style={{ minHeight: 44 }}
            >
              {children || "Lihat Lainnya"}
              <IoIosArrowRoundForward size={24} />
            </button>
	);
}

export default function WartaSection() {
	const navigate = useNavigate();
	const news = newsTabsData[0].items;

	return (
		<section className="w-full py-16 bg-white">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-2xl md:text-3xl font-bold text-center text-[#0A2342] mb-10">
                    WARTA UCIC
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					{news.map((item) => (
						<div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col cursor-pointer hover:shadow-lg transition" onClick={() => navigate(`/warta-ucic/${item.id}`)}>
							<img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
							<div className="p-5 flex flex-col flex-1">
								{item.category && (
									<span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#f5f7fa] text-[#0a3d91] mb-2">
										{item.category}
									</span>
								)}
								<h3 className="font-bold text-[#0a3d91] text-lg mb-2 line-clamp-2">{item.title}</h3>
								<p className="text-[#1976d2] text-sm mb-2 font-semibold">{item.date}</p>
							</div>
						</div>
					))}
				</div>
				<div className="flex justify-center">
					<ForwardButton onClick={() => navigate('/warta-ucic')}>Lihat Lainnya</ForwardButton>
				</div>
			</div>
		</section>
	);
}
