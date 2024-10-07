// OnlinePresenceBooster.js

import React from "react";
import "./OnlinePresence.scss";
import logo from "../img/logo.png"; // Ensure you have a logo image in your project
import qrCode from "../img/qrcode.png"; // Ensure you have a QR code image

const OnlinePresenceBooster = () => {
  return (
    <div className="booster-section">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="title">ONLINE PRESENCE BOOSTER</h1>
      <p className="description">
        Social media management designed to actually engage your audience and
        convert real sales. With a dedicated social media manager, our package
        includes:
      </p>
      <ul className="package-list">
        <li>
          <strong>1. A Digital Media Audit</strong> - We will audit your business
          current footprint on all digital media channels, and present insights
          to craft a strategy for growth.
        </li>
        <li>
          <strong>2. Strategy</strong> - We will put together a social media strategy
          aligned with your business goals to give you the best possible result
          knowing what exactly we are striving for.
        </li>
        <li>
          <strong>3. Basic SEO & Digital Media Optimization</strong> - Here we will
          ensure that your business is visible and easy to find on Google and
          your relevant online platforms are in sync and up to date.
        </li>
        <li>
          <strong>4. Content Creation</strong> - We will create captivating posts,
          graphics, and videos tailored to your brand (comes with 4 videos &
          4 posts a month).
        </li>
        <li>
          <strong>5. Account Management</strong> - You will have a dedicated social
          media manager to handle the day-to-day—posting, engaging, and
          monitoring—of your social media presence.
        </li>
        <li>
          <strong>6. Performance Tracking</strong> - We will present monthly reports
          to measure growth and engagement.
        </li>
      </ul>
      <div className="price">
        For only <span>$150/month</span>
      </div>
      <div className="footer">
        <div className="contact-info">
          <img src={logo} alt="Logo" className="footer-logo" />
          <span>+263771214320</span>
        </div>
        <div className="qr-section">
          <p>Scan QR Code to Get Started</p>
          <img src={qrCode} alt="QR Code" className="qr-code" />
        </div>
      </div>
    </div>
  );
};

export default OnlinePresenceBooster;