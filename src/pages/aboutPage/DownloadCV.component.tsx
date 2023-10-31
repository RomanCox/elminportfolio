import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
import CV_ELmin_eng from '../../assets/files/CV_ELmin_eng.pdf';
import CV_ELmin_rus from '../../assets/files/CV_ELmin_rus.pdf';

import {Title} from '../../components/title';

import { DownloadMenuTitleContainer, CVDownloadStyled, CVDownloadMenuContainerStyled } from './AboutPage.styled.ts';

export const DownloadCV = () => {

	return (
		<CVDownloadMenuContainerStyled>
			<DownloadMenuTitleContainer>
				<Title variant={'h2'} color={'#fff'} text={'Choose CV'}/>
			</DownloadMenuTitleContainer>
			<CVDownloadStyled href={CV_ELmin_eng} download={'CV_ELmin_eng.pdf'} target={'_blank'}>
				<PictureAsPdfRoundedIcon/>
                Download English CV
			</CVDownloadStyled>
			<CVDownloadStyled href={CV_ELmin_rus} download={'CV_ELmin_rus.pdf'} target={'_blank'}>
				<PictureAsPdfRoundedIcon/>
                Download Russian CV
			</CVDownloadStyled>
		</CVDownloadMenuContainerStyled>
	);
};
