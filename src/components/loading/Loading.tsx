import {LinearProgress} from '@mui/material';
import { red } from '@mui/material/colors';
import {LoadingContainer} from './Loading.styled.ts';

export const Loading = () => {

    return (
        <LoadingContainer $clr={red[500]}>
            <LinearProgress color={'inherit'}/>
        </LoadingContainer>
    );
};
