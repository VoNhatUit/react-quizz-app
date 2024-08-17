import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../types/root-state'
import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PAGE_URL } from '../configs/page-url';
import { resetScore } from '../states/score.action';

function Score() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const score = useSelector((state: IRootState) => state.score.score);

  function onBackHome() {
    navigate(PAGE_URL.ROOT);
    dispatch(resetScore())
  }

  return (
    <Container maxWidth="sm">
      <Box mt={30}>
        <Typography variant="h3" fontWeight="bold" mb={3}>
          Final Score {score}
        </Typography>
        <Button variant="outlined" onClick={onBackHome}>
          back to settings!
        </Button>
      </Box>
    </Container>
  )
}

export default Score