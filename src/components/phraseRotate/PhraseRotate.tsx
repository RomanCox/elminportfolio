import {PhraseContainerStyled, LetterStyled, LettersContainerStyled} from './PhraseRotate.styled.ts';

interface PhraseRotatePropsType {
    value: string;
}

export const PhraseRotate = ({value}: PhraseRotatePropsType) => {
    const letters = value.trim().split('');

    return (
        <PhraseContainerStyled>
            <LettersContainerStyled>
                {letters.map((letter, idx) =>
                    <LetterStyled
                        key={idx}
                        $idx={idx}
                        $width={letter === ' ' ? '12px' : 'auto'}
                    >
                        {letter}
                    </LetterStyled>
                )}
            </LettersContainerStyled>
            <LettersContainerStyled $bottom>
                {letters.map((letter, idx) =>
                    <LetterStyled
                        key={idx}
                        $idx={idx}
                        $width={letter === ' ' ? '12px' : 'auto'}
                        $bottom
                    >
                        {letter}
                    </LetterStyled>
                )}
            </LettersContainerStyled>
        </PhraseContainerStyled>
    )
}
