import React from 'react';

const TermsOfServiceContent = ({ darkMode = true }) => {
  return (
    <div className={`prose max-w-none ${darkMode ? 'prose-invert' : ''}`}>
      <div className="space-y-6">

        <section>
          <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
            Acceptance of Terms
          </h3>
          <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            By downloading, installing, or using the Manusmriti AI Companion ("App"), 
            you agree to be bound by these Terms and Conditions. 
            If you do not agree with these Terms, you may not use the App.
          </p>
        </section>

        <section>
          <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
            Privacy and On-Device Philosophy
          </h3>
          <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            <li>All AI processing, including speech recognition, object detection, and context awareness, occurs entirely on your device.</li>
            <li>No cloud storage is used. Conversations, images, or video data remain on your device under your control.</li>
            <li>Team Manusmriti cannot access, view, or store your personal data. You fully own and control your information.</li>
          </ul>
        </section>

        <section>
          <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
            License to Use
          </h3>
          <p className={`leading-relaxed mb-3 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            We grant you a revocable, non-exclusive, non-transferable license to use the App for personal, 
            non-commercial purposes in compliance with these Terms and applicable open-source licenses.
          </p>
        </section>

        <section>
          <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
            User Responsibilities
          </h3>
          <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            <li>Use the App only for lawful purposes.</li>
            <li>You are responsible for securing your device and the data processed by the App.</li>
            <li>Do not use the App for harmful, malicious, or unlawful activities.</li>
            <li>Do not attempt to reverse engineer or tamper with the App, unless permitted by applicable law or open-source licenses.</li>
          </ul>
        </section>

        <section>
          <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
            Intellectual Property and Open Source
          </h3>
          <p className={`leading-relaxed mb-3 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            The App’s original code, interface, and branding are the intellectual property of Team Manusmriti. 
            You retain full ownership of your personal data. The App uses open-source components 
            (e.g., YoloV8s-oiv7, Vosk API, Flutter, TensorFlow Lite), which are licensed under their 
            respective terms (e.g., GPL-3.0, Apache 2.0).
          </p>
        </section>

        <section>
          <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
            Disclaimer of Warranties
          </h3>
          <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            The App is provided "AS IS" and "AS AVAILABLE." Team Manusmriti does not guarantee 
            that the App will be error-free, uninterrupted, or completely secure. 
            AI outputs may sometimes be inaccurate or unexpected.
          </p>
        </section>

        <section>
          <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
            Limitation of Liability
          </h3>
          <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            To the fullest extent permitted by law, Team Manusmriti shall not be liable for 
            any indirect, incidental, special, consequential, or punitive damages 
            arising from your use of or inability to use the App.
          </p>
        </section>

        <section>
          <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
            Termination
          </h3>
          <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            We may suspend or terminate your access to the App immediately if you breach these Terms. 
            You may terminate your use at any time by uninstalling the App.
          </p>
        </section>

        <section>
          <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
            Governing Law
          </h3>
          <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            These Terms are governed by and construed under the laws of India. 
            Any disputes will be resolved exclusively in the courts of India.
          </p>
        </section>

        <section>
          <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
            Changes to Terms
          </h3>
          <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            We may update or revise these Terms at our discretion. 
            Changes will be posted within the App or on the official project page. 
            Continued use after changes constitutes acceptance.
          </p>
        </section>

        <section>
          <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
            Contact Information
          </h3>
          <div className={`mt-3 p-4 rounded-lg ${darkMode ? 'bg-white/5' : 'bg-gray-100'}`}>
            <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              For questions, please reach out through our GitHub repository or the official email address provided there.
            </p>
          </div>
        </section>

        <div className={`text-sm text-center pt-6 border-t ${
          darkMode ? 'border-white/10 text-slate-400' : 'border-gray-200 text-slate-500'
        }`}>
          Effective Date: September 13, 2025
        </div>
      </div>
    </div>
  );
};

export default TermsOfServiceContent;
