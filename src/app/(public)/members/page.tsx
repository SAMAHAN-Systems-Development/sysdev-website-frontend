"use client";

import React, { useState, useEffect, Suspense } from "react";
import MembersPage from "@/components/pages/Members";
import { useSearchParams } from "next/navigation";

// Extract logic that uses `useSearchParams()` into a separate client component
function MembersWrapper() {
  const searchParams = useSearchParams();
  const [currentDepartment, setCurrentDepartment] = useState("Officers");

  useEffect(() => {
    const dept = searchParams.get("department");
    setCurrentDepartment(dept || "Officers");
  }, [searchParams]);

  return (
    <MembersPage
      currentDepartment={currentDepartment}
      setCurrentDepartment={setCurrentDepartment}
    />
  );
}

// Main page component
export default function Page() {
  return (
    <Suspense fallback={<div>Loading members...</div>}>
      <MembersWrapper />
    </Suspense>
  );
}
