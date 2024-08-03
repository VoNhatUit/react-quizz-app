import { useState, ChangeEvent, useEffect } from 'react'
import { 
  Container, 
  Typography, 
  Box, 
  TextField, 
  Button, 
  MenuItem 
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

// state
import { IRootState } from '../types/root-state';

// actions
import { setAmount, setCategories, setCategory, setDifficulty, setType } from '../states/dashboard.action';
import { setLoading } from '../states/app.action';
import { useNavigate } from 'react-router-dom';

// configs
import { PAGE_URL } from '../configs/page-url';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector((state: IRootState) => state.dashboard.categories);
  
  // initialize categories
  useEffect(() => {
    async function fetchCategories() {
      dispatch(setLoading(true))

      const res = await fetch('https://opentdb.com/api_category.php');
      const data = await res.json();

      dispatch(setLoading(false))
      dispatch(setCategories(data.trivia_categories))
    }
    fetchCategories();
  }, [])

  const handleSubmit = () => {
    navigate(PAGE_URL.QUESTION)
  };

  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ my: 4}}>
          <Typography variant="h2" component="h1" align="center" gutterBottom>
            Quiz App
          </Typography>
            <TextField
              select
              fullWidth
              label="Category"
              // value={category}
              onChange={(e) => dispatch(setCategory(Number(e.target.value)))}
              margin="normal"
              InputProps={{ style: { fontWeight: 'normal' }}}
              InputLabelProps={{ style: { fontWeight: 'normal' }}}
            >
              {categories.map(cate => (
                <MenuItem key={cate.id} value={cate.id}>{cate.name}</MenuItem>
              ))}
            </TextField>
            <TextField
              select
              fullWidth
              label="Difficulty"
              // value={difficulty}
              onChange={(e) => dispatch(setDifficulty(e.target.value))}
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
              // value={type}
              onChange={(e) => dispatch(setType(e.target.value))}
              margin="normal"
            >
              <MenuItem value="multiple">Multiple Choice</MenuItem>
              <MenuItem value="boolean">True/False</MenuItem>
            </TextField>
            <TextField
              fullWidth
              label="Amount of Questions"
              type="number"
              // value={amount}
              onChange={(e) => dispatch(setAmount(Number(e.target.value)))}
              margin="normal"
            />
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center'}}>
              <Button 
                variant="contained" 
                color="primary" 
                type="button"
                onClick={handleSubmit} 
                sx={{w: 2 }}
              >
                GET STARTED
              </Button>
            </Box>
          </Box>
        </Container>     
    </>
  )
}
export default Dashboard
