import React from 'react';
import {  Button, Container, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { decode } from 'html-entities';

// types
import { IRootState } from '../types/root-state';

// actions
import { getRandomInt } from '../utils/getRandomInt';
import { PAGE_URL } from '../configs/page-url';
import { increaseScore } from '../states/score.action';
import { fetchQuestions } from '../states/dashboard.action';

function Question() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const score = useSelector((state: IRootState) => state.score.score);
  const questions = useSelector((state: IRootState) => state.dashboard.questions); 

  const [options, setOptions] = React.useState<string[]>([]);
  const [questionIndex, setQuestionIndex] = React.useState(0);

  // initialize questions
  React.useEffect(() => {
    dispatch(fetchQuestions());
  }, [])

  // change answer by question
  React.useEffect(() => {
    if(questions.length > 0) {
      const questionItem = questions[questionIndex];
      const indexRandom = getRandomInt(questionItem.incorrect_answers.length);
      const options = [...questionItem.incorrect_answers];
      options.splice(indexRandom, 0, questionItem.correct_answer)
      setOptions(options);
    }
  }, [questions, questionIndex])

  function onAnwser(answer: string) {
    // increase score if anwser correct
    const questionItem = questions[questionIndex];
    if(answer === questionItem.correct_answer) {
      dispatch(increaseScore())
    }

    // redirect page when full anwser done
    if(questionIndex + 1 === questions.length) {
      // navigate to Score page
      navigate(PAGE_URL.SCORE);
      return;
    }

    // next question
    setQuestionIndex(prevState => prevState + 1)
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom sx={{textAlign: 'center', mt: 2}}>
        Question {questionIndex + 1}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {decode(questions[questionIndex]?.question)}
      </Typography>
      <Stack spacing={2} mt={2}>
        {options.map((question, index) => {
          return (
            <Button key={index} variant="contained" fullWidth onClick={() => onAnwser(question)}>
              {decode(question)}
            </Button>
          )
        })}
      </Stack>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Score: {score} / {questions.length}
      </Typography>
    </Container>
  );
}

export default Question;
