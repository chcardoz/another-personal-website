interface ReadingTimeReturn {
	time: string;
	words: number;
}

const readingTime = (text: string): ReadingTimeReturn => {
	const wordsPerMinute = 200;
	const words = text.split(/\s+/g).length;
	const minutes = Math.ceil(words / wordsPerMinute);
	return {
		time: `${minutes} min read`,
		words
	};
};

export default readingTime;
