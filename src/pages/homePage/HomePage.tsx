import {NavLink} from 'react-router-dom';
import {Title} from '../../components/title';
import {VideoBG} from './VideoBG.tsx';
import {PATH} from '../../App.tsx';

import {
    ButtonStyled,
    ContentContainerStyled,
    HomePageContainerStyled,
    ServicesListContainer,
    TitleContainer,
} from './HomePage.styled.ts';

const HomePage = () => <HomePageContainerStyled>
    <VideoBG/>
    <ContentContainerStyled>
        <TitleContainer>
            <Title text={'Elmin Karaev'} variant={'h2'} color={'#fff'}/>
        </TitleContainer>
        <ServicesListContainer>
            3D Modeling | visualization | animation | interactive | VR
        </ServicesListContainer>
        <ButtonStyled
            component={NavLink}
            to={PATH.CONTACTS}
            variant={'contained'}
        >
            Contact me
        </ButtonStyled>
    </ContentContainerStyled>
</HomePageContainerStyled>

export default HomePage;
