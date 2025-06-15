"use client";

import React, { useState, useEffect, Suspense } from "react";
import MembersPage from "@/components/pages/Members";
import { useSearchParams } from "next/navigation";

function MembersWrapper() {
  const searchParams = useSearchParams();
  const departmentParam = searchParams.get("department");
  const [currentDepartment, setCurrentDepartment] = useState(departmentParam || "Full-Stack");

  // Optional: if URL changes during client-side navigation, update state
  useEffect(() => {
    const dept = searchParams.get("department");
    setCurrentDepartment(dept || "Full-Stack");
  }, [searchParams]);

  return (
    <MembersPage
      currentDepartment={currentDepartment}
      setCurrentDepartment={setCurrentDepartment}
    />
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading members...</div>}>
      <MembersWrapper />
    </Suspense>
  );
}
