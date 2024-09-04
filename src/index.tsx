import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties } from 'react';
import clsx from 'clsx';
import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState, OptionType } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [articleParamsState, setArticleParamsState] = useState(defaultArticleState);
	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': articleParamsState.fontFamilyOption.value,
					'--font-size': articleParamsState.fontSizeOption.value,
					'--font-color': articleParamsState.fontColor.value,
					'--container-width': articleParamsState.contentWidth.value,
					'--bg-color': articleParamsState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setAppState={setArticleParamsState} appState={articleParamsState} title='Задайте параметры'/>
			<Article />
		</div>
	);
};

// test

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
