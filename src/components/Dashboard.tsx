import React, {useState, ChangeEvent, FormEvent} from 'react'
import '@fontsource/roboto/700.css';import { 
  Container, 
  Typography, 
  Box, 
  TextField, 
  Button, 
  MenuItem 
} from '@mui/material';

i
}
type FormProps = {
    category: string;
    difficulty: string;
    type: string;
    amount: number;
  }
  const Dashboard = ({ onStart }) => {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ category, difficulty, type, amount });
    onStart({ category, difficulty, type, amount });
  };
  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value >= 0) {
      setAmount(value);
    }
  };

  return (
    <>
      <Container maxWidth="sm">
          <Box sx={{ my: 4}}>
            <Typography variant="h2" component="h1" align="center" gutterBottom>
              Quiz App
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                select
                fullWidth
                label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                margin="normal"
                InputProps={{ style: { fontWeight: 'normal' }}}
                InputLabelProps={{ style: { fontWeight: 'normal' }}}
              >
                <MenuItem value="knowlege">General Knowledge</MenuItem>
                <MenuItem value="entertainment-books">Entertainment Books</MenuItem>
                <MenuItem value="entertainment-film">Entertainment Film</MenuItem>
                <MenuItem value="entertainment-music">EntertainmentMusic</MenuItem>
                <MenuItem value="science-nature">Science & Nature</MenuItem>
                <MenuItem value="science-computer">Science Computer</MenuItem>
                <MenuItem value="science-mathematics">Science Mathematics</MenuItem>
                <MenuItem value="mythology">Mythology</MenuItem>
                <MenuItem value="sports">Sports</MenuItem>
                <MenuItem value="geography">Geography</MenuItem>
                <MenuItem value="history">History</MenuItem>
                <MenuItem value="art">Art</MenuItem>
                <MenuItem value="animals">Animals</MenuItem>
                <MenuItem value="celebrities">Celebrities</MenuItem>
                <MenuItem value="vehicles">Vehicles</MenuItem>
              </TextField>
              <TextField
                select
                fullWidth
                label="Difficulty"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                margin="normal"
                
              >
                <MenuItem value="easy">Easy</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="hard">Hard</MenuItem>
              </TextField>
              <TextField
                select
                fullWidth
                label="Type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                margin="normal"
              >
                <MenuItem value="multiple">Multiple Choice</MenuItem>
                <MenuItem value="boolean">True/False</MenuItem>
              </TextField>
              <TextField
                fullWidth
                label="Amount of Questions"
                type="number"
                value={amount}
                onChange={handleAmountChange}
                margin="normal"
              />
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center'}}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  type="submit" 
                  sx={{w: 2 }}
                >
                  GET STARTED
                </Button>
              </Box>
            </form>
          </Box>
        </Container>     
    </>
  )
}
export default Dashboard
