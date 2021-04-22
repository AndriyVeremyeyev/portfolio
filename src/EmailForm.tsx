import React, { Fragment, useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Collapse,
  Typography,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import * as emailjs from "emailjs-com";
import strings from "./strings";

const EmailForm: React.FC = () => {
  const initialValues = { name: "", email: "", subject: "", message: "" };

  const [form, setForm] = useState(initialValues);
  const [showForm, setShowForm] = useState([true, false]);

  const validationSchema = yup.object({
    name: yup
      .string()
      .min(1, "Must be 1 character or more")
      .required("Name is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: yup
      .string()
      .min(1, "Must be 1 character or more")
      .required("Subject is required"),
    message: yup
      .string()
      .min(1, "Must be 1 character or more")
      .required("Message is required"),
  });

  const formik = useFormik({
    initialValues: form,
    validationSchema,

    onSubmit: (values) => {
      const templateParams = {
        from_name: values.name,
        email: values.email,
        subject: values.subject,
        message_html: values.message,
      };

      emailjs.send(
        "service_r80rhn8",
        "template_48uwkv8",
        templateParams,
        "user_qNzdA0MA8Q5xTka6tyqBP"
      );

      setForm(initialValues);
      setShowForm([false, true]);
    },
  });

  const textFields = [
    {
      name: "name",
      label: "Joe Soap",
      type: "text",
      values: formik.values.name,
      touched: formik.touched.name,
      errors: formik.errors.name,
      multiline: false,
      rows: 0,
    },
    {
      name: "email",
      label: "you@yourdomain.com",
      type: "email",
      values: formik.values.email,
      touched: formik.touched.email,
      errors: formik.errors.email,
      multiline: false,
      rows: 0,
    },
    {
      name: "subject",
      label: "Subject",
      type: "text",
      values: formik.values.subject,
      touched: formik.touched.subject,
      errors: formik.errors.subject,
      multiline: false,
      rows: 0,
    },
    {
      name: "message",
      label: "How I can help?",
      type: "text",
      values: formik.values.message,
      touched: formik.touched.message,
      errors: formik.errors.message,
      multiline: true,
      rows: 10,
    },
  ];

  return (
    <Fragment>
      <Collapse in={showForm[0]} timeout={1000}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container direction="column">
            {textFields.map((field, index) => (
              <TextField
                key={`textField${index}`}
                id={field.name}
                name={field.name}
                label={field.label}
                type={field.type}
                value={field.values}
                variant="outlined"
                style={{ marginTop: 10 }}
                onChange={formik.handleChange}
                error={field.touched && Boolean(field.errors)}
                helperText={field.touched && field.errors}
                multiline={field.multiline}
                rows={field.rows}
              />
            ))}
            <Button variant="contained" type="submit" style={{ marginTop: 20 }}>
              Submit
            </Button>
          </Grid>
        </form>
      </Collapse>
      <Collapse in={showForm[1]} timeout={1000}>
        <Typography variant="h6">{strings.submittedEmail}</Typography>
      </Collapse>
    </Fragment>
  );
};

export default EmailForm;
