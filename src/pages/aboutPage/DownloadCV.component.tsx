import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
import CV_ELmin_eng from '../../assets/files/CV_ELmin_eng.pdf';

import {Title} from '../../components/title';

import { DownloadMenuTitleContainer, CVDownloadStyled, CVDownloadMenuContainerStyled } from './AboutPage.styled.ts';

export const DownloadCV = () => {

	return (
		<CVDownloadMenuContainerStyled>
			<DownloadMenuTitleContainer>
				<Title variant={'h2'} color={'#fff'} text={'Choose CV'}/>
			</DownloadMenuTitleContainer>
			{/*<CVDownloadStyled href={'/src/assets/files/CV_ELmin_eng.pdf'} download target={'_blank'}>*/}
			<CVDownloadStyled href={CV_ELmin_eng} download target={'_blank'}>
				<PictureAsPdfRoundedIcon/>
                Download English CV
			</CVDownloadStyled>
			<CVDownloadStyled href={'/src/assets/files/CV_ELmin_rus.pdf'} download target={'_blank'}>
				<PictureAsPdfRoundedIcon/>
                Download Russian CV
			</CVDownloadStyled>
		</CVDownloadMenuContainerStyled>
	);
};
