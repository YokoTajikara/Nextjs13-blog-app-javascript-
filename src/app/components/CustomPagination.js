"use client";
import * as React from 'react';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import "@/app/globals.css";
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import { Box, Button, ThemeProvider, createTheme } from '@mui/system';

const List = styled('ul')({
	listStyle: 'none',
	padding: 0,
	margin: 0,
	display: 'flex',
});

export default function UsePagination({ meta, current }) {
	/* 
	 "meta": {
			"pagination": {
			  "page": 2,
			  "pageSize": 5,
			  "total": 12,
			  "pageCount": 3
			}
		  }
	*/

	const router = useRouter()
	//pageのデフォルト値を1にする
	current = current || 1;

	const { items } = usePagination({
		count: meta.pageCount,
		page: current
	});

	console.log(items);

	return (
		<nav>
			<List className='page-list'>
				{items.map(({ page, type, selected, ...item }, index) => {
					let children = null;

					if (type === 'start-ellipsis' || type === 'end-ellipsis') {
						children = '…';
					} else if (type === 'page') {
						children = (
							<Link href={`/articles/pages/${page}`} disabled={page == current}>
								<button
									type="button"
									className={`page-list_item ${page == current ? 'current' : ''}`}
									style={{
										fontWeight: selected ? 'bold' : undefined,
									}}
									{...item}
									//onClick={(e) => handleClick(e, page)}
									//currentページ以外はクリックできる
									disabled={page == current}
								>
									{page}
								</button>
							</Link>
						);
					} else if (type === 'previous') {
						children = (
							<Link href={`/articles/pages/${(Number(current) - 1)}`} disabled={current == 1}>
								<button
									type="button"
									{...item}
									//onClick={(e) => handleClick(e, (Number(current) - 1))}
									//currentページが1の場合はクリックできない
									disabled={current == 1}
									className={`page-list_item ${current == 1 ? 'disabled' : ''}`}
								>&lt;</button>
							</Link>
						);
					} else if (type === 'next') {
						children = (
							<Link href={`/articles/pages/${(Number(current) + 1)}`} disabled={page == meta.pageCount}>
								<button
									type="button"
									{...item}
									//onClick={(e) => handleClick(e, (Number(current) + 1))}
									//currentページが最後のページの場合はクリックできない
									disabled={page == meta.pageCount}
									className={`page-list_item ${current == meta.pageCount ? 'disabled' : ''}`}
								>&gt;</button>
							</Link>
						);
					} else {
						children = (
							<Link href={`/articles/pages/${page}`} disabled={page == current}>
								<button type="button" {...item} className={type} >
									{type}
								</button>
							</Link>
						);
					}

					return <li key={index}>{children}</li>;
				})}
			</List>
		</nav>
	);
}