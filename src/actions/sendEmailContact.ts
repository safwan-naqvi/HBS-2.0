"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import { EmailTemplate } from "@/components/common/email-template/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmailContact = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail") as string;
  const fullname = formData.get("name") as string;
  const companyName = formData.get("organization") as string;
  const service = formData.get("services") as string;
  const description = formData.get("message") as string;

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(description, 5000)) {
    return {
      error: "Invalid description",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "HashBitStudio | Contact Us <leads@hashbitstudio.com>",
      to: ["safwan.naqvi@gmail.com"],
      cc: ["leads@hashbitstudio.com", "contact@hashbitstudio.com"],
      subject: "New Lead Generated From HashBitStudio Contact Us",
      replyTo: senderEmail as string,
      react: EmailTemplate({ fullname, companyName, senderEmail, service, description }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
