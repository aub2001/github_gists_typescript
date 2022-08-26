
import Card from '@mui/material/Card';
import CardFooter from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { useSelector } from 'react-redux';
import { RootStore } from '../state/store';
import CardHeader from '@mui/material/CardHeader';




type Props = {
    image?: string | undefined,
    id?: string | undefined,
    filename?: string | undefined,
    login?: string | undefined,
    type?: string | undefined,
    description: string | undefined,
    content: string | undefined,
}



const SingleGistCard = (props: Props) => {

  const theme = useSelector((state: RootStore) => state.theme)
  console.log(props)
  const {image , login , filename, type, description, content} = props;
    
  return (
    <Card sx={{ maxWidth: 900 , minHeight: 500,  backgroundColor: theme.content, boxShadow: '0 8px 8px 4px gray' , margin: 7, padding: 3}}>
        <CardHeader
            avatar={
                <Avatar>
                    <img src={image} alt="" height={50} width={50}/>
                </Avatar>
            }
            title={`${login} / ${filename}`} sx={{color: theme.primary_color}}
            subheader={`${type}  ${description ? description : "-"}`} 
        />
        <CardContent sx={{display: 'flex', justifyContent: 'center'}}>
            <Typography variant='body2' color={theme.font_color} sx={{width: '85%' , border: '1px solid gray' , borderRadius: '10px' , padding: '30px' , overflow: 'hidden'}}>
                {content}
            </Typography>
        </CardContent>
    </Card>
  )
}

export default SingleGistCard