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
				sx={{
					'& .MuiPaginationItem-root': {
						color: '#ffffff', // ボタンのテキスト色を変更
						fontSize: '1.25rem', // テキストの大きさを変更
						backgroundColor: '#d2691e',
						borderRadius: 'unset', // ボタンの角を丸くする
						width: '3rem', // ボタンの幅を変更
						height: '3rem', // ボタンの高さを変更
					},
					'& .MuiPaginationItem-root:hover': {
						opacity: '0.8', // ボタンにカーソルを合わせた時の透明度を変更
					},
					'& .MuiPaginationItem-root.MuiPaginationItem-ellipsis': {
						backgroundColor: 'unset', // ボタンにカーソルを合わせた時の透明度を変更
					},
					'& .Mui-selected': {
						backgroundColor: 'lightblue', // 選択されたページのボタンの背景色を変更
						color: 'black', // 選択されたページのボタンのテキスト色を変更
					},
					'& .Mui-selected:hover': {
						backgroundColor: 'lightblue',
						opacity: '1',
						poinerEvents: 'none',
					},
					'& .MuiPagination-ul': {
						gap: '1rem',
					}
				}}
			/>
		</Stack>
	);
}