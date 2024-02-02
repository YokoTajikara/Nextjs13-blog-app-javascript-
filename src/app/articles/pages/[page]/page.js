import React from 'react';
import ArticleList from "@/app/components/ArticleList";
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import BasicPagination from "@/app/components/BasicPagination";
import CustomPagination from "@/app/components/CustomPagination";

export default async function page({ params }) {
	const query = gql`
{
    blogs(pagination: { page: ${params.page}, pageSize: 1 },sort: "id:desc")  {
      data {
        id
        attributes {
          title,
          content,
		  createdAt
        }
      },
	  meta {
		pagination {
		  page
		  pageSize
		  total
		  pageCount
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
	});

	const articles = data.blogs.data;

	return (
		<div className="md:flex">
			<section className="w-full md:w-2/3 flex flex-col items-center px-3">
				<ArticleList articles={articles} />
				<BasicPagination meta={data.blogs.meta.pagination} current={params.page} />
				<CustomPagination meta={data.blogs.meta.pagination} current={params.page} />
				<div className="flex items-center py-8">
					<a
						href="#"
						className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center"
					>
						1
					</a>
					<a
						href="#"
						className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center"
					>
						2
					</a>
					<a
						href="#"
						className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3"
					>
						Next <i className="fas fa-arrow-right ml-2"></i>
					</a>
				</div>
			</section>

			<aside className="w-full md:w-1/3 flex flex-col items-center px-3 md:pl-6">
				<div className="bg-white shadow-md rounded p-4 mb-6 mt-4">
					<h3 className="font-bold text-gray-900 mb-2">About Me</h3>
					<p className="text-gray-600">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						varius enim in eros elementum tristique.
					</p>
				</div>
				<div className="bg-white shadow-md rounded p-4 mb-6 mt-4 w-full">
					<h3 className="font-bold text-gray-900 mb-2">Category</h3>
					<ul className="text-gray-600 mt-2">
						<li>
							<a href="#">Technology</a>
						</li>
						<li>
							<a href="#">Automotive</a>
						</li>
						<li>
							<a href="#">Finance</a>
						</li>
						<li>
							<a href="#">Sports</a>
						</li>
					</ul>
				</div>
			</aside>
		</div>
	);
}
