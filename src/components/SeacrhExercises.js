import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, Typography, TextField } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';

const SeacrhExercises = () => {

  const [search, setSearch] = useState('')

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      console.log(exercisesData);
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight="700" sx={{ fontSize: { lg: '44px', xs: '10px' } }} mb='50px' textAlign="center ">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField sx={{
          input: { fontWeight: "700", border: "none", borderRadius: "4px" },
          width: { lg: '800px', xs: '350px' },
          background: "#fff",
          borderRadius: '40px'
        }} height="76px" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder="Search Exercises" type="text"
        />
        <Button className="search-btn"
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SeacrhExercises