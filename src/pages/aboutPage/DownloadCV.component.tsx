import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';

import {Title} from '../../components/title';

import { DownloadMenuTitleContainer, CVDownloadStyled, CVDownloadMenuContainerStyled } from './AboutPage.styled.ts';

export const DownloadCV = () => {

	return (
		<CVDownloadMenuContainerStyled>
			<DownloadMenuTitleContainer>
				<Title variant='h2' color='#fff' text='Choose CV'/>
			</DownloadMenuTitleContainer>
			<CVDownloadStyled href='/assets/files/CV_ELmin_eng.pdf' download>
				<PictureAsPdfRoundedIcon/>
                Download English CV
			</CVDownloadStyled>
			<CVDownloadStyled href='/assets/files/CV_ELmin_rus.pdf' download>
				<PictureAsPdfRoundedIcon/>
                Download Russian CV
			</CVDownloadStyled>
		</CVDownloadMenuContainerStyled>
	);
};
