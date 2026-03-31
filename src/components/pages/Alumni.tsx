import React from "react";
import { AlumniMeetTheTeamSection } from "../sections/AlumniMeetTheTeamSection";

export interface AlumniPageProps {
  currentDepartment: string;
  setCurrentDepartment: React.Dispatch<React.SetStateAction<string>>;
}

const Alumni: React.FC<AlumniPageProps> = ({
  currentDepartment,
  setCurrentDepartment,
}) => {
  return (
    <div>
      <AlumniMeetTheTeamSection
        currentDepartment={currentDepartment}
        setCurrentDepartment={setCurrentDepartment}
      />
      {/* <ApplyCard/> */}
    </div>
  );
};

export default Alumni;
