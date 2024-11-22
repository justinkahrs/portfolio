"use client";

import { useState } from "react";
import Image from "next/image";
import { Twitter, Linkedin, Github, Music, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("work");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("YOUR_WEBHOOK_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "I'll get back to you soon.",
        });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
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
            creating efficient solutions and beautiful melodies.
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

        {activeTab === "work" && (
          <div className="flex flex-col sm:flex-row sm:space-x-6 justify-center">
            <a
              href="https://x.com/justin_kahrs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-blue-500 mb-2 sm:mb-0"
            >
              <Twitter className="mr-2" />
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/justin-k-84138b152/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-blue-500 mb-2 sm:mb-0"
            >
              <Linkedin className="mr-2" />
              LinkedIn
            </a>
            <a
              href="https://github.com/justinkahrs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-blue-500"
            >
              <Github className="mr-2" />
              GitHub
            </a>
          </div>
        )}

        {activeTab === "music" && (
          <div className="space-y-4">
            <div className="aspect-w-16 aspect-h-9">
              {/* Insert your SoundCloud embed code here */}
              <p className="text-gray-500 text-center">
                <iframe
                  width="100%"
                  height="166"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1463115832&color=%23ff5500&auto_play=true&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false"
                ></iframe>
                <div
                  style={{
                    fontSize: "10px",
                    color: "#cccccc",
                    lineBreak: "anywhere",
                    wordBreak: "normal",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    fontFamily:
                      "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
                    fontWeight: 100,
                  }}
                >
                  <a
                    href="https://soundcloud.com/justinkahrs"
                    title="justinkahrs"
                    target="_blank"
                    style={{
                      color: "#cccccc",
                      textDecoration: "none",
                    }}
                  >
                    justinkahrs
                  </a>{" "}
                  ·{" "}
                  <a
                    href="https://soundcloud.com/justinkahrs/hlo"
                    title="Hlo"
                    target="_blank"
                    style={{
                      color: "#cccccc",
                      textDecoration: "none",
                    }}
                  >
                    Hlo
                  </a>
                </div>
              </p>
            </div>
            <a
              href="https://open.spotify.com/artist/39I6fblCZ73j0bb59JpRde?si=HlWrGAZoS8qe5ajBSpT37A"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-gray-700 hover:text-green-500"
            >
              <Music className="mr-2" />
              Spotify
            </a>
          </div>
        )}

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
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Button type="submit" className="w-full">
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
