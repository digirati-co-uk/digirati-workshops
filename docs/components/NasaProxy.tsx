import { useState } from "react";
import { TheseusEmbed } from "./TheseusEmbed";

export function NasaProxy() {
	const [url, setUrl] = useState("Docked STS-132 Atlantis");
	const [search, setSearch] = useState("Docked STS-132 Atlantis");

	const urlEncoded = encodeURIComponent(search);
	const iiifCollection = `https://nasa.stephen.wf/search/${urlEncoded}/1`;

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Handle form submission logic here
		setSearch(url);
	};

	return (
		<div>
			<form onSubmit={onSubmit} className="flex gap-3 items-center mb-4">
				<label style={{ fontWeight: "bold" }} htmlFor="nasa_search">
					Enter a search term
				</label>
				<input
					style={{ border: "2px solid #ddd", flex: 1, padding: "3px 6px" }}
					id="nasa_search"
					type="text"
					value={url}
					onChange={(e) => setUrl(e.target.value)}
				/>
				<button className="border font-bold py-1 px-4 rounded" type="submit">
					Search
				</button>
			</form>
			<div className="p-2 bg-gray-50 rounded mb-4">
				{url ? (
					<div className="flex flex-col gap-2">
						<div className="flex gap-4">
							<strong style={{ fontWeight: "bold" }}>Collection URL:</strong>
							<a
								style={{ color: "#007bff", textDecoration: "underline" }}
								href={iiifCollection}
								target="_blank"
								rel="noopener noreferrer"
							>
								{iiifCollection}
							</a>
						</div>
						<a
							style={{ color: "#007bff", textDecoration: "underline" }}
							href={`https://theseusviewer.org/?iiif-content=${iiifCollection}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							View in Theseus Viewer
						</a>
					</div>
				) : (
					<div>Invalid URL</div>
				)}

				<TheseusEmbed iiif-content={iiifCollection} />
			</div>
		</div>
	);
}
