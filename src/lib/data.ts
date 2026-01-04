import { Stethoscope, Droplets, Thermometer, Activity, Scale, HeartPulse } from "lucide-react";

export const mockMedicalProfile = {
  name: "Jane Doe",
  dob: "1990-05-15",
  gender: "female",
  bloodGroup: "O+",
  height: "165 cm",
  weight: "68 kg",
};

export const mockToiletSensorData = {
  urine: {
    ph: 6.8,
    glucose: "Negative",
    ketones: "Negative",
    blood: "Negative",
    urobilinogen: 0.2,
  },
  stool: {
    consistency: "Type 4",
    color: "Brown",
  },
  vitals: {
    heartRate: 72, // bpm
    bloodPressure: "118/75", // mmHg
    bodyTemperature: 36.8, // Celsius
  }
};

export const realTimeHealthMetrics = [
  {
    name: "Heart Rate",
    value: "72 bpm",
    icon: HeartPulse,
    color: "text-red-500",
  },
  {
    name: "Blood Pressure",
    value: "118/75",
    icon: Stethoscope,
    color: "text-blue-500",
  },
  {
    name: "Hydration",
    value: "Optimal",
    icon: Droplets,
    color: "text-sky-500",
  },
  {
    name: "Body Temp",
    value: "36.8°C",
    icon: Thermometer,
    color: "text-orange-500",
  },
  {
    name: "Activity Level",
    value: "Moderate",
    icon: Activity,
    color: "text-green-500",
  },
  {
    name: "Weight",
    value: "68.2 kg",
    icon: Scale,
    color: "text-purple-500",
  },
];
