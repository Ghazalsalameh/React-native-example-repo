import { useMemo } from "react";
import { IconSource } from "react-native-paper/lib/typescript/src/components/Icon";
import {
  BookAnAppointmentIcon,
  CareTeamIcon,
  ConsultantIcon,
  InteractiveSessionsIcon,
  MedicationsIcon,
  ReferralsIcon,
} from "../Icons";

export const OfferCardData: (handleClickButton?: (route) => void) => Array<{
  id: string;
  title: string;
  subTitle: string;
  backgroundColor: string;
  icon: IconSource | any;
  buttonDetails: string;
  onToggle?: () => void;
  route?: string;
}> = () => {
  return useMemo(
    () => [
      {
        id: "1",
        title: "See a specialist",
        subTitle: "Referrals",
        buttonDetails: "Validate Referral",
        backgroundColor: "#1D2445",
        route: "referral",
        icon: <ReferralsIcon sx={{ height: 50, width: 50 }} />,
      },
      {
        id: "2",
        title: "Speak to a doctor now",
        subTitle: "Doctor Consultations",
        buttonDetails: "Call Now",
        backgroundColor: "#DC4D24",
        route: "immediate-care",
        icon: <ConsultantIcon sx={{ width: 50, height: 50 }} />,
      },

      {
        id: "3",
        title: "Get medications",
        subTitle: "Medication Delivery",
        buttonDetails: "Dispense Now",
        backgroundColor: "#D89D00",
        route: "coming-soon",
        icon: <MedicationsIcon sx={{ width: 50, height: 50 }} />,
      },
      {
        id: "4",
        title: "Book an appointment with a doctor",
        subTitle: "Appointment Booking",
        buttonDetails: "Book Now",
        backgroundColor: "#305E9D",
        route: "see-a-doctor",
        icon: <BookAnAppointmentIcon sx={{ width: 50, height: 50 }} />,
      },
      {
        id: "5",
        title: "Connect with your care team",
        subTitle: "Personalized Care Team",
        buttonDetails: "Connect Now",
        backgroundColor: "#46A200",
        route: "primary-care",
        icon: <CareTeamIcon sx={{ width: 50, height: 50 }} />,
      },
      {
        id: "6",
        title: "Join interactive wellbeing sessions",
        subTitle: "Informative Videos",
        buttonDetails: "Join Now",
        backgroundColor: "#009AC4",
        route: "interests",
        icon: <InteractiveSessionsIcon sx={{ width: 50, height: 50 }} />,
      },
    ],
    []
  );
};
