"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    const handleLumaMessage = (event: MessageEvent) => {
      if (event.origin !== "https://luma.com") return;

      if (event.data?.type === "luma:purchase") {
        setRegistered(true);

        setTimeout(() => {
          document.getElementById("whatsapp-section")?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 500);
      }
    };

    window.addEventListener("message", handleLumaMessage);

    return () => {
      window.removeEventListener("message", handleLumaMessage);
    };
  }, []);

  return (
    <main className="site">
      {/* HERO */}
      <section className="hero">
        <div className="hero-image" />

        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-line" />

          <p className="hero-kicker">WORKFORCE VOLUNTEER MEETUP</p>

          <h1>
            BE PART OF
            <br />
            <span>THE WORKFORCE.</span>
          </h1>

          <p className="hero-description">
            HOPE10 Experience is bringing people together for a decade of hope
            and transformation. Join the team helping make it happen.
          </p>

          <a href="#registration" className="hero-button">
            JOIN THE WORKFORCE
            <span>↓</span>
          </a>
        </div>

        <div className="hero-bottom">
          <span>HOPE10 EXPERIENCE</span>
          <span>01 — WORKFORCE</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro">
        <div className="section-number">01</div>

        <div className="intro-content">
          <p className="eyebrow">THE CALL TO SERVE</p>

          <h2>
            More than an event.
            <br />
            <span>A movement.</span>
          </h2>

          <p>
            Behind every great experience is a team of people willing to serve.
            The HOPE10 workforce is made up of people ready to contribute their
            time, energy, creativity and skills.
          </p>

          <p>
            If you are ready to be part of what God is doing through HOPE10,
            this is your opportunity to step forward.
          </p>
        </div>
      </section>

      {/* REGISTRATION */}
      <section id="registration" className="registration">
        <div className="registration-heading">
          <div>
            <p className="eyebrow">02 — REGISTRATION</p>

            <h2>
              JOIN THE
              <br />
              <span>WORKFORCE.</span>
            </h2>
          </div>

          <p className="registration-note">
            Complete the registration below. Details about the physical
            workforce meetup, including the date and venue, will be shared with
            registered volunteers.
          </p>
        </div>

        <div className="luma-wrapper">
          <iframe
            src="https://luma.com/embed/event/evt-Vo7BtTzO6CTzgAN/simple"
            title="HOPE10 Experience Workforce Registration"
            className="luma-frame"
            allow="fullscreen; payment"
          />
        </div>
      </section>

      {/* WHATSAPP — ONLY AFTER REGISTRATION */}
      {registered && (
        <section id="whatsapp-section" className="whatsapp-section">
          <div className="whatsapp-inner">
            <p className="eyebrow">03 — STAY CONNECTED</p>

            <h2>
              REGISTER.
              <br />
              <span>THEN CONNECT.</span>
            </h2>

            <p>
              You&apos;re officially registered for the HOPE10 workforce. Join
              the official WhatsApp group to receive the meetup date, venue,
              instructions and important updates.
            </p>

            <a
              href="https://chat.whatsapp.com/Ip7smcfuxETBTCdPEBrJgi"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              JOIN THE WORKFORCE GROUP
              <span>→</span>
            </a>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <Image
          src="/hope10-logo.png"
          alt="HOPE10 Experience"
          width={360}
          height={220}
          className="footer-logo"
        />

        <p>AN EVENT WHERE JESUS MEETS MEN</p>

        <div className="footer-bottom">
          <span>HOPE10 EXPERIENCE</span>
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}
