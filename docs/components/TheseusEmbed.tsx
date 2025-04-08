import { useMemo } from "react";

export function TheseusEmbed({
	"iiif-content": manifest,
	style,
	dark,
	cover,
}: {
	dark?: boolean;
	cover?: boolean;
	"iiif-content": string;
	style?: React.CSSProperties;
}) {
	const queryString = useMemo(() => {
		const str = new URLSearchParams({
			"iiif-content": manifest,
		});

		if (dark) {
			str.append("theme", "dark");
		}
		if (cover) {
			str.append("image-cover", "true");
		}

		return str.toString();
	}, [manifest]);

	return (
		<div className="w-full h-full aspect-[3/2]">
			<iframe
				className="w-full h-full border-none"
				src={`https://theseusviewer.org/embed?${queryString}`}
				title="Theseus Viewer"
				style={style}
			/>
		</div>
	);
}
