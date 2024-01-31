"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const CreateBlogPage = () => {
	const router = useRouter()
	const [id, setId] = React.useState('')
	const [title, setTitle] = React.useState('')
	const [content, setContent] = React.useState('')
	const [loading, setLoading] = React.useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true)
		//await createArticle(id, title, content)
		const API_URL = process.env.NEXT_PUBLIC_API_URL;

		await fetch(`${API_URL}/api/blog`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id,
				title,
				content,
			}),
		});//ISR

		setLoading(false)
		router.push("/")
		router.refresh()
	}

	return (
		<div className='min-h-screen py-8 px-4 md:12'>
			<h2 className='text-2xl font-bold mb-4'>ブログ新規作成</h2>
			<form className="bg-slate-200 p-6 rounded shadow-lg" onSubmit={handleSubmit}>
				<div className="mb-4">
					<label className="text-gray-700 text-sm font-bold mb-2">URL</label>
					<input
						type="text"
						className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						onChange={(e) => setId(e.target.value)}
					/>
				</div>
				<div className="mb-4">
					<label className="text-gray-700 text-sm font-bold mb-2">タイトル</label>
					<input
						type="text"
						className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="mb-4">
					<label className="text-gray-700 text-sm font-bold mb-2">本文</label>
					<textarea
						className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						onChange={(e) => setContent(e.target.value)}
					/>
				</div>
				<button
					type="submit"
					className={`py-2 px-4 border rounded-md ${loading
						? "bg-orange-300 cursor-not-allowed"
						: "bg-orange-400 hover:bg-orange-500"
						} text-white font-semibold focus:outline-none`}
					disabled={loading}
				>
					作成
				</button>
			</form>
		</div>
	)
}

export default CreateBlogPage