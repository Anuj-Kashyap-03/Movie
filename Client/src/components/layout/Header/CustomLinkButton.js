import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


const MyButton = styled(Button)(({ theme }) => ({
    color: theme.palette.secondary.main,
    textTransform:'none',
    transform:'scale(1.1)',
    transition: "width .3s",
    '&:hover': {
        color: theme.palette.secondary.light,
        transform: "scale(1.15)"


    },
}));
export default MyButton
