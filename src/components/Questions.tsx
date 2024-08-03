import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

function Question({ question, options, onAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onAnswer(option);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom sx={{textAlign: 'center', mt: 2}}>
        Question 1
      </Typography>
      <Typography variant="h6" gutterBottom>
        {question}
      </Typography>
      <Box>
        {options.map((option, index) => (
          <Button
            key={index}
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </Button>
        ))}
      </Box>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Score: 0 / 4
      </Typography>
    </Container>
  );
}

export default Question;
