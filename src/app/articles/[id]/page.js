import React from 'react'
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import RichText from '@/app/components/RichText';

const Articel = async ({ params }) => {
	const query = gql`{
		blog(id:${params.id})  {
		  data {
			id
			attributes {
			  title,
			  content,
			  createdAt
			}
		  }
		}
	  }`;

	const { data } = await getClient().query({
		query,
		context: {
			fetchOptions: {
				next: { revalidate: 5 },
			},
		},
	});//ISR


	const detailArticle = data.blog.data

	return (
		<div className="max-w-3xl mx-auto p-5">
			<h1 className="text-4xl text-center mb-10 mt-10">
				{detailArticle.attributes.title}
			</h1>
			<div className="text-lg leading-relaxed text-justify">
				<RichText richText={detailArticle.attributes.content} />
			</div>
		</div>
	);
}

export default Articel