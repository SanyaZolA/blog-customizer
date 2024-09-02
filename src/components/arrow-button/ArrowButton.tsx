import arrow from 'src/images/arrow.svg';
import clsx from 'clsx';
import styles from './ArrowButton.module.scss';
import React, { useState } from 'react';XMLDocument

type ArrowButtonProps = {
  onClick: () => void;
	isOpen: boolean;
};

//получение через пропс для нажатия и изменения внешного вида.
export const ArrowButton: React.FC<ArrowButtonProps> = ({ onClick, isOpen }) => {

	//обновления состояния подсветки
	const [isHovered, setIsHovered] = useState(false);

	const handleArrowButtonEnter = () => {
    setIsHovered(true);
  };

	const handleArrowButtonLeave = () => {
    setIsHovered(false);
  };

	//обновления состояния подсветки
	const [isPressed, setIsPressed] = useState(false);

	const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

	const backgroundColor = isPressed ? 'grey' : isHovered ? '#ffd700' : 'black';

	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
			onClick={onClick}
			className={clsx(styles.container, isOpen && styles.container_open)}
			style={{ backgroundColor }} 
			onMouseEnter={handleArrowButtonEnter}
			onMouseLeave={handleArrowButtonLeave}>
			<img src={arrow} alt='иконка стрелочки' className={clsx(styles.arrow, isOpen && styles.arrow_open)} />
		</div>
	);
};
