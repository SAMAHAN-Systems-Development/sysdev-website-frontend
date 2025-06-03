"use client";

import React, { useState, useEffect } from "react";
import Button from "../ui/Button";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { HiMiniMapPin } from "react-icons/hi2";
import { IoIosPeople } from "react-icons/io";
import Image from "next/image";

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

  useEffect(() => {
    // Any client-side dynamic content can be handled here
  }, []);

  return (
    <div className="contact-us-form w-full max-w-full min-h-[300px] mx-0 px-0 py-0 pt-8 md:pt-8 md:container md:mx-auto md:px-8 md:py-8 md:max-w-7xl">
      <h1 className="text-4xl font-bold text-center mt-40 mb-5 md:mt-4 md:mb-4 text-[var(--color-blue3)]">
        COLLABORATE WITH <span className="text-[var(--color-yellow2)]">US</span>
      </h1>
      <p className="text-lg text-center mb-40 md:mb-15 lg:mb-15 text-[var(--color-blue3)]">
        Collaborate with our Developer for your next project.
      </p>

      <div className="w-full border-0 md:border border-[var(--color-blue3)] rounded-none md:rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-[0.7fr_1fr] gap-0">
          {/* Left Side: Contact Information */}
          <div className="bg-[var(--color-blue3)] text-white p-0 rounded-none md:p-8 md:rounded-l-xl md:rounded-tr-none">
            <div className="px-4 py-6 mb-10 md:px-0 md:py-2">
              <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h2>
              <div className="border-t border-[var(--color-yellow2)] mb-6"></div>
              <div className="space-y-6">
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
                <div className="mb-10">
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
                  <div className="flex items-center gap-2 mb-1 ">
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
                      <FaFacebookSquare className="text-[var(--color-yellow2)] text-xl" />
                      SAMAHAN Systems Development
                    </a>
                    <a
                      href="https://instagram.com/samahansysdev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-base underline hover:text-[var(--color-yellow3)]"
                    >
                      <RiInstagramFill className="text-[var(--color-yellow2)] text-xl" />
                      samahansysdev
                    </a>
                    <a
                      href="https://linkedin.com/company/samahan-systems-development"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-base underline hover:text-[var(--color-yellow3)]"
                    >
                      <FaLinkedin className="text-[var(--color-yellow2)] text-xl" />
                      SAMAHAN Systems Development
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form Section */}
          <div className="bg-white p-0 rounded-none md:p-8 md:rounded-r-xl md:rounded-bl-none">
            <div className="px-4 py-6 md:px-0 md:py-0">
              <h2 className="text-2xl font-semibold mb-6 text-[var(--color-blue3)] text-center">
                Send us a Message!
              </h2>
              <form onSubmit={handleSubmit}>
                {/* Name Inputs: 2 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium mb-2 text-[var(--color-blue3)]">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      required
                      className="w-full p-2 text-sm text-[var(--color-blue3)] border border-[var(--color-blue3)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue2)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium mb-2 text-[var(--color-blue3)]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      required
                      className="w-full p-2 text-sm text-[var(--color-blue3)] border border-[var(--color-blue3)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue2)]"
                    />
                  </div>
                </div>
                {/* Email: full width */}
                <div className="mb-3">
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-[var(--color-blue3)]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-2 text-sm text-[var(--color-blue3)] border border-[var(--color-blue3)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue2)]"
                  />
                </div>
                {/* Name Inputs: 2 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium mb-2 text-[var(--color-blue3)]">
                      Organization (Optional)
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      className="w-full p-2 text-sm text-[var(--color-blue3)] border border-[var(--color-blue3)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue2)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium mb-2 text-[var(--color-blue3)]">
                      Position (Optional)
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      className="w-full p-2 text-sm text-[var(--color-blue3)] border border-[var(--color-blue3)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue2)]"
                    />
                  </div>
                </div>

                {/* Message: full width */}
                <div className="mb-2">
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-[var(--color-blue3)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full p-2 border border-[var(--color-blue3)] bg-white text-[var(--color-blue3)] focus:ring-2 focus:ring-[var(--color-blue2)] resize-none overflow-y-auto"
                    style={{
                      minHeight: "90px",
                      maxHeight: "180px",
                      scrollbarColor: "#22336c #e5e7eb",
                    }}
                  />
                </div>

                {/* File Upload: full width */}
                <div className="mb-6">
                  <label htmlFor="file-upload" className="block text-sm font-medium mb-2 text-[var(--color-blue3)]">
                    Upload Document (Optional)
                  </label>
                  <div className="flex items-center gap-3 mt-2 w-full">
                    <div className="relative w-full sm:w-auto">
                      <input
                        id="file-upload"
                        type="file"
                        multiple
                        accept="image/*, .pdf, .docx"
                        onChange={handleFileChange}
                        className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer hidden"
                      />
                      <label
                        htmlFor="file-upload"
                        className="cursor-pointer bg-[var(--color-blue3)] text-white rounded-xl sm:rounded-full px-4 py-2 transition-all hover:bg-[var(--color-blue2)] w-full sm:w-auto text-xs sm:text-sm md:text-xs lg:text-lg"
                      >
                        Choose File
                      </label>
                      <span className="text-gray-500 ml-2 text-[0.7rem] sm:text-xs md:text-sm lg:text-base">
                        JPEG, PNG, PDF, DOCX formats up to Xmb
                      </span>
                    </div>
                  </div>
                  {isFileOverLimit && (
                    <p className="text-red-500 mt-2">You can only upload up to 5 files.</p>
                  )}
                </div>

                {/* File Thumbnails */}
                {files.length > 0 && (
                  <div className="mb-6">
                    <div
                      className="flex items-end space-x-3 overflow-x-auto overflow-y-hidden whitespace-nowrap pb-2 w-full md:max-w-[50%]"
                      style={{
                        scrollbarColor: "#22336c #e5e7eb",
                        minHeight: "90px",
                      }}
                    >
                      {files.map((file, idx) => (
                        <div key={idx} className="file-thumbnail flex flex-col items-center">
                          {file.type.startsWith("image/") ? (
                            <Image
                              src={URL.createObjectURL(file)}
                              alt={file.name}
                              width={64}
                              height={64}
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

               <div className="flex justify-center sm:justify-center md:justify-end items-center">
                  <Button
                    variant="yellow"
                    size="normal"
                    type="submit"
                    className="w-60"
                    style={{ height: '50px', fontSize: '1.1rem' }} // fontSize: 1.25rem is text-lg
                  >
                    SEND
                  </Button>
                </div>




              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;