import React, { useState, useEffect } from "react";
import * as emailjs from "emailjs-com";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Collapse,
} from "@material-ui/core";

const EmailForm = () => {
  const emptyForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [form, setForm] = useState(emptyForm);
  const [showForm, setShowForm] = useState([true, false, false, false]);

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateEmail(form.email)) {
      setShowForm([true, false, false, true]);
    } else if (
      !form.name.length &&
      !form.subject.length &&
      !form.message.length
    ) {
      setShowForm([true, false, true, false]);
    } else {
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
      setShowForm([false, true, false, false]);
    }
  };

  useEffect(() => {
    console.log(showForm);
  }, [showForm]);

  return (
    <React.Fragment>
      <Collapse in={showForm[0]} timeout={1000}>
        <Grid container direction="column">
          <Typography>Your name</Typography>
          <TextField
            value={form.name}
            variant="outlined"
            label="Joe Soap"
            style={{ marginTop: 10 }}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <Typography style={{ marginTop: 10 }}>Email address</Typography>
          <TextField
            value={form.email}
            variant="outlined"
            label="you@yourdomain.com"
            style={{ marginTop: 10 }}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <Typography style={{ marginTop: 10 }}>Subject</Typography>
          <TextField
            value={form.subject}
            variant="outlined"
            label="Subject"
            style={{ marginTop: 10 }}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
          />
          <Typography style={{ marginTop: 10 }}>Message</Typography>
          <TextField
            multiline
            rows={10}
            value={form.message}
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
      </Collapse>
      <Collapse in={showForm[3]} timeout={1000}>
        <Typography variant="h6">
          Make sure that you provided correct e-mail
        </Typography>
      </Collapse>
      <Collapse in={showForm[2]} timeout={1000}>
        <Typography variant="h6">
          Make sure that you didn't left blank empty
        </Typography>
      </Collapse>
      <Collapse in={showForm[1]} timeout={1000}>
        <Typography variant="h6">
          Your email was successfully submitted
        </Typography>
      </Collapse>
    </React.Fragment>
  );
};

export default EmailForm;
