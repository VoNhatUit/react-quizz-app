import React from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

// types
import { IRootState } from '../types/root-state';

// actions
import { setLoading } from '../states/app.action';

function Question() {
  const dispatch = useDispatch();
  const dashboard = useSelector((state: IRootState) => state.dashboard);

  // initialize question
  React.useEffect(() => {
    async function fetchQuestions() {
      if(!dashboard.difficulty || !dashboard.type) return;

      dispatch(setLoading(true))

      const res = await fetch(`https://opentdb.com/api.php?amount=${dashboard.amount}&category=${dashboard.category}&difficulty=${dashboard.difficulty}&type=${dashboard.type}`);
      const data = await res.json();
      console.log('Question: ', data)
      dispatch(setLoading(false))
    }
    fetchQuestions();
  }, [dashboard])


  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom sx={{textAlign: 'center', mt: 2}}>
        Question 1
      </Typography>
      <Typography variant="h6" gutterBottom>
        Are you OK?
      </Typography>
      <Stack spacing={2} mt={2}>
        
        <Button variant="contained" fullWidth>
          Fine
        </Button>
        <Button variant="contained" fullWidth>
          Happy
        </Button>
        <Button variant="contained" fullWidth>
          Sick
        </Button>
        <Button variant="contained" fullWidth>
          Nope
        </Button>
      </Stack>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Score: 0 / 4
      </Typography>
    </Container>
  );
}

export default Question;
