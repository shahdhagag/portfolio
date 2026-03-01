"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiNavigation,
  FiCheckCircle,
  FiAlertCircle,
  FiLoader,
} from "react-icons/fi";
import emailjs from "@emailjs/browser";
import SectionHeading from "@/components/SectionHeading";
import { personalInfo } from "@/lib/data";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  // Auto-hide success/error after 5 seconds
  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const validate = (): boolean => {
    const errors: FieldErrors = {};
    if (!formData.from_name.trim()) {
      errors.name = "Name is required.";
    }
    if (!formData.from_email.trim()) {
      errors.email = "Email is required.";
    } else if (!EMAIL_REGEX.test(formData.from_email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required.";
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    if (!validate()) return;

    setSending(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        {
          // Send both common variable name patterns to match any template
          from_name: formData.from_name,
          name: formData.from_name,
          user_name: formData.from_name,
          from_email: formData.from_email,
          email: formData.from_email,
          reply_to: formData.from_email,
          user_email: formData.from_email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Shahd",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
      );
      setSuccess(true);
      setFormData({ from_name: "", from_email: "", subject: "", message: "" });
      setFieldErrors({});
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-200";
  const errorInputClass =
    "w-full px-4 py-3 rounded-xl border border-red-400 dark:border-red-500 bg-white dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-red-400 focus:border-transparent outline-none transition-all duration-200";

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Let's build something together">
          Contact Me
        </SectionHeading>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I&apos;m always open to new opportunities, freelance projects, and
              collaborations. Feel free to reach out!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                  <FiMail className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                  <FiPhone className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm"
                >
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                  <FiMapPin className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <span className="text-sm">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <FiNavigation className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                  Open to relocation
                </span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            noValidate
            className="md:col-span-3 space-y-4 max-w-[600px]"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Name <span className="text-red-400">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={formData.from_name}
                onChange={(e) => {
                  setFormData({ ...formData, from_name: e.target.value });
                  if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: undefined });
                }}
                className={fieldErrors.name ? errorInputClass : inputClass}
                placeholder="Your name"
              />
              {fieldErrors.name && (
                <p className="text-red-400 text-xs mt-1">{fieldErrors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email <span className="text-red-400">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.from_email}
                onChange={(e) => {
                  setFormData({ ...formData, from_email: e.target.value });
                  if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: undefined });
                }}
                className={fieldErrors.email ? errorInputClass : inputClass}
                placeholder="your@email.com"
              />
              {fieldErrors.email && (
                <p className="text-red-400 text-xs mt-1">{fieldErrors.email}</p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className={inputClass}
                placeholder="What's this about?"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: undefined });
                }}
                className={`${fieldErrors.message ? errorInputClass : inputClass} resize-none`}
                placeholder="Your message..."
              />
              {fieldErrors.message && (
                <p className="text-red-400 text-xs mt-1">{fieldErrors.message}</p>
              )}
            </div>

            {/* Submit button */}
            <motion.button
              whileHover={{ scale: sending ? 1 : 1.02 }}
              whileTap={{ scale: sending ? 1 : 0.98 }}
              type="submit"
              disabled={sending}
              className="w-full px-6 py-3 bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-600/70 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              {sending ? (
                <>
                  <FiLoader className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <FiSend className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>

            {/* Success / Error messages */}
            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 text-green-500 text-sm"
                >
                  <FiCheckCircle className="w-4 h-4 flex-shrink-0" />
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 text-red-400 text-sm"
                >
                  <FiAlertCircle className="w-4 h-4 flex-shrink-0" />
                  Something went wrong. Please try again.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
