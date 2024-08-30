import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text'
import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';

export const ArticleParamsForm = () => {

	//состояние открытия.закрытия
	const [isOpen, setIsOpen] = useState(false);

	//функция переклюяения состояния
	const OpenParamsForm = () => {
		setIsOpen(prevState => !prevState);
	}
	return (
		<>
		  {/* Передаем функцию и состояние при каждом рендере в кнопку */}
			<ArrowButton onClick={OpenParamsForm} isOpen={isOpen}/> 
			<aside className={clsx(styles.container, isOpen && styles.container_open)}>
				<form className={styles.form}>
				<Text as='h1' size={31} weight={800} uppercase dynamicLite>Задайте параметры</Text>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
