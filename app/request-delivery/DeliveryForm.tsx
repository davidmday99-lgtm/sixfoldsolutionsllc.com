"use client";

import { FormEvent, useState } from "react";
import { businessInfo } from "../config";

type FormStatus = "idle" | "success";

export function DeliveryForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    if (String(data.get("website") ?? "").trim()) return;

    const lines = [
      `Full Name: ${data.get("fullName")}`,
      `Company: ${data.get("company") || "Not provided"}`,
      `Vessel / Towboat: ${data.get("vesselName")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email") || "Not provided"}`,
      `Pickup Location: ${data.get("pickupLocation")}`,
      `Delivery Location: ${data.get("deliveryLocation")}`,
      `Dock / Terminal: ${data.get("dockTerminal") || "Not provided"}`,
      `Requested Date: ${data.get("requestedDate")}`,
      `Requested Time: ${data.get("requestedTime") || "Not provided"}`,
      "",
      "Items Requested:",
      String(data.get("deliveryNeeds")),
      "",
      "Additional Instructions:",
      String(data.get("instructions") || "None"),
    ];

    const subject = `Delivery Request — ${data.get("vesselName")}`;
    const mailto = `mailto:${businessInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;

    setStatus("success");
    window.location.href = mailto;
  }

  if (status === "success") {
    return (
      <div className="form-confirmation" role="status">
        <span aria-hidden="true">✓</span>
        <p className="eyebrow">EMAIL READY</p>
        <h2>Your delivery request is ready to send.</h2>
        <p>
          Your email app should open with the request addressed to {businessInfo.email}.
          Send that email to complete your request, or call {businessInfo.phone}.
        </p>
        <a className="btn btn-primary" href={`mailto:${businessInfo.email}`}>
          Email Six Fold
        </a>
        <button className="btn btn-secondary" type="button" onClick={() => setStatus("idle")}>
          Edit request
        </button>
      </div>
    );
  }

  return (
    <form className="delivery-form" onSubmit={handleSubmit} noValidate>
      <div className="form-section-heading">
        <span>01</span>
        <div>
          <h2>Contact & Vessel</h2>
          <p>Tell us who we should coordinate with.</p>
        </div>
      </div>

      <div className="form-grid">
        <FormField label="Full Name" name="fullName" required />
        <FormField label="Company" name="company" />
        <FormField label="Vessel / Towboat Name" name="vesselName" required />
        <FormField label="Phone Number" name="phone" type="tel" autoComplete="tel" required />
        <FormField label="Email Address" name="email" type="email" autoComplete="email" />
      </div>

      <div className="form-section-heading">
        <span>02</span>
        <div>
          <h2>Pickup & Delivery</h2>
          <p>Provide the known locations and access details.</p>
        </div>
      </div>

      <div className="form-grid">
        <FormField label="Pickup Location" name="pickupLocation" required />
        <FormField label="Delivery Location" name="deliveryLocation" required />
        <FormField label="Dock / Terminal" name="dockTerminal" />
        <FormField label="Requested Date" name="requestedDate" type="date" required />
        <FormField label="Requested Time" name="requestedTime" type="time" />
      </div>

      <div className="form-section-heading">
        <span>03</span>
        <div>
          <h2>Request Details</h2>
          <p>Be as specific as you can about the items and handoff.</p>
        </div>
      </div>

      <div className="form-grid">
        <label className="field field-full">
          <span>What Do You Need Delivered? <b aria-hidden="true">*</b></span>
          <textarea name="deliveryNeeds" rows={5} required />
        </label>
        <label className="field field-full">
          <span>Additional Instructions</span>
          <textarea name="instructions" rows={4} />
        </label>
        <label className="honeypot" aria-hidden="true">
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="form-submit-row">
        <p><b aria-hidden="true">*</b> Required fields</p>
        <button className="btn btn-primary submit-button" type="submit">
          Prepare Delivery Email
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </form>
  );
}

function FormField({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="field">
      <span>{label} {required && <b aria-hidden="true">*</b>}</span>
      <input name={name} type={type} required={required} autoComplete={autoComplete} />
    </label>
  );
}
