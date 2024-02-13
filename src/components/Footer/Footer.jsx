import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import "./Footer.css";

function Footer() {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-5/12 px-4 mb-8 md:mb-0">
          <div className="flex h-full flex-col justify-between">
            <div className="mb-4 inline-flex items-center">
              <Logo className="w-16 h-16" />
            </div>
            <div>
              <p className="text-sm text-gray-600">
                &copy; Copyright 2024. All Rights Reserved by{" "}
                <a
                  className="text-white hover:text-gray-300"
                  href="https://www.linkedin.com/in/gauravsinghgkp/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Gaurav Singh
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/12 px-4 mb-5">
          <div>
            <h3 className="text-xs font-semibold uppercase text-gray-500 mb-4 ">
              Company
            </h3>
            <ul>
              <li className="mb-4">
                <Link className="text-base hover:text-gray-300" to="/">
                  Features
                </Link>
              </li>
              <li>
                <Link className="text-base hover:text-gray-300" to="/">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/12 px-4 mb-5">
          <div>
            <h3 className="text-xs font-semibold uppercase text-gray-500 mb-4">
              Support
            </h3>
            <ul>
              <li className="mb-4">
                <Link className="text-base hover:text-gray-300" to="/">
                  Account
                </Link>
              </li>
              <li className="mb-4">
                <Link className="text-base hover:text-gray-300" to="/">
                  Help
                </Link>
              </li>
              <li className="mb-4">
                <Link className="text-base hover:text-gray-300" to="/">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-base hover:text-gray-300" to="/">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-3/12 px-4">
          <div>
            <h3 className="text-xs font-semibold uppercase text-gray-500 mb-4">
              Legals
            </h3>
            <ul>
              <li className="mb-4">
                <Link className="text-base hover:text-gray-300" to="/">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="mb-4">
                <Link className="text-base hover:text-gray-300" to="/">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
