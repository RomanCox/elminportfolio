import {NotFoundPageContainerStyled} from './NotFoundPage.styled.ts';
import {PhraseRotate} from "../../components/phraseRotate";

const NotFoundPage = () =>
    <NotFoundPageContainerStyled>
        <PhraseRotate value={'Page Not Found!'}/>
        {/*Page Not Found!*/}
    </NotFoundPageContainerStyled>

export default NotFoundPage;
