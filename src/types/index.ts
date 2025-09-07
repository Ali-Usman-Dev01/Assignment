import React, { ReactNode } from "react";

export interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "outline" | "secondary_outline";
  onClick?: () => void;
  className?: string;
  rightIcon?: ReactNode;
}

export type meunItem = {
  to: string;
  label: string;
  isPopover: boolean;
  focused: boolean;
};

export type serviceItem = {
  btnLabel: string;
  label: string;
  image: string;
  isInvest: boolean;
};

export type StepperIndicatorProps = {
  nuberOfsteps: number;
  activeIndex: number;
  className?: string;
};

export type InputProps = {
  value: string | boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  label: string;
  placeholder: string;
  name: string;
  required: boolean;
  type: string;
};
export type formStateType = {
  name: string;
  email: string;
  phone: string;
  location: string;
  company: string;
  interest: string;
  message: string;
  privacyChecked: boolean;
};

export type ReportProps = {
  reportSection: {
    heading: string;
    btnLabel: string;
    reports: {
      fileIconImage: string;
      fileLabel: string;
      dated: string;
      btnLabel: string;
      btnIconImage: string;
    }[];
  };
};

export type ReleaseProps = {
  releases: {
    label: string;
    btnLabel: string;
    image: string;
    tag: string;
    title: string;
    description: string;
  }[];
};
