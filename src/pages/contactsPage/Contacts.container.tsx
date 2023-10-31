import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import {Title} from '../../components/title';
import photo from '../../assets/images/avatar.png';
import linkedInWEBP from '../../assets/icons/linkedin.webp';
import linkedInPNG from '../../assets/icons/linkedin.png';
import telegramWEBP from '../../assets/icons/telegram.webp';
import telegramPNG from '../../assets/icons/telegram.png';
import instagramWEBP from '../../assets/icons/instagram.webp';
import instagramPNG from '../../assets/icons/instagram.png';
import behanceWEBP from '../../assets/icons/behance.webp';
import behancePNG from '../../assets/icons/behance.png';
import facebookWEBP from '../../assets/icons/facebook.webp';
import facebookPNG from '../../assets/icons/facebook.png';

import {
	AllContactsContainerStyled, SocialsContainerStyled, PhotoAndSocialsContainerStyled, SocialStyled, SocialIconStyled,
	LabelStyled, PhotoContainerStyled, PhotoStyled, ContactsWrapperStyled, ContactsTitleContainerStyled,
	ContactsContainerStyled, ContactContainerStyled, ContactLabelStyled, ContactStyled,
} from './ContactsPage.styled.ts';

export const Contacts = () => {

	const socials = [
		{
			id: 0,
			title: 'LinkedIn',
			iconWEBP: linkedInWEBP,
			iconPNG: linkedInPNG,
			link: 'https://www.linkedin.com/in/elminkaraev',
			alt: 'LinkedIn logo',
		},
		{
			id: 1,
			title: 'Telegram',
			iconWEBP: telegramWEBP,
			iconPNG: telegramPNG,
			link: 'https://t.me/karaevelmin',
			alt: 'Telegram logo',
		},
		{
			id: 2,
			title: 'Instagram',
			iconWEBP: instagramWEBP,
			iconPNG: instagramPNG,
			link: 'https://www.instagram.com/karaevelmin',
			alt: 'Instagram logo',
		},
		{
			id: 3,
			title: 'Behance',
			iconWEBP: behanceWEBP,
			iconPNG: behancePNG,
			link: 'https://www.behance.net/elminkaraev',
			alt: 'Behance logo',
		},
		{
			id: 4,
			title: 'Youtube',
			iconWEBP: linkedInWEBP,
			iconPNG: linkedInPNG,
			link: 'https://www.youtube.com/channel/UC3w6lpvEkOH6LDl0m_YJrUw',
			alt: 'Youtube logo',
		},
	];
	const contacts = [
		{
			id: 0,
			title: 'Location',
			icon: '',
			link: 'https://maps.app.goo.gl/bT1R5uYjQgqdUFuF8',
			label: 'Minsk, Belarus',
		},
		{
			id: 1,
			title: 'Email',
			icon: '',
			link: 'mailto:karaevelmin@gmail.com',
			label: 'karaevelmin@gmail.com',
		},
		{
			id: 2,
			title: 'Phone | Whatsapp | Viber',
			icon: '',
			link: 'tel:+375445989809',
			label: '+375445989809',
		},
		{
			id: 3,
			title: 'Telegram',
			iconWEBP: telegramWEBP,
			iconPNG: telegramPNG,
			link: 'https://t.me/karaevelmin',
			label: '@karaevelmin',
		},
		{
			id: 4,
			title: 'Facebook',
			icon: '../src/assets/icons/facebook.webp',
			iconWEBP: facebookWEBP,
			iconPNG: facebookPNG,
			link: 'https://www.facebook.com/profile.php?id=100080225493177',
			label: 'Elmin Karaev',
		},
	];

	return (
		<AllContactsContainerStyled>
			<PhotoAndSocialsContainerStyled>
				<PhotoContainerStyled>
					<PhotoStyled src={photo}/>
				</PhotoContainerStyled>
				<SocialsContainerStyled>
					{socials.map(social =>
						<SocialStyled key={social.id} href={social.link} target={'_blank'} rel={'noopener nofollow noreferrer'} title={`link to ${social.title}`}>
							<picture>
								<source type={'image/webp'} srcSet={social.iconWEBP}/>
								<source type={'image/png'} srcSet={social.iconPNG}/>
								<SocialIconStyled src={social.iconWEBP} width={30} height={30}/>
							</picture>
							<LabelStyled>
								{social.title}
							</LabelStyled>
						</SocialStyled>,
					)}
				</SocialsContainerStyled>
			</PhotoAndSocialsContainerStyled>
			<ContactsWrapperStyled>
				<ContactsTitleContainerStyled>
					<Title variant='h3' color='#000' text='Info'/>
				</ContactsTitleContainerStyled>
				<ContactsContainerStyled>
					{contacts.map(contact =>
						<ContactContainerStyled key={contact.id}>
							<ContactLabelStyled>
								{contact.title === 'Location' ? <LocationOnOutlinedIcon/>
									: contact.title === 'Email' ? <EmailIcon/>
										: contact.title === 'Phone | Whatsapp | Viber' ? <PhoneIcon/>
											: contact.title === 'Telegram' ? <TelegramIcon/>
												: contact.title === 'Facebook' ? <FacebookIcon/>
													: <ConnectWithoutContactIcon/>
								}
								{contact.title}
							</ContactLabelStyled>
							<ContactStyled href={contact.link} target={'_blank'} rel={'noopener nofollow noreferrer'}>
								{contact.label}
							</ContactStyled>
						</ContactContainerStyled>,
					)}
				</ContactsContainerStyled>
			</ContactsWrapperStyled>
		</AllContactsContainerStyled>
	);
};
