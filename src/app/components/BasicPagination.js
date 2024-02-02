"use client";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/navigation'


export default function BasicPagination({ meta, current }) {
	const router = useRouter()
	//pageのデフォルト値を1にする
	current = current || 1;
	const handleChange = (event, value) => {
		//ページ遷移
		router.push(`/articles/pages/${value}`);
		router.refresh()
	};

	return (
		<Stack>
			<Pagination
				count={meta.pageCount}
				defaultPage={Number(current)}
				color="primary"
				onChange={handleChange}
				size="large"
			/>
		</Stack>
	);
}