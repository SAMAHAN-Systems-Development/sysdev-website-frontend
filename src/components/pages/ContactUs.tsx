"use client";

import React, { useState, useRef } from "react";
import Button from "../ui/Button"; 
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { HiMiniMapPin } from "react-icons/hi2";
import { IoIosPeople } from "react-icons/io";
import Image from "next/image";

type UploadcareFileInfo = {
  cdnUrl: string;
};
// Uploadcare Widget global
declare global {
  interface Window {
    uploadcare: {
      fileFrom: (
        source: string,
        file: File,
        options?: { filename?: string; contentType?: string }
      ) => { promise: () => Promise<UploadcareFileInfo> };
    };
    UPLOADCARE_PUBLIC_KEY?: string;
  }
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwpblekr"; //change to formspree endpoint
const UPLOADCARE_PUBLIC_KEY = "8255a91f9d7670dacc0c"; // change to your Uploadcare public key

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactUs: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploadcareUrls, setUploadcareUrls] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [isFileOverLimit, setIsFileOverLimit] = useState(false);
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formError, setFormError] = useState<string>("");
  const [emailTouched, setEmailTouched] = useState(false);

  // Store input values for controlled components
  const [formData, setFormData] = useState({
    "first-name": "",
    "last-name": "",
    email: "",
    organization: "",
    position: "",
  });

  // Ref for the hidden file input
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Load Uploadcare Widget on mount (browser only)
  React.useEffect(() => {
    if (typeof window !== "undefined" && !window.uploadcare) {
      const script = document.createElement("script");
      script.src = "https://ucarecdn.com/libs/widget/3.x/uploadcare.full.min.js";
      script.async = true;
      script.onload = () => {
        window.UPLOADCARE_PUBLIC_KEY = UPLOADCARE_PUBLIC_KEY;
      };
      document.body.appendChild(script);
    }
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      // Combine existing and new files
      const newFiles = Array.from(selectedFiles);
      const allFiles = [...files, ...newFiles];
      // Remove duplicates by name + size
      const uniqueFiles = allFiles.filter(
        (file, idx, arr) =>
          arr.findIndex(f => f.name === file.name && f.size === file.size) === idx
      );
      if (uniqueFiles.length > 5) {
        setIsFileOverLimit(true);
        setFiles(uniqueFiles.slice(0, 5));
      } else {
        setIsFileOverLimit(false);
        setFiles(uniqueFiles);
      }
      // Reset input value so same file can be added again if removed
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "message") {
      setMessage(value);
    } else if (name === "email") {
      setFormData(prev => ({
        ...prev,
        email: value,
      }));
      setEmailTouched(true);
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Upload files to Uploadcare and get URLs
  const uploadFilesToUploadcare = async (files: File[]) => {
    if (!window.uploadcare) {
      throw new Error("Uploadcare widget not loaded");
    }

    try {
      const uploadPromises = files.map((file) =>
        window.uploadcare.fileFrom("object", file, { filename: file.name, contentType: file.type }).promise()
      );
      const fileInfos: UploadcareFileInfo[] = await Promise.all(uploadPromises);
      return fileInfos.map((fileInfo) => fileInfo.cdnUrl);
      
      // Log file details
      // console.log("Uploaded file info:", fileInfos);

    } catch (error) {
      console.error("Uploadcare error:", error); // See error in your browser's dev console
      throw error;
    }
  };


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setFormError("");
    setFormState("submitting");

    // Email validation
    if (!emailRegex.test(formData.email)) {
      setFormError("Please enter a valid email address.");
      setFormState("error");
      return;
    }

    try {
      let uploadedFileUrls: string[] = [];

      // If user attached files, upload to Uploadcare first
      if (files.length > 0) {
        uploadedFileUrls = await uploadFilesToUploadcare(files);
        setUploadcareUrls(uploadedFileUrls);
      }

      const data = new FormData();
      data.append("first-name", formData["first-name"]);
      data.append("last-name", formData["last-name"]);
      data.append("email", formData["email"]);
      data.append("organization", formData["organization"]);
      data.append("position", formData["position"]);
      data.append("message", message);

      // Add Uploadcare URLs to Formspree submission
      uploadedFileUrls.forEach((url) => {
        data.append("my_file[]", url);
      });

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFormState("success");
        setFiles([]);
        setUploadcareUrls([]);
        setMessage("");
        setFormData({
          "first-name": "",
          "last-name": "",
          email: "",
          organization: "",
          position: "",
        });
        setEmailTouched(false);
      } else {
        setFormState("error");
        const result = await res.json();
        setFormError(result?.errors?.[0]?.message || "Something went wrong, please try again.");
      }
    } catch {
      setFormError("Something went wrong, please try again.");
      setFormState("error");
    }
  };

  return (
    <div className="contact-us-form w-full min-h-[300px] mx-0 px-0 py-0 pt-8 md:pt-8 md:container md:mx-auto md:px-8 md:py-8 md:max-w-5xl">
      <div className="px-3 md:px-0 flex flex-col items-center md:block">
        <h1 className="text-2xl md:text-4xl font-bold text-center mt-7 mb-3 md:mt-4 md:mb-4 text-[var(--color-blue3)]">
        COLLABORATE WITH <span className="text-[var(--color-yellow2)]">US</span>
        </h1>
        <p className="text-base md:text-lg text-center mb-12 md:mb-8 text-[var(--color-blue3)] max-w-9/12 md:max-w-none">
          Collaborate with our Developer for your next project.
        </p>
      </div>
      <div className="w-full border-0 md:border border-[var(--color-blue3)] rounded-none md:rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-[0.7fr_1fr] gap-0 w-full">
          {/* Left Side: Contact Information */}
          <div className="bg-[var(--color-blue3)] text-white rounded-none md:rounded-l-xl md:rounded-tr-none w-full flex flex-col justify-center items-center">
            <div className="w-5/6 py-8 md:px-2 md:py-2">
              <h2 className="text-2xl md:text-[22px] lg:text-2xl font-semibold mb-4 text-center md:text-start">Contact Information</h2>
              <div className="border-t border-[var(--color-yellow2)] mt-6 mb-8 hidden md:block"></div>
              <div className="space-y-6 flex flex-col w-full items-center">
                {/* Address */}
                <div className="md:mb-10 w-full max-w-lg mx-auto">
                  <div className="flex items-center gap-2 mb-1">
                    <HiMiniMapPin className="text-[var(--color-yellow2)] text-2xl" />
                    <span className="font-medium text-xl">Address</span>
                  </div>
                  <p className="ml-8 text-sm lg:text-base break-words">
                    Ateneo de Davao University. E. Jacinto Street 8016 Davao City Philippines
                  </p>
                </div>
                {/* Email */}
                <div className="md:mb-10 w-full max-w-lg mx-auto">
                  <div className="flex items-center gap-2 mb-1">
                    <MdEmail className="text-[var(--color-yellow2)] text-2xl" />
                    <span className="font-medium text-xl">Email</span>
                  </div>
                  <a
                    href="mailto:samahansysdev@addu.edu.ph"
                    className="ml-8 text-sm lg:text-base text-[var(--color-white)] hover:text-[var(--color-yellow3)]"
                  >
                    samahansysdev@addu.edu.ph
                  </a>
                </div>
                {/* Social */}
                <div className="w-full max-w-lg mx-auto">
                  <div className="flex items-center gap-2 mb-1">
                    <IoIosPeople className="text-[var(--color-yellow2)] text-2xl" />
                    <span className="font-medium text-xl">Social</span>
                  </div>
                  <div className="flex flex-col ml-8 gap-2 text-xs md:text-sm lg:text-base">
                    <a
                      href="https://facebook.com/samahansysdev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 underline hover:text-[var(--color-yellow3)]"
                    >
                      <FaFacebookSquare className="text-[var(--color-yellow2)] text-xl" />
                      SAMAHAN Systems Development
                    </a>
                    <a
                      href="https://instagram.com/samahansysdev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 underline hover:text-[var(--color-yellow3)]"
                    >
                      <RiInstagramFill className="text-[var(--color-yellow2)] text-xl md:-ml-[1px]" />
                      <span className="">samahansysdev</span>
                    </a>
                    <a
                      href="https://linkedin.com/company/samahan-systems-development"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 underline hover:text-[var(--color-yellow3)]"
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
              {/* Success/Error Feedback */}
              {formState === "success" && (
                <div className="mb-4 text-green-600 text-center font-semibold">
                  Thank you for reaching out! Your message has been sent.
                </div>
              )}
              {formState === "error" && (
                <div className="mb-4 text-red-600 text-center font-semibold">
                  {formError || "Something went wrong. Please try again."}
                </div>
              )}
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
                      value={formData["first-name"]}
                      onChange={handleChange}
                      className="w-full p-1 lg:p-2 text-sm text-[var(--color-blue3)] border border-[var(--color-blue3)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue2)]"
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
                      value={formData["last-name"]}
                      onChange={handleChange}
                      className="w-full p-1 lg:p-2 text-sm text-[var(--color-blue3)] border border-[var(--color-blue3)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue2)]"
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
                    value={formData["email"]}
                    onChange={handleChange}
                    onBlur={() => setEmailTouched(true)}
                    className={`w-full p-1 lg:p-2 text-sm text-[var(--color-blue3)] border border-[var(--color-blue3)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue2)] ${emailTouched && !emailRegex.test(formData.email) ? "border-red-500" : ""}`}
                  />
                  {emailTouched && !emailRegex.test(formData.email) && (
                    <p className="text-red-500 text-xs mt-1">Please enter a valid email address.</p>
                  )}
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
                      value={formData["organization"]}
                      onChange={handleChange}
                      className="w-full p-1 lg:p-2 text-sm text-[var(--color-blue3)] border border-[var(--color-blue3)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue2)]"
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
                      value={formData["position"]}
                      onChange={handleChange}
                      className="w-full p-1 lg:p-2 text-sm text-[var(--color-blue3)] border border-[var(--color-blue3)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue2)]"
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
                    onChange={handleChange}
                    required
                    className="w-full p-1 lg:p-2 border border-[var(--color-blue3)] bg-white text-[var(--color-blue3)] focus:ring-2 focus:ring-[var(--color-blue2)] resize-none overflow-y-auto"
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
                  <div className="flex items-center mt-2 w-full">
                    <div className="relative w-28 md:w-36">
                      <input
                        id="file-upload"
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept="image/*, .pdf, .docx, .xlsx, .txt"
                        onChange={handleFileChange}
                        className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer hidden"
                      />

                      <label
                        htmlFor="file-upload"
                        className="cursor-pointer bg-[var(--color-blue3)] text-white rounded-full px-4 py-2 md:px-3 md:py-1.5 transition-all hover:bg-[var(--color-blue2)] w-full text-xs md:text-base"
                      >
                        Choose File
                      </label>
                    </div>
                    <span className="text-[10px] md:text-sm lg:text-base text-gray-500">
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
                        maxWidth: "50%",
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
                <div className="flex justify-center md:justify-end items-center h-13 w-full">
                  <Button
                    variant="yellow"
                    size="normal"
                    type="submit"
                    className="w-3/5 md:w-40"
                    disabled={formState === "submitting"}
                  >
                    {formState === "submitting" ? "SENDING..." : "SEND"}
                  </Button>
                </div>
                {/* Display Uploadcare URLs if files uploaded */}
                {uploadcareUrls.length > 0 && (
                  <div className="mt-4 text-xs text-gray-500">
                    <div>Files uploaded:</div>
                    <ul>
                      {uploadcareUrls.map((url, idx) => (
                        <li key={idx}>
                          <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;