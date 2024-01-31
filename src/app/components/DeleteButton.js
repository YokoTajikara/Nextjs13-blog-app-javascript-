"use client";
import React from 'react'
import { useRouter } from "next/navigation";

const DeleteButton = ({ id }) => {
	const router = useRouter();

	const handleDelet = async () => {
		//await deleteArticle(id)
		const API_URL = process.env.NEXT_PUBLIC_API_URL;
		const res = await fetch(`${API_URL}/api/blog/${id}`, {
			method: "DELETE",
		});

		console.log(res)
		router.push("/");
		router.refresh();

	}

	return (
		<div
			className="bg-red-500 hover:bg-red-600 rounded-md py-2 px-5 inline cursor-pointer"
			onClick={handleDelet}>削除</div>
	)
}

export default DeleteButton