"use client";

import React, { useState, useEffect, Suspense } from "react";
import Alumni from "@/components/pages/Alumni";
import { useSearchParams } from "next/navigation";

function AlumniWrapper() {
  const searchParams = useSearchParams();
  const departmentParam = searchParams.get("department");
  const [currentDepartment, setCurrentDepartment] = useState(departmentParam || "Full-Stack");

  // Optional: if URL changes during client-side navigation, update state
  useEffect(() => {
    const dept = searchParams.get("department");
    setCurrentDepartment(dept || "Full-Stack");
  }, [searchParams]);

  return (
    <Alumni
      currentDepartment={currentDepartment}
      setCurrentDepartment={setCurrentDepartment}
    />
  );
}

export default function AlumniPage() {
  useEffect(() => {
    document.title = "Alumni";
  }, []);

  return (
    <Suspense fallback={<div>Loading alumni...</div>}>
      <AlumniWrapper />
    </Suspense>
  );
}
