"use client";

import React, { useState } from "react";
import Button from "../ui/Button"; 
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { HiMiniMapPin } from "react-icons/hi2";
import { IoIosPeople } from "react-icons/io";

const ContactUs: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [message, setMessage] = useState("");
  const [isFileOverLimit, setIsFileOverLimit] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      const newFiles = Array.from(selectedFiles);
      if (newFiles.length > 5) {
        setIsFileOverLimit(true);
      } else {
        setIsFileOverLimit(false);
        setFiles(newFiles);
      }
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Submission logic will be added later
  };

  return (
    <div className="contact-us-form container mx-auto p-25 max-w-7xl min-h-[300px] ">
      <h1 className="text-4xl font-bold text-center mb-4 text-[var(--color-blue3)] ">
        COLLABORATE WITH <span className="text-[var(--color-yellow2)]">US</span>
      </h1>
      <p className="text-lg text-center mb-8 text-[var(--color-blue2)] ">
        Collaborate with our Developer for your next project.
      </p>

      <div className="border border---color-blue3 rounded-xl shadow-lg border border-[var(--color-blue3)]">
        <div className="grid grid-cols-1 md:grid-cols-[0.7fr_1fr] gap-0">
          {/* Left Side: Contact Information */}
          <div className="bg-[var(--color-blue3)] text-white p-8 rounded-t-xl md:rounded-l-xl md:rounded-tr-none flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="border-t border-[var(--color-yellow2)] mb-6"></div>
              <div className="space-y-4">
                {/* Address */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <HiMiniMapPin className="text-[var(--color-yellow2)] text-2xl" />
                    <span className="font-medium text-xl">Address</span>
                  </div>
                  <p className="ml-8 text-sm">
                    Ateneo de Davao University. E. Jacinto Street 8016 Davao City Philippines
                  </p>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <MdEmail className="text-[var(--color-yellow2)] text-2xl" />
                    <span className="font-medium text-xl">Email</span>
                  </div>
                  <a
                    href="mailto:samahansysdev@addu.edu.ph"
                    className="ml-8 text-sm text-[var(--color-white)] hover:text-[var(--color-yellow3)]"
                  >
                    samahansysdev@addu.edu.ph
                  </a>
                </div>

                {/* Social */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <IoIosPeople className="text-[var(--color-yellow2)] text-2xl" />
                    <span className="font-medium text-xl">Social</span>
                  </div>
                  <div className="flex flex-col ml-8 gap-2 ">
                    <a
                  href="https://facebook.com/samahansysdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-base underline hover:text-[var(--color-yellow3)]"
                >
                  <FaFacebookSquare className="text-[var(--color-yellow2)] text-1xl " />
                  SAMAHAN Systems Development
                </a>
                <a
                  href="https://instagram.com/samahansysdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-base underline hover:text-[var(--color-yellow3)]"
                >
                  <RiInstagramFill className="text-[var(--color-yellow2)] text-1.5xl" />
                  samahansysdev
                </a>
                <a
                  href="https://linkedin.com/company/samahan-systems-development"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-base underline hover:text-[var(--color-yellow3)]"
                >
                  <FaLinkedin className="text-[var(--color-yellow2)] text-1xl" />
                  SAMAHAN Systems Development
                </a>
                  </div>
                </div>                          
              </div>
            </div>
          </div>

          {/* Right Side: Form Section */}
          <div className="bg-white p-8 rounded-b-xl md:rounded-r-xl md:rounded-bl-none">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--color-blue3)] text-center">
            Send us a Message!
          </h2>
            <form onSubmit={handleSubmit}>
            {/* Name Inputs: 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium mb-2 text-[var(--color-blue2)]">
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  required
                  className="w-full p-1 text-sm text-[var(--color-blue3)] border border---color-blue3 focus:outline-none focus:ring-2 focus:ring-[var(--color-blue2)]"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium mb-2 text-[var(--color-blue2)]">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  required
                  className="w-full p-1 text-sm text-[var(--color-blue3)] border border---color-blue3 focus:outline-none focus:ring-2 focus:ring-[var(--color-blue2)]"
                />
              </div>
            </div>
            {/* Email: full width */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-[var(--color-blue2)]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-1 text-sm text-[var(--color-blue3)] border border---color-blue3 focus:outline-none focus:ring-2 focus:ring-[var(--color-blue2) ]"
              />
            </div>
            {/* Name Inputs: 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium mb-2 text-[var(--color-blue2)]">
                  Organization (Optional)
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                
                  className="w-full p-1 text-sm text-[var(--color-blue3)] border border---color-blue3 focus:outline-none focus:ring-2 focus:ring-[var(--color-blue2)]"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium mb-2 text-[var(--color-blue2)]">
                  Position (Optional)
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  
                  className="w-full p-1 text-sm text-[var(--color-blue3)] border border---color-blue3 focus:outline-none focus:ring-2 focus:ring-[var(--color-blue2)]"
                />
              </div>
            </div>

            {/* Message: full width */}
            <div className="mb-2"> {/* Reduced margin */}
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-[var(--color-blue2)]">
                Message
              </label>
              <textarea
              id="message"
              name="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-3 border border---color-blue3 bg-white text-[var(--color-blue3)] focus:ring-2 focus:ring-[var(--color-blue2)] resize-none overflow-y-auto"
              style={{
                minHeight: "90px",
                maxHeight: "180px",
                scrollbarColor: "#22336c #e5e7eb",
              }}
            />
            </div>

            {/* File Upload: full width */}
            <div className="mb-6"> {/* Reduced margin */}
              <label htmlFor="file-upload" className="block text-sm font-medium mb-2 text-[var(--color-blue2)]">
                Upload Document (Optional)
              </label>
              <div className="flex items-center gap-3 mt-5">
                <div className="relative">
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer bg-[var(--color-blue3)] text-white font-semibold rounded-full px-6 py-2 transition hover:bg-[var(--color-blue2)]"
                  >
                    Choose File
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    accept="image/*, .pdf, .docx"
                    onChange={handleFileChange}
                    className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer"
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
                <span className="text-xs text-gray-500">
                  JPEG, PNG, PDF, DOCX formats up to Xmb
                </span>
              </div>
              {isFileOverLimit && (
                <p className="text-red-500 mt-2">You can only upload up to 5 files.</p>
              )}
            </div>


            {/* File Thumbnails */}
            {files.length > 0 && (
              <div className="mb-6">
                <div
                  className="flex items-end space-x-3 overflow-x-auto overflow-y-hidden whitespace-nowrap pb-2"
                  style={{
                    
                    scrollbarColor: "#22336c #e5e7eb",
                    maxWidth: "50%", // Ensures it doesn't overflow the form
                    minHeight: "90px", // Adjust height as needed
                  }}
                >
                  {files.map((file, idx) => (
                    <div key={idx} className="file-thumbnail flex flex-col items-center">
                      {file.type.startsWith("image/") ? (
                        <img
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          className="w-16 h-16 object-cover"
                        />
                      ) : (
                        <div className="w-16 h-16 flex items-center justify-center bg-[var(--color-blue3)]">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7v10M17 7v10M7 7h10M7 17h10" />
                          </svg>
                        </div>
                      )}
                      <p className="text-center text-xs truncate w-16 text-[var(--color-blue3)]">{file.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

              
            {/* Submit Button */}
            <div className="flex justify-end">
              <Button
                variant="yellow"
                size="normal"
                type="submit"
                className="rounded-full px-20 py-3 text-lg"
              >
                SEND
              </Button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;