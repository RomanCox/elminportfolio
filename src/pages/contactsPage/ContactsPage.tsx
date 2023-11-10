import {Title} from '../../components/title';

import {ContactsPageContainerStyled, TitleContainerStyled} from './ContactsPage.styled.ts';
import {Contacts} from './Contacts.container.tsx';

const ContactsPage = () => <ContactsPageContainerStyled>
			<TitleContainerStyled>
				<Title variant='h1' color='#000' text={'Contacts'}/>
			</TitleContainerStyled>
			<Contacts/>
		</ContactsPageContainerStyled>

export default ContactsPage;
