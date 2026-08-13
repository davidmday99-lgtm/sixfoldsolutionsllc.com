"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function DeliveryForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/delivery", {
        method: "POST",
        body: new FormData(form),
      });

      if (!response.ok) throw new Error("Request could not be submitted");

      form.reset();
      setStatus("success");
      setMessage(
        "Your request has been recorded. A dispatch email connection still needs to be configured before this form can notify Six Fold automatically.",
      );
    } catch {
      setStatus("error");
      setMessage(
        "Your request could not be submitted. Please review the form and try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="form-confirmation" role="status">
        <span aria-hidden="true">✓</span>
        <p className="eyebrow">REQUEST RECEIVED</p>
        <h2>Thank you. Your details are ready for review.</h2>
        <p>{message}</p>
        <button className="btn btn-secondary" type="button" onClick={() => setStatus("idle")}>
          Submit another request
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

      {status === "error" && <p className="form-error" role="alert">{message}</p>}
      <div className="form-submit-row">
        <p><b aria-hidden="true">*</b> Required fields</p>
        <button className="btn btn-primary submit-button" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Submitting…" : "Submit Delivery Request"}
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

