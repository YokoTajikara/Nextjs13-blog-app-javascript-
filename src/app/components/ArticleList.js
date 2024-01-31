import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleList = ({ articles }) => {
	return (
		<div>
			{articles.map((article) => (
				<ArticleCard article={article} key={article.id} />
			))}

		</div>
	)
}

export default ArticleList