import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ComboFilters from './ItemsFilters';

export default function MediaCard({ title, img, description, selectId, selectLabel, selectOptions, onChange }) {
  return (
    <Card sx={{ width: 345, pb: 1, mx: 2}}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title=""
      />
      <CardContent sx={{height: 80}}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{width: '92%', mx: 'auto'}}>
        <ComboFilters
          selectOptions={selectOptions}
          selectId={selectId}
          onChange={onChange}
          selectLabel={selectLabel}
        />
      </CardActions>
    </Card>
  );
}