import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import RichText from './RichText'

const ArticleCard = ({ article }) => {
	return (
		<article className="shadow my-4 flex-col" key={article.id}>
			<div className="bg-white flex flex-col justify-start p-6">
				<Link href="#" className="text-blue-700 pb-4 font-bold">Technology</Link>
				<Link href={`articles/${article.id}`} className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4">{article.attributes.title}</Link>
				{/* <p className="text-sm pb-3 text-slate-900">
					published {new Date(article.createdAt).toLocaleDateString()}
				</p> */}
				<Link href={`articles/${article.id}`} className=" text-slate-900 pb-6">
					{/* {article.attributes.content} */}
					<RichText richText={article.attributes.content} />
				</Link>
				<Link href={`articles/${article.id}`} className=" text-pink-800 hover:text-black">続きを読む</Link>
			</div>
		</article>
	)
}

export default ArticleCard