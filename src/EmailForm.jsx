import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import { Grid, Typography, TextField, Button } from "@material-ui/core";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      email: email,
      subject: subject,
      message_html: message,
    };

    emailjs.send(
      "service_r80rhn8",
      "template_48uwkv8",
      templateParams,
      "user_qNzdA0MA8Q5xTka6tyqBP"
    );

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <Grid container direction="column">
      <Typography>Your name</Typography>
      <TextField
        variant="outlined"
        label="Joe Soap"
        style={{ marginTop: 10 }}
        onChange={(e) => setName(e.target.value)}
      />
      <Typography style={{ marginTop: 10 }}>Email address</Typography>
      <TextField
        variant="outlined"
        label="you@yourdomain.com"
        style={{ marginTop: 10 }}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Typography style={{ marginTop: 10 }}>Subject</Typography>
      <TextField
        variant="outlined"
        label="Subject"
        style={{ marginTop: 10 }}
        onChange={(e) => setSubject(e.target.value)}
      />
      <Typography style={{ marginTop: 10 }}>Message</Typography>
      <TextField
        multiline
        rows={10}
        variant="outlined"
        label="How I can help?"
        style={{ marginTop: 10 }}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        style={{ marginTop: 20 }}
        variant="contained"
        onClick={(e) => sendEmail(e)}
      >
        Send
      </Button>
    </Grid>
  );
};

export default EmailForm;
