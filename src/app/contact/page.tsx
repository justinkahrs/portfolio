// app/contact/page.tsx

"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const { toast } = useToast();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex =
    /^(\+?\d{1,3})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  const isFormValid = () => {
    const isEmailValid = email && emailRegex.test(email);
    const isPhoneValid = phone && phoneRegex.test(phone);
    const isNameValid = name.trim().length > 0;
    const isMessageValid = message.trim().length > 0;
    return isNameValid && isMessageValid && (isEmailValid || isPhoneValid);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, email, phone, message });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "I'll get back to you soon.",
        });
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="Email (optional)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={email && !emailRegex.test(email) ? "border-red-500" : ""}
      />
      <Input
        type="text"
        placeholder="Phone (optional)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className={phone && !phoneRegex.test(phone) ? "border-red-500" : ""}
      />
      <Textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <Button type="submit" className="w-full" disabled={!isFormValid()}>
        <Mail className="mr-2" />
        Send Message
      </Button>
    </form>
  );
}
