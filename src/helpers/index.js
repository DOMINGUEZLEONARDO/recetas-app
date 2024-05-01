export const getFrequentTags = (articles) => {
	const tagCounts = {};

	articles.forEach(article => {
		article.taxonomy.tags.forEach(tag => {
			const { slug, text } = tag;
			if (!tagCounts[slug]) {
					tagCounts[slug] = { slug, text, count: 0 };
			}
			tagCounts[slug].count++;
		});
	});

	const tagArray = Object.values(tagCounts);
	tagArray.sort((a, b) => b.count - a.count);
	const topTags = tagArray.slice(0, 10);

	return topTags
};

export const getFormattedDate = (displayDate) => {
	const date = new Date(displayDate);
  
	const day = date.getDate();

	const month = [
		"enero", "febrero", "marzo", "abril", "mayo", "junio",
		"julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
	];

	const nameMonths = month[date.getMonth()];

	const year = date.getFullYear();

	const formattedDate = `${day} de ${nameMonths} de ${year}`;
	
	return formattedDate;
}