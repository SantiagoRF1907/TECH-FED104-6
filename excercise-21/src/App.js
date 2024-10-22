import React, { useState } from "react";
import { Slider, Button, TextField, Box } from "@mui/material";

function App() {
  const [sliderValue, setSliderValue] = useState(100);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <Box sx={{ width: 300, margin: "0 auto", padding: "20px" }}>
      {/* Slider */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Slider
          value={sliderValue}
          onChange={handleSliderChange}
          aria-labelledby="continuous-slider"
          sx={{ color: "purple" }}
        />
        <Box sx={{ ml: 2 }}>{sliderValue}</Box>
      </Box>

      {/* Delete Button */}
      <Button variant="contained" color="error" sx={{ marginTop: "20px" }}>
        DELETE
      </Button>

      {/* TextFields */}
      <Box sx={{ marginTop: "20px" }}>
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Address"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </Box>
    </Box>
  );
}

export default App;
