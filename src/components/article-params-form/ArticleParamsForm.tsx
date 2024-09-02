import { useState, useEffect, SyntheticEvent } from 'react';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';
import { Select } from 'components/select/Select'
import { RadioGroup } from 'components/radio-group';
import { defaultArticleState, fontSizeOptions, AppState, backgroundColors, fontFamilyOptions, fontColors, contentWidthArr } from 'src/constants/articleProps';
import { Separator } from 'components/separator'
import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';
import storybookStyles from '../story-decorator/StoryDecorator.module.scss';

type ArticleParamsProps =  {
	title: string,
	setAppState: any
	appState: AppState
}

export const ArticleParamsForm = ({ setAppState, appState, title }: ArticleParamsProps) => {

	//создание начального состояния открытия.закрытия окна
	const [isOpen, setIsOpen] = useState(false);

	//Переключения состояния открытия.закрытия
	const OpenParamsForm = () => {
		setIsOpen(prevState => !prevState);
		
	}

	//кнопка выбора и передача значения в пропс
	const submitClick = (e: SyntheticEvent) => {
		setAppState(optionSelected);
		e.preventDefault();
	};

	//кнопка сброса
	const resetClick = () => {
		setAppState(defaultArticleState);
	}

	//создание начального состояния выбора опции
	const [optionSelected, setOptionSelected] = useState(appState);

	return (
		<>
		  {/* Передаем состояние при каждом рендере в кнопку */}	
			<ArrowButton onClick={OpenParamsForm} isOpen={isOpen}/> 
			<aside className={clsx(styles.container, isOpen && styles.container_open)}>
				<form className={styles.form} onSubmit={submitClick} onReset={resetClick}>
						
						<Text as='h1' size={31} weight={800} uppercase>{title}</Text>
						<div className={storybookStyles.storybookContainer}></div>
						<Select title={'Шрифт'}
										options={fontFamilyOptions}
										selected={optionSelected.fontFamilyOption}
										onChange={(fontFamilyOption) => setOptionSelected({ ...optionSelected, fontFamilyOption })} />
						<div className={storybookStyles.storybookContainer}></div>
						<RadioGroup title={'Размер шрифта'}
										options={fontSizeOptions} name={'fontSize'}
										selected={optionSelected.fontSizeOption}
										onChange={(fontSizeOption) => setOptionSelected({ ...optionSelected, fontSizeOption })} />
						<div className={storybookStyles.storybookContainer}></div>
						<Select title={'Цвет шрифта'}
										options={fontColors}
										selected={optionSelected.fontColor}
										onChange={(fontColor) => setOptionSelected({ ...optionSelected, fontColor })} />
						<div className={storybookStyles.storybookContainer}></div>
						<Separator/>
						<div className={storybookStyles.storybookContainer}></div>
						<Select title={'Цвет фона'}
										options={backgroundColors}
										selected={optionSelected.backgroundColor}
										onChange={(backgroundColor) => setOptionSelected({ ...optionSelected, backgroundColor })} />
						<div className={storybookStyles.storybookContainer}></div>
						<Select title={'Ширина контента'}
										options={contentWidthArr}
										selected={optionSelected.contentWidth}
										onChange={(contentWidth) => setOptionSelected({ ...optionSelected, contentWidth })} />
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};