import { useState } from "react";

export function NasaProxy() {
	const [url, setUrl] = useState("Docked STS-132 Atlantis");

	const urlEncoded = encodeURIComponent(url);
	const iiifCollection = `https://nasa.stephen.wf/search/${urlEncoded}/1`;

	return (
		<div>
			<div style={{ display: "flex", gap: 10, alignItems: "center" }}>
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
			</div>
			<div className="p-2 bg-gray-50 rounded mb-4">
				{url ? (
					<div className="flex flex-col gap-2">
						<div className="flex gap-4">
							<strong style={{ fontWeight: "bold" }}>Manifest URL:</strong>
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
			</div>
		</div>
	);
}
