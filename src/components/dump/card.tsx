import { serviceItem } from "@/types";
import React from "react";
import Button from "./button";
import { ArrowRight, TrendingUp } from "lucide-react";
import Image from "next/image";

const ServiceCard = ({ service }: { service: serviceItem }) => {
  const { label, btnLabel, image, isInvest } = service;
  return (
    <div className="service-card-bg relative overflow-hidden rounded-3xl flex flex-col justify-between gap-10 py-3 pl-4 grow">
      <h3 className="w-[60%] font-bold text-lg">
        {label}
        {isInvest && (
          <p className="text-md font-normal mt-1 flex gap-1.5">
            Share Price
            <span className="text-green-500 font-semibold flex gap-1">
              +16.38 PKR <TrendingUp />
            </span>
          </p>
        )}
      </h3>

      <Image
        className="object-cover absolute bottom-0 right-0 z-10"
        src={image}
        width={200}
        height={200}
        alt="card image"
      />
      <Button
        className="w-fit z-20"
        label={btnLabel}
        variant="primary"
        rightIcon={<ArrowRight size={18} className="text-white" />}
      />
    </div>
  );
};

export default ServiceCard;
