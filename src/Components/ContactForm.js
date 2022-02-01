import { TextField } from "@material-ui/core";
import { TextFields } from "@mui/icons-material";
import { Button, Paper, TextareaAutosize, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../Styles/contactForm.css";

const ContactForm = () => {
  return (
    <Paper className="contactForm">
      <Box>
        <Typography variant="h5" textAlign="center" fontWeight="bold">
          Contact Form
        </Typography>
      </Box>
      <Box margin={2}>
        <TextField
          required
          label="Fullname"
          variant="outlined"
          placeholder="Eg. John Doe"
          size="small"
          fullWidth
        />
      </Box>
      <Box margin={2}>
        <TextField
          label="Phone number"
          required
          variant="outlined"
          placeholder="Eg. 050 XXXXXXX"
          size="small"
          fullWidth
        />
      </Box>
      <Box margin={2}>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={6}
          required
          placeholder="Brief description of task"
          style={{
            width: 270,
            padding: 10,
            // borderColor: "red",
            outlineColor: "#999",
            fontSize: 18,
            color: "#333",
          }}
        />
      </Box>
      <Box margin={4}>
        <Button variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </Box>
    </Paper>
  );
};

export default ContactForm;
