import {
	VideoBGContainerStyled,
	BlackoutStyled,
	VideoBGStyled,
} from './HomePage.styled.ts';

export const VideoBG = () => {
	const playListId = 'PLhslMUXu5Wn40l0qjPXcSG_n02flPYuam';

	return (
		<VideoBGContainerStyled>
			<VideoBGStyled width={'100%'} height={'100%'}
				src={`https://www.youtube.com/embed/videoseries?si=x5PaofW5ltx4mqwiS&amp;list=${playListId}&mode=opaque&wmode=transparent&autoplay=1&loop=1&controls=0&modestbranding=0&rel=0&autohide=1&showinfo=0&color=white&iv_load_policy=2&theme=light&&mute=1`}
				title={'YouTube video player'}
				allow={'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; loop;'}
				allowFullScreen
			/>
			<BlackoutStyled/>
		</VideoBGContainerStyled>
	);
};

