export function PyramidEmbed({ src }: { src: string }) {
	return (
		<iframe
			title="Pyramid tiles"
			width="100%"
			className="aspect-[2/1.2]"
			frameBorder="0"
			src={`https://observablehq.com/embed/@allmaps/tile-pyramid?cells=viz&url=${src}`}
		/>
	);
}
