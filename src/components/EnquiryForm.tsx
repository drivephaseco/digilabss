"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { trackEvent } from "@/lib/analytics";

const enquirySchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid work email"),
  phone: z
    .string()
    .min(7, "Enter a valid phone/WhatsApp number")
    .regex(/^[+\d][\d\s-]{6,}$/, "Enter a valid phone/WhatsApp number"),
  gradeInterest: z.string().min(1, "Select a grade"),
  message: z.string().optional(),
});

type EnquiryFormValues = z.infer<typeof enquirySchema>;

export default function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
  });

  const onSubmit = async (data: EnquiryFormValues) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");

      trackEvent("generate_lead", {
        form_name: "flange_enquiry",
        grade_interest: data.gradeInterest,
      });

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="enquiry" className="py-16 md:py-24 bg-accent text-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Request a Quote</h2>
          <p className="text-gray-400">
            Tell us your required grade, size, and quantity. Our team will respond within 24 hours.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="sr-only">Full Name</label>
              <input
                id="name"
                {...register("name")}
                type="text"
                placeholder="Full Name"
                className="w-full bg-white/5 border border-white/10 rounded p-4 placeholder:text-gray-400 focus:border-primary outline-none transition-colors"
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Work Email</label>
              <input
                id="email"
                {...register("email")}
                type="email"
                placeholder="Work Email"
                className="w-full bg-white/5 border border-white/10 rounded p-4 placeholder:text-gray-400 focus:border-primary outline-none transition-colors"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="sr-only">Phone / WhatsApp</label>
              <input
                id="phone"
                {...register("phone")}
                type="tel"
                placeholder="Phone / WhatsApp"
                className="w-full bg-white/5 border border-white/10 rounded p-4 placeholder:text-gray-400 focus:border-primary outline-none transition-colors"
              />
              {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
            </div>
            <div>
              <label htmlFor="gradeInterest" className="sr-only">Grade Interest</label>
              <select
                id="gradeInterest"
                {...register("gradeInterest")}
                defaultValue=""
                className="w-full bg-white/5 border border-white/10 rounded p-4 text-gray-300 focus:border-primary outline-none transition-colors"
              >
                <option value="" disabled>Select Grade Interest</option>
                <option value="304">Grade 304</option>
                <option value="316">Grade 316</option>
                <option value="316L">Grade 316L</option>
              </select>
              {errors.gradeInterest && (
                <p className="text-red-400 text-xs mt-1">{errors.gradeInterest.message}</p>
              )}
            </div>
          </div>

          <label htmlFor="message" className="sr-only">Project Details</label>
          <textarea
            id="message"
            {...register("message")}
            rows={4}
            placeholder="Describe your project requirements, sizes, and estimated quantity..."
            className="w-full bg-white/5 border border-white/10 rounded p-4 placeholder:text-gray-400 focus:border-primary outline-none transition-colors"
          />

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-primary hover:bg-blue-700 disabled:opacity-60 text-white font-bold py-4 rounded transition-colors"
          >
            {status === "submitting" ? "Sending..." : "Send Enquiry"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-sm text-center">
              Thanks &mdash; your enquiry has been received. We&apos;ll be in touch within 24 hours.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm text-center">
              Something went wrong sending your enquiry. Please try again or contact us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
