import {LinearProgress} from '@mui/material';
import { grey } from '@mui/material/colors';
import {LoadingContainer} from './Loading.styled.ts';

export const Loading = () => {

    return (
        <LoadingContainer $clr={grey[500]}>
            <LinearProgress color={'inherit'}/>
        </LoadingContainer>
    );
};
