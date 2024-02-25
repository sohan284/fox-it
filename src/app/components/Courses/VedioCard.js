import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LiveVideoCard from './LiveVedioCard';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function VedioCard({courseDetails}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ backgroundColor: '#f0edccc2', boxShadow: '0 0 20px #019991' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#002F31' }} aria-label="recipe">
             <img data-aos="zoom-in"
                  className="lg:h-8 h-8 w-auto"
                  src="https://i.ibb.co/X3RtxjP/logo.png"
                  alt="FoxIt"
                  border="0"
                />
          </Avatar>
        }
        
        title=''
        subheader={courseDetails.date}
      />
     <div className='flex justify-center'>
     <iframe src={courseDetails.vedio} width="full" height="280" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
     </div>
      <CardActions disableSpacing>
      <Typography className='ml-10' variant="body2" color="text.secondary">
        {courseDetails.title}
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon sx={{ color: '#002F31' }}/>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <div>
          {courseDetails.details}
        </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}