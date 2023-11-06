import {
	VideoBGContainerStyled,
	BlackoutStyled,
	VideoBGStyled,
} from './HomePage.styled.ts';

export const VideoBG = () => {

	const playListId = 'PLhslMUXu5Wn7UTXuoqiwndoOfdGxTgCKm';

	return (
		<VideoBGContainerStyled>
			<VideoBGStyled width={'100%'} height={'100%'}
				// src={'https://www.youtube.com/embed/J8Rcx1EXUbY?si=OiQsOG6y8JkGfK0L?mode=opaque&wmode=transparent&autoplay=1&loop=1&controls=0&modestbranding=0&rel=0&autohide=1&showinfo=0&color=white&iv_load_policy=2&theme=light&&mute=1'}
				// src={'https://www.youtube.com/embed/-O7kF5hzjwQ?si=lETT38nfBDFV3kb7?mode=opaque&wmode=transparent&autoplay=1&loop=1&controls=0&modestbranding=0&rel=0&autohide=1&showinfo=0&color=white&iv_load_policy=2&theme=light&&mute=1'}
				src={`https://www.youtube.com/embed/videoseries?list=${playListId}&mode=opaque&wmode=transparent&autoplay=1&loop=1&controls=0&modestbranding=0&rel=0&autohide=1&showinfo=0&color=white&iv_load_policy=2&theme=light&&mute=1`}
				title={'YouTube video player'}
				allow={'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; loop;'}
				allowFullScreen></VideoBGStyled>
			<BlackoutStyled/>
		</VideoBGContainerStyled>
	);
};
