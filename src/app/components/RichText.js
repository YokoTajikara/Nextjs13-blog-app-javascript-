import React from "react";
import ReactHtmlParser from "react-html-parser";

const RichText = ({ richText }) => {
	return (
		<div className="richtext">
			{/* richTextをHTMLに変換して表示 */}
			{ReactHtmlParser(richText)}
		</div>
	);
};

export default RichText;
