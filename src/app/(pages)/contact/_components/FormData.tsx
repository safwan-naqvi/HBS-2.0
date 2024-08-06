import React, { useRef } from "react";
import FormInput from "./FormInput";
import styles from "./style.module.scss";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";
export default function FormData() {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <div className="block w-full lg:w-[70%] pr-[8vw]">
      <form
        ref={ref}
        className="flex flex-col font-normal text-4xl lg:text-6xl leading-10 relative"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          ref.current?.reset();
          toast.success("Email sent successfully!");
        }}
      >
        <FormInput
          num="01"
          id="name"
          label="What's your name?"
          placeholder="Ali Ahmed*"
          type={"text"}
        />
        <FormInput
          num="02"
          id="senderEmail"
          label="What's your email?"
          placeholder="ali@example.com*"
          type={"email"}
        />
        <FormInput
          num="03"
          id="organization"
          label="What's the name of your organization?"
          placeholder="Example LTD*"
          type={"text"}
        />
        <FormInput
          num="04"
          id="services"
          label="What services are you looking for?"
          placeholder="Web Design, Web Development*"
          type={"text"}
        />
        <FormInput
          num="05"
          id="message"
          label="Your Message"
          placeholder="Hi Ali, can you help me in ..."
          type={"textarea"}
        />
        <div className="w-full flex items-center justify-end p-4">
          <SubmitButton backgroundColor={"#334BD3"} className={styles.button}>
            <p>Send it!</p>
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
