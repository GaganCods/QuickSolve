import React from "react";
import {
  Calculator,
  ShieldCheck,
  Github,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-white/5 bg-[#030303] pt-16 pb-8 px-6 md:px-12 mt-24 relative overflow-hidden">
      <div className="glow-background w-[600px] h-[600px] top-[-300px] right-[-200px] opacity-20"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 relative z-10">
        <div className="flex flex-col">
          <Link
            to="/"
            onClick={scrollToTop}
            className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 rounded-full bg-[var(--color-brand)] flex items-center justify-center shadow-[0_0_10px_rgba(249,115,22,0.5)]">
              <Calculator className="w-5 h-5 text-[#050507]" />
            </div>
            <span className="font-bold tracking-tight text-xl uppercase text-white">
              Quick<span className="text-[var(--color-brand)]">Solve</span>
            </span>
          </Link>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed mb-6 font-semibold text-white/90">
            QuickSolve — Smart Calculations. Instant Results.
          </p>
          <div className="flex items-center gap-4 text-gray-500">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">
            Popular Calculators
          </h4>
          <ul className="space-y-2 text-gray-400 text-xs font-semibold">
            <li>
              <Link
                to="/calculators/emi"
                onClick={scrollToTop}
                className="hover:text-orange-400 transition-colors"
              >
                EMI Calculator
              </Link>
            </li>
            <li>
              <Link
                to="/calculators/bmi"
                onClick={scrollToTop}
                className="hover:text-orange-400 transition-colors"
              >
                BMI Calculator
              </Link>
            </li>
            <li>
              <Link
                to="/calculators/sip"
                onClick={scrollToTop}
                className="hover:text-orange-400 transition-colors"
              >
                SIP Calculator
              </Link>
            </li>
            <li>
              <Link
                to="/calculators/gst"
                onClick={scrollToTop}
                className="hover:text-orange-400 transition-colors"
              >
                GST Calculator
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">
            Categories & Blog
          </h4>
          <ul className="space-y-2 text-gray-400 text-xs font-semibold">
            <li>
              <Link
                to="/calculators"
                onClick={scrollToTop}
                className="hover:text-orange-400 transition-colors"
              >
                Health & Everyday
              </Link>
            </li>
            <li>
              <Link
                to="/calculators"
                onClick={scrollToTop}
                className="hover:text-orange-400 transition-colors"
              >
                Finance & Investing
              </Link>
            </li>
            <li>
              <Link
                to="/calculators"
                onClick={scrollToTop}
                className="hover:text-orange-400 transition-colors"
              >
                Crypto & Web3
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 transition-colors">
                Blog: Financial Guides
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 transition-colors">
                Blog: Formula Explanations
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-gray-400 text-xs font-semibold">
            <li>
              <Link
                to="/about"
                onClick={scrollToTop}
                className="hover:text-orange-400 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="hover:text-orange-400 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                onClick={scrollToTop}
                className="hover:text-orange-400 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                onClick={scrollToTop}
                className="hover:text-orange-400 transition-colors"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-[#1f1f2e] flex flex-col md:flex-row items-center justify-between text-[10px] font-mono text-gray-600 uppercase relative z-10 gap-4 md:gap-0">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <p>
            &copy; {new Date().getFullYear()} QuickSolve Int. All rights
            reserved.
          </p>
          <div className="hidden md:block w-1 h-1 rounded-full bg-gray-700"></div>
          <p>Last Updated: October 2023</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-1 text-green-500 border border-green-500/20 bg-green-500/5 px-2 py-1 rounded">
            <ShieldCheck className="w-3 h-3" /> SSL SECURE
          </div>
          <span className="flex items-center gap-1 text-green-500">
            <div className="w-1.5 h-1.5 bg-green-500 animate-pulse rounded-full"></div>{" "}
            SYSTEM NOMINAL
          </span>
          <span>Node: SF-01</span>
        </div>
      </div>
    </footer>
  );
};
