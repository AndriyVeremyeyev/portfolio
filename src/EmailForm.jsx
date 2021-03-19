import React, { useState, useEffect } from "react";
import * as emailjs from "emailjs-com";
import { Grid, Typography, TextField, Button } from "@material-ui/core";

const EmailForm = () => {
  const emptyForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [form, setForm] = useState(emptyForm);

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: form.name,
      email: form.email,
      subject: form.subject,
      message_html: form.message,
    };

    emailjs.send(
      "service_r80rhn8",
      "template_48uwkv8",
      templateParams,
      "user_qNzdA0MA8Q5xTka6tyqBP"
    );

    setForm(emptyForm);
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <Grid container direction="column">
      <Typography>Your name</Typography>
      <TextField
        variant="outlined"
        label="Joe Soap"
        style={{ marginTop: 10 }}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <Typography style={{ marginTop: 10 }}>Email address</Typography>
      <TextField
        variant="outlined"
        label="you@yourdomain.com"
        style={{ marginTop: 10 }}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <Typography style={{ marginTop: 10 }}>Subject</Typography>
      <TextField
        variant="outlined"
        label="Subject"
        style={{ marginTop: 10 }}
        onChange={(e) => setForm({ ...form, subject: e.target.value })}
      />
      <Typography style={{ marginTop: 10 }}>Message</Typography>
      <TextField
        multiline
        rows={10}
        variant="outlined"
        label="How I can help?"
        style={{ marginTop: 10 }}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
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
