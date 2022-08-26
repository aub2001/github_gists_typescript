
import Card from '@mui/material/Card';
import CardFooter from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { useSelector } from 'react-redux';
import { RootStore } from '../state/store';
import { useNavigate } from 'react-router-dom';


type Props = {
    image?: string | undefined,
    id?: string | undefined,
    filename?: string | undefined,
    login?: string | undefined,
    type?: string | undefined,
}


const SingleCard = (props: Props ) => {

    const {image, id, login, filename} = props
    const navigate = useNavigate();

    const theme = useSelector((state: RootStore) => state.theme)

    const HandleCardClick = () => {
        const path = `gist/${id}`;
        navigate(path);
    }

    return(

        <Card sx={{ maxWidth: 345 , minHeight: 250, backgroundColor: theme.content, boxShadow: '0 8px 8px 4px gray' , margin: 7,}} onClick={() => {HandleCardClick()}}>
            <CardContent>
                <Typography variant='body2' color={theme.font_color}>
                    LORUM IPSUM LORUM IPSUMLORUM IPSUM LORUM IPSUM LORUM IPSUM LORUM IPSUM LORUM IPSUM
                    LORUM IPSUM LORUM IPSUM LORUM IPSUM LORUM IPSUM LORUM IPSUM LORUM IPSUM
                </Typography>
            </CardContent>
            <CardFooter
                avatar={
                    <Avatar>
                        <img src={image} alt="" height={50} width={50}/>
                    </Avatar>
                }
                title={login} sx={{color: theme.primary_color_light}}
                subheader={filename} 
            />
        </Card>

    )
}

export default SingleCard;