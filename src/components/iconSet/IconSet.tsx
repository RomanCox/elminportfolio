import linkedInWEBP from '../../assets/icons/linkedin.webp';
import linkedInPNG from '../../assets/icons/linkedin.png';
import telegramWEBP from '../../assets/icons/telegram.webp';
import telegramPNG from '../../assets/icons/telegram.png';
import instagramWEBP from '../../assets/icons/instagram.webp';
import instagramPNG from '../../assets/icons/instagram.png';
import behanceWEBP from '../../assets/icons/behance.webp';
import behancePNG from '../../assets/icons/behance.png';

import {ImageStyled, SocialLinkContainerStyled, SocialLinkStyled} from './IconSet.styled.ts';

export const IconSet = () => {
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

    return (
        <>
            {socials.map(social =>
                <SocialLinkContainerStyled key={social.id}>
                    <SocialLinkStyled title={`link to ${social.title}`} href={social.link}>
                        <picture>
                            <source type={'image/webp'} srcSet={social.iconWEBP}/>
                            <source type={'image/png'} srcSet={social.iconPNG}/>
                            <ImageStyled src={social.iconWEBP} alt={social.alt} width={'22px'} height={'22px'}/>
                        </picture>
                    </SocialLinkStyled>
                </SocialLinkContainerStyled>
            )}
        </>
    );
};
