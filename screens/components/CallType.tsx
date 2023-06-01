import { useMemo } from "react";
import { IconSource } from "react-native-paper/lib/typescript/src/components/Icon";
import { green } from "../../common/CommonColors";
import { CareTeamIcon, ConsultantIcon } from "../Icons";

export const CallType: Array<{
  id: string;
  title: string;
  subTitle: string;
  icon: IconSource | any;
  buttonDetails: string;
  price: string;
  date: string;
}> = [
  {
    id: "1",
    title: "Register with a primary care or chronic care team",
    subTitle: "to Primary Care Doctors",
    buttonDetails: "Call Now",
    date: "Starting October 1, 2023",
    price: "Free, No Copay",
    icon: <CareTeamIcon sx={{ height: 50, width: 50 }} />,
  },
  {
    id: "2",
    title: "Connect with your care team",
    subTitle: "to General Practitioner Doctors",
    buttonDetails: "Check Directory",
    date: "Starting October 1, 2023",
    price: "Free, No Copay",
    icon: <ConsultantIcon fill={green} sx={{ width: 50, height: 50 }} />,
  },
];
