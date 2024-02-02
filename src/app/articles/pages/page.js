"use client";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/navigation'

export default function BasicPagination() {
	const router = useRouter()

	const handleChange = (event, value) => {
		alert(value);
		//ページ遷移
		router.push(`/articles/pages/${value}`);
		router.refresh()
	};

	return (
		<Stack spacing={2}>
			<Pagination count={10} />
			<Pagination count={10} defaultPage={6} color="primary" onChange={handleChange} />
			<Pagination count={10} color="secondary" />
			<Pagination count={10} disabled />
		</Stack>
	);
}