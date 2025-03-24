import { useState } from "react";

const matchesRegex = /^https:\/\/id\.rijksmuseum\.nl\/(\d+)$/;

export function Rijksmuseum() {
	// 1. Validate url: https://id.rijksmuseum.nl/200109794
	// 2. Make into: https://sammeltassen-rijks.web.val.run/200109794
	const [url, setUrl] = useState("https://id.rijksmuseum.nl/200109794");

	const id = url.match(matchesRegex)?.[1];
	const iiifManifest = `https://sammeltassen-rijks.web.val.run/${id}`;

	return (
		<div>
			<div style={{ display: "flex", gap: 10, alignItems: "center" }}>
				<label style={{ fontWeight: "bold" }} htmlFor="rijksmuseum">
					Paste URL
				</label>
				<input
					style={{ border: "2px solid #ddd", flex: 1, padding: "3px 6px" }}
					id="rijksmuseum"
					type="text"
					value={url}
					onChange={(e) => setUrl(e.target.value)}
				/>
			</div>
			<div>
				{id ? (
					<div style={{ display: "flex", gap: 10, alignItems: "center" }}>
						<strong style={{ fontWeight: "bold" }}>Manifest URL:</strong>
						<a
							style={{ color: "#007bff", textDecoration: "underline" }}
							href={iiifManifest}
							target="_blank"
							rel="noopener noreferrer"
						>
							{iiifManifest}
						</a>
						<a
							style={{ color: "#007bff", textDecoration: "underline" }}
							href={`https://theseusviewer.org/?iiif-content=${iiifManifest}`}
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
