import {type ReactNode, useEffect, useState} from 'react';

import {
	ModalWrapperStyled,
} from './Modal.styled.ts';

export interface ModalPropsType {
    children: ReactNode;
    closeModal: () => void;
    modalActive: boolean;
}

export const Modal = ({children, closeModal, modalActive}: ModalPropsType) => {
	const [isAnimation, setIsAnimation] = useState<boolean>(false);

	const closeHandler = () => {
		setIsAnimation(false);
		setTimeout(closeModal, 300);
	};

	useEffect(() => {
		if (modalActive) {
			setIsAnimation(true);
		}
	}, [modalActive]);

	return (
		<ModalWrapperStyled $isAnimation={isAnimation} onClick={closeHandler}>
			{children}
		</ModalWrapperStyled>
	);
};
