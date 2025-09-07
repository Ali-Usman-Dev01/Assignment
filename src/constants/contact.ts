export const contact = {
    heading: "contact us",
    subHeading: "Let’s simplify your buying, selling, or investing journey",
    description: "Whether you’re a supplier, buyer, or investor, our team is here to guide you every step of the way",
    location: [
        {
            heading: "Address",
            description: "Zarea Limited, Delta 6 Office No. 6011, NASTP, Abid Majeed Road Lahore Cantt."
        },
        {
            heading: "WhatsApp Support",
            description: "+92 325 7111222"
        },
        {
            heading: "Landline Number",
            description: "042 32176455"
        },
        {
            heading: "Email",
            description: "info@zarea.pk"
        },
    ],
    locationImage: '/assets/images/location.png',
    form: {
        heading: "Book a Schedule with Our Experts",
        fields: [
            {
                key: "name",
                label: "Full Name",
                placeholder: "full name",
                isRequired: true,
                type: "input"
            },
            {
                key: "email",
                label: "Email",
                placeholder: "Your work email",
                isRequired: true,
                type: "input"
            },
            {
                key: "phone",
                label: "Phone",
                placeholder: "Phone number",
                isRequired: true,
                type: "input"
            },
            {
                key: "location",
                label: "Location",
                placeholder: "Your Location",
                isRequired: true,
                type: "input"
            },
            {
                key: "company",
                label: "Company Name",
                placeholder: "xyz company",
                isRequired: true,
                type: "input"
            },
            {
                key: "interest",
                label: "I am Interested in",
                placeholder: "Select",
                isRequired: true,
                type: "select"
            },
        ],
        textarea: {
            key: "message",
            label: "Message",
            placeholder: "Feel Free to Write",
            isRequired: false,
        },
        acknowledge: "I acknowledge, read, and understood Privacy Policy.",
        submit: "Book Your Free Consultation"
    }
}