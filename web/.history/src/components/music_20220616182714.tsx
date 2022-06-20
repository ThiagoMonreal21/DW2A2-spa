export function Music() {
    return (
        <div className="player">
            <iframe width="auto" height="auto" src="https://www.youtube.com/embed/MYxAiK6VnXw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe width="auto" height="auto" src="https://www.youtube.com/embed/kpRGNxqv6Wk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <button className="bg-violet-500 rounded-full px-3 h-12 text-white flex items-center group">Play</button>
        </div>
    );
}