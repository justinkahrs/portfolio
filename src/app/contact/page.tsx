// app/contact/page.tsx

"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Contact() {
  // State variables
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [contactPreference, setContactPreference] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [consentGiven, setConsentGiven] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");

  // Touched state variables
  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
    phone: false,
    contactPreference: false,
    message: false,
    consentGiven: false,
  });

  // Validation regex patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex =
    /^(\+?\d{1,3})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  // Form validation function
  const isFormValid = () => {
    const isEmailValid = email && emailRegex.test(email);
    const isPhoneValid = phone && phoneRegex.test(phone);
    const isNameValid = name.trim().length > 0;
    const isMessageValid = message.trim().length > 0;
    const isContactPreferenceValid = !phone || (phone && contactPreference);
    const isConsentGivenValid = consentGiven;

    return (
      isNameValid &&
      isMessageValid &&
      (isEmailValid || isPhoneValid) &&
      isContactPreferenceValid &&
      isConsentGivenValid
    );
  };

  // Individual field validation functions
  const getEmailError = () => {
    if (!touchedFields.email) return "";
    if (email && !emailRegex.test(email)) return "Invalid email address.";
    return "";
  };

  const getPhoneError = () => {
    if (!touchedFields.phone) return "";
    if (phone && !phoneRegex.test(phone)) return "Invalid phone number.";
    return "";
  };

  const getContactPreferenceError = () => {
    if (!touchedFields.contactPreference) return "";
    if (phone && !contactPreference)
      return "Please select your contact preference.";
    return "";
  };

  const getConsentError = () => {
    if (!touchedFields.consentGiven) return "";
    if (!consentGiven) return "You must agree to be contacted.";
    return "";
  };

  const handleBlur = (fieldName: string) => {
    setTouchedFields((prev) => ({ ...prev, [fieldName]: true }));
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("contactPreference", contactPreference);
    formData.append("message", message);
    formData.append("consentGiven", consentGiven.toString());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setPhone("");
        setContactPreference("");
        setMessage("");
        setConsentGiven(false);
        setTouchedFields({
          name: false,
          email: false,
          phone: false,
          contactPreference: false,
          message: false,
          consentGiven: false,
        });
        setModalMessage("Message sent!");
        setModalVisible(true);
        // Reset form fields here if needed
      }
    } catch (error) {
      console.error(error);
      setModalMessage(
        "There was an error sending the message. Try reaching out directly - justin@justinkahrs.com or (231) 794-1337 "
      );
      setModalVisible(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name Field */}
      <div>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => handleBlur("name")}
          required
        />
        {touchedFields.name && name.trim().length === 0 && (
          <p className="text-red-500 text-sm mt-1">Name is required.</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => handleBlur("email")}
          className={
            touchedFields.email && email && !emailRegex.test(email)
              ? "border-red-500"
              : ""
          }
        />
        {getEmailError() && (
          <p className="text-red-500 text-sm mt-1">{getEmailError()}</p>
        )}
      </div>

      {/* Phone Field with Contact Preference */}
      <div>
        <div className="flex items-center space-x-4">
          {/* Phone Input */}
          <Input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              // Reset contact preference if phone is cleared
              if (e.target.value === "") {
                setContactPreference("");
              }
            }}
            onBlur={() => handleBlur("phone")}
            className={
              touchedFields.phone && phone && !phoneRegex.test(phone)
                ? "border-red-500"
                : ""
            }
          />

          {/* Contact Preference Radios */}
          {phone && (
            <div className="flex items-center space-x-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="contactPreference"
                  value="call"
                  checked={contactPreference === "call"}
                  onChange={(e) => setContactPreference(e.target.value)}
                  onBlur={() => handleBlur("contactPreference")}
                  className="mr-1"
                />
                Call
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="contactPreference"
                  value="text"
                  checked={contactPreference === "text"}
                  onChange={(e) => setContactPreference(e.target.value)}
                  onBlur={() => handleBlur("contactPreference")}
                  className="mr-1"
                />
                Text
              </label>
            </div>
          )}
        </div>
        {/* Phone Error */}
        {getPhoneError() && (
          <p className="text-red-500 text-sm mt-1">{getPhoneError()}</p>
        )}
        {/* Contact Preference Error */}
        {getContactPreferenceError() && (
          <p className="text-red-500 text-sm mt-1">
            {getContactPreferenceError()}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <Textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => handleBlur("message")}
          required
        />
        {touchedFields.message && message.trim().length === 0 && (
          <p className="text-red-500 text-sm mt-1">Message is required.</p>
        )}
      </div>

      {/* Consent Checkbox */}
      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={consentGiven}
            onChange={(e) => setConsentGiven(e.target.checked)}
            onBlur={() => handleBlur("consentGiven")}
            className="ml-4 mr-6"
          />
          I agree to be contacted via email or text message by one of
          Justin&apos;s AI automations, and that I can unsubscribe at any time.
        </label>
        {getConsentError() && (
          <p className="text-red-500 text-sm mt-1">{getConsentError()}</p>
        )}
      </div>

      {/* No Contact Information Error */}
      {name &&
        message &&
        !phone &&
        !email &&
        touchedFields.email &&
        touchedFields.phone && (
          <div>
            <p className="text-red-500 text-sm mt-1">
              Please provide at least an email or phone number.
            </p>
          </div>
        )}

      {/* Submit Button */}
      <Button type="submit" className="w-full" disabled={!isFormValid()}>
        <Mail className="mr-2" />
        Send Message
      </Button>
      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md text-center">
            <p>{modalMessage}</p>
            <Button
              onClick={() => setModalVisible(false)}
              className="mt-4 w-full"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </form>
  );
}
