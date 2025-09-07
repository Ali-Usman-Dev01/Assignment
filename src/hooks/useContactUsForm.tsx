"use client";

import { formStateType } from "@/types";
import { useState } from "react";

const initialFormState = {
    name: "",
    email: "",
    phone: "",
    location: "",
    company: "",
    interest: "",
    message: "",
    privacyChecked: false
}

export function useContactUsForm() {
    const [formState, setFormState] = useState<formStateType>(initialFormState)

    const setKeyByValue = (field: string, value: string) => setFormState(prev => ({ ...prev, [field]: value }))
    const submit = () => {
        setFormState(initialFormState);
        alert("Form submited!")
    }

    return {
        formState,
        setKeyByValue,
        submit
    }
}
