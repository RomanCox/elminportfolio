import {useState} from 'react';

import {Header} from '../../components/header';
import {BurgerMenu} from '../../components/burgerMenu';
import {Footer} from '../../components/footer';

import {Title} from '../../components/title';

import {ContactsPageContainerStyled, TitleContainerStyled} from './ContactsPage.styled.ts';
import {Contacts} from './Contacts.container.tsx';


const ContactsPage = () => {
	const [menuIsShow, setMenuIsShow] = useState<boolean>(false);

	const menuSwitch = () => {
		setMenuIsShow(!menuIsShow);
	};

	return (
		<ContactsPageContainerStyled>
			<Header menuIsShow={menuIsShow} menuSwitch={menuSwitch}/>
			{menuIsShow && <BurgerMenu menuIsShow={menuIsShow}/>}
			<TitleContainerStyled>
				<Title variant='h1' color='#000' text={'Contacts'}/>
			</TitleContainerStyled>
			<Contacts/>
			<Footer/>
		</ContactsPageContainerStyled>
	);
};

export default ContactsPage;
