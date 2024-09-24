"use client"
import { sendEmailContact } from "@/actions/sendEmailContact";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import styles from "./style.module.scss";
import SubmitButton from "./SubmitButton";
export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  // Zod schema definition
  const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    senderEmail: z.string().email("Invalid email address"),
    organization: z.string().min(1, "Organization name is required"),
    services: z.string().min(1, "Please specify the services you need"),
    message: z.string().min(10, "Message must be at least 10 characters long"),
  });

  type FormSchema = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormSchema) => {
    // Debug log
    console.log("Submitting form:", data);
    const formData = new FormData(formRef.current as HTMLFormElement);
    formData.append("name", data.name);
    formData.append("senderEmail", data.senderEmail);
    formData.append("organization", data.organization);
    formData.append("services", data.services);
    formData.append("message", data.message);

    try {
      const { error } = await sendEmailContact(formData);
      if (error) {
        toast.error(error);
        return;
      }

      toast.success("Email sent successfully!");
      formRef.current?.reset();
    } catch (err) {
      console.error("Error sending email:", err);
      toast.error("An error occurred. Please try again.");
    }
    formRef.current?.reset();
  };


  return (
    <div className="block w-full lg:w-[70%] pr-[8vw]">
      <form
        ref={formRef}
        className="flex flex-col font-normal text-4xl lg:text-6xl leading-10 relative"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative flex w-full gap-14 border-b-[1px] border-gray-500 py-10">
          <h5 className="text-[18px] font-light pt-1">01</h5>
          <div className="flex flex-col gap-4 w-full">
            <label
              htmlFor="name"
              className="w-full block text-[24px] tracking-tighter"
            >
              Your Name
            </label>
            <input
              id="name"
              {...register("name")} // Ensure the name attribute is passed to the input
              required
              type="text"
              placeholder="Syed Saim Abbas"
              className="!w-full text-[20px] appearance-none -webkit-appearance-none !bg-transparent border-none focus:outline-none"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
        </div>
        <div className="relative flex w-full gap-14 border-b-[1px] border-gray-500 py-10">
          <h5 className="text-[18px] font-light pt-1">02</h5>
          <div className="flex flex-col gap-4 w-full">
            <label
              htmlFor="name"
              className="w-full block text-[24px] tracking-tighter"
            >
              What's your email?
            </label>
            <input
              id="senderEmail"
              {...register("senderEmail")}  // Ensure the name attribute is passed to the input
              required
              type="email"
              placeholder="ali@example.com*"
              className="!w-full text-[20px] appearance-none -webkit-appearance-none !bg-transparent border-none focus:outline-none"
            />
            {errors.senderEmail && <p className="text-red-500 text-sm">{errors.senderEmail.message}</p>}
          </div>
        </div>
        <div className="relative flex w-full gap-14 border-b-[1px] border-gray-500 py-10">
          <h5 className="text-[18px] font-light pt-1">03</h5>
          <div className="flex flex-col gap-4 w-full">
            <label
              htmlFor="name"
              className="w-full block text-[24px] tracking-tighter"
            >
              What's the name of your organization?
            </label>
            <input
              id="organization"
              {...register("organization")}
              required
              type="text"
              placeholder="Example LTD*"
              className="!w-full text-[20px] appearance-none -webkit-appearance-none !bg-transparent border-none focus:outline-none"
            />
            {errors.organization && <p className="text-red-500 text-sm">{errors.organization.message}</p>}
          </div>
        </div>
        <div className="relative flex w-full gap-14 border-b-[1px] border-gray-500 py-10">
          <h5 className="text-[18px] font-light pt-1">04</h5>
          <div className="flex flex-col gap-4 w-full">
            <label
              htmlFor="name"
              className="w-full block text-[24px] tracking-tighter"
            >
              What services are you looking for?
            </label>
            <input
              id="services"
              {...register("services")}  // Ensure the name attribute is passed to the input
              required
              type="text"
              placeholder="Web Design, Web Development*"
              className="!w-full text-[20px] appearance-none -webkit-appearance-none !bg-transparent border-none focus:outline-none"
            />
            {errors.services && <p className="text-red-500 text-sm">{errors.services.message}</p>}
          </div>
        </div>
        <div className="relative flex w-full gap-14 border-b-[1px] border-gray-500 py-10">
          <h5 className="text-[18px] font-light pt-1">05</h5>
          <div className="flex flex-col gap-4 w-full">
            <label
              htmlFor="name"
              className="w-full block text-[24px] tracking-tighter"
            >
              Your Message
            </label>
            <textarea
              id="message"
              {...register("message")}   // Ensure the name attribute is passed to the textarea
              rows={4}
              cols={200}
              placeholder="Hi Ali, can you help me in ..."
              required
              className="block w-full text-[20px] appearance-none -webkit-appearance-none !bg-transparent border-none leading-7 focus:outline-none"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>
        </div>
        <div className="w-full flex items-center justify-end p-4">
          <SubmitButton
            backgroundColor={"#334BD3"}
            className={styles.button}
          >
            <p>Send it!</p>
          </SubmitButton>
        </div>
      </form>
    </div >
  );
}
