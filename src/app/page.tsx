"use client";

import { useState } from "react";
import Image from "next/image";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("work");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^(\+?\d{1,3})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  const isFormValid = () => {
    const isEmailValid = email && emailRegex.test(email);
    const isPhoneValid = phone && phoneRegex.test(phone);
    const isNameValid = name.trim().length > 0;
    const isMessageValid = message.trim().length > 0;
    return isNameValid && isMessageValid && (isEmailValid || isPhoneValid);
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
    } catch (e) {
      console.error(e);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Justin Kahrs</h1>

        <div className="flex flex-col items-center mb-6">
          <Image
            src="https://i.imgur.com/u12TbZf.jpeg"
            alt="Justin Kahrs"
            width={150}
            height={150}
            className="rounded-full mb-4"
          />
          <p className="text-center text-gray-600 max-w-xs">
            Developer, automation specialist, and musician. Passionate about
            crafting efficient solutions and beautiful harmonies.
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <Button
            variant={activeTab === "work" ? "default" : "outline"}
            className="mr-2"
            onClick={() => setActiveTab("work")}
          >
            Work
          </Button>
          <Button
            variant={activeTab === "music" ? "default" : "outline"}
            className="mr-2"
            onClick={() => setActiveTab("music")}
          >
            Music
          </Button>
          <Button
            variant={activeTab === "contact" ? "default" : "outline"}
            onClick={() => setActiveTab("contact")}
          >
            Contact
          </Button>
        </div>

        {activeTab === "contact" && (
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
            <Button
              type="submit"
              className="w-full"
              disabled={!isFormValid()}
            >
              <Mail className="mr-2" />
              Send Message
            </Button>
          </form>
        )}
      </div>

      <footer className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Justin Kahrs. All rights reserved.
      </footer>
    </div>
  );
}