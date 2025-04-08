import { useMemo } from "react";

export function DelftViewerEmbed({
	manifest,
	style,
	noCutCorners,
}: {
	noCutCorners?: boolean;
	manifest: string;
	style?: React.CSSProperties;
}) {
	const queryString = useMemo(() => {
		const str = new URLSearchParams({
			manifest: manifest,
			type: "presentation",
		});

		if (noCutCorners) {
			str.append("cut-corners", "false");
		}

		return str.toString();
	}, [manifest, noCutCorners]);

	return (
		<div className="w-full h-full aspect-[1/1]">
			<iframe
				className="w-full h-full border-none"
				src={`https://delft-exhibition-viewer.pages.dev/embed?${queryString}`}
				title="Theseus Viewer"
				style={style}
			/>
		</div>
	);
}
