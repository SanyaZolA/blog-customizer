import arrow from 'src/images/arrow.svg';
import clsx from 'clsx';
import styles from './ArrowButton.module.scss';

type ArrowButtonProps = {
  onClick: () => void; // Функция, которая вызывается при клике
	isOpen: boolean;
};
																												//получение через пропс для нажатия и изменения внешного вида.
export const ArrowButton: React.FC<ArrowButtonProps> = ({ onClick, isOpen }) => {

	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			onClick={onClick} 
			className={clsx(styles.container, isOpen && styles.container_open)}>
			<img src={arrow} alt='иконка стрелочки' className={clsx(styles.arrow, isOpen && styles.arrow_open)} />
		</div>
	);
};
