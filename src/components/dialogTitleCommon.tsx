import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useTheme } from '@mui/material';

function DialogTitleCommon({
  title,
  onClose,
}: {
  title: string;
  onClose: () => void;
}) {
  const theme = useTheme();
  return (
    <>
      <IconButton
        sx={{
          color: 'white',
          backgroundColor: theme.palette.primary.main,
          borderRadius: 1.5,
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
          },
        }}
      >
        <ArrowBackIosNewIcon
          onClick={onClose}
          aria-label='close'
          fontSize='medium'
        />
      </IconButton>
      <Typography
        sx={{ ml: 2, flex: 1, fontFamily: 'roboto-bold' }}
        variant='h5'
      >
        {title}
      </Typography>
    </>
  );
}

export default DialogTitleCommon;
