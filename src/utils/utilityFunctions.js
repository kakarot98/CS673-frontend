import { useContext } from "react";
import { PatientContext } from "../contexts/PatientContext";

export const capitalize = (s) => {
    return s[0].toUpperCase() + s.slice(1);
  }
