export default function LegalPage() {
  return (
    <>
      <div className={"flex flex-col gap-3 md:gap-6 py-14 md:py-28 px-8 md:px-16 empty-image text-white text-center md:text-start"}>
        <p className={"text-3xl md:text-6xl font-bold"}>Legal Information</p>
        <p className={"text-base"}>This page outlines our legal policies, including terms of use, privacy, risk, and cookies.</p>
      </div>
      <div className="py-14 md:py-28 px-8 md:px-16">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-6">NightTrader Exchange ("we", "our", or "us") is committed to protecting your privacy and
          ensuring the security of your personal information. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you use our decentralized multi-signature cryptocurrency
          exchange platform.</p>

        <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
        <h3 className="text-xl font-medium mb-2">Personal Information</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Email address or bitmessage address</li>
          <li>Cryptocurrency wallet addresses</li>
          <li>Transaction data</li>
        </ul>

        <h3 className="text-xl font-medium mb-2">Automatically Collected Information</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>IP address</li>
          <li>Browser type</li>
          <li>Operating system</li>
          <li>Access times and dates</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>To provide and maintain our decentralized exchange services</li>
          <li>To process transactions and send notices about your transactions</li>
          <li>To resolve disputes and troubleshoot problems</li>
          <li>To prevent potentially prohibited or illegal activities</li>
          <li>To enforce our Terms of Service</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
        <p className="mb-6">We implement a variety of security measures to maintain the safety of your personal
          information:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Use of multi-signature technology for enhanced transaction security</li>
          <li>Non-custodial system ensuring you maintain control of your assets</li>
          <li>Encryption of sensitive data</li>
        </ul>
        <p>However, please note that no method of transmission over the internet or electronic storage is 100%
          secure.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Sharing of Information</h2>
        <p className="mb-6">As a decentralized platform, we do not share your personal information with third parties
          except:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>As required by law or regulation</li>
          <li>To protect against fraud or other illegal activities</li>
          <li>With your explicit consent</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Access the personal information we hold about you</li>
          <li>Correct any inaccuracies in your personal information</li>
          <li>Delete your personal information from our systems</li>
          <li>Object to the processing of your personal information</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Changes to This Privacy Policy</h2>
        <p className="mb-6">We may update this Privacy Policy from time to time. We will notify you of any changes by
          posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>

        <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
        <p className="mb-6">If you have any questions about this Privacy Policy, please contact us at:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Email: [contact email]</li>
          <li>Address: [physical address if applicable]</li>
        </ul>
        <p className="text-sm text-gray-600">By using NightTrader Exchange, you agree to the collection and use of
          information in accordance with this Privacy Policy.</p>
      </div>
      <div className="py-14 md:py-28 px-8 md:px-16">
        <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>

        <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
        <p className="mb-6">By accessing or using NightTrader Exchange ("the Platform"), you agree to be bound by these
          Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use the Platform.</p>

        <h2 className="text-2xl font-semibold mb-3">2. Eligibility</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>You must be at least 18 years old to use the Platform.</li>
          <li>You must comply with all applicable laws and regulations in your jurisdiction.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">3. Account Registration</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>To use certain features of the Platform, you must create an account.</li>
          <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
          <li>You agree to provide accurate and up-to-date information during the registration process.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">4. Platform Services</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>NightTrader Exchange provides a decentralized multi-signature cryptocurrency exchange platform.</li>
          <li>The Platform facilitates peer-to-peer transactions using blockchain technology.</li>
          <li>We do not hold custody of your funds; you maintain control of your assets at all times.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">5. User Responsibilities</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>You are solely responsible for your trading activities on the Platform.</li>
          <li>You agree not to engage in any illegal or fraudulent activities on the Platform.</li>
          <li>You are responsible for maintaining the security of your private keys and wallet.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">6. Double Deposit Escrow</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>By using the double deposit escrow feature, you agree to abide by its terms and conditions.</li>
          <li>You understand that both parties must deposit collateral for the escrow to function.</li>
          <li>Disputes in escrow transactions will be handled only between the two parties in the contract. No third
            parties.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">7. Fees</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Fees are 0.125% for Makers and 0.125% for Takers.</li>
          <li>The exchange takes a Deposit Fee of 0.1% and a Withdrawal Fee of 0.5%.</li>
          <li>Deposit and Withdrawal fees to and from external wallets vary based on Blockchain traffic and are outside
            of our control.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">8. Risks</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>You acknowledge that cryptocurrency trading involves significant risks.</li>
          <li>NightTrader Exchange is not responsible for any losses incurred through trading activities.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">9. Intellectual Property</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>All content and technology on the Platform are the property of NightTrader Exchange.</li>
          <li>You may not reproduce, distribute, or create derivative works without our permission.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">10. Privacy</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Your use of the Platform is subject to our Privacy Policy.</li>
          <li>We collect and use your information as described in the Privacy Policy.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">11. Termination</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>We reserve the right to suspend your account from trading for violations of these Terms.</li>
          <li>You may retire your account at any time by withdrawing your funds.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">12. Disclaimers and Limitations of Liability</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>The Platform is provided "as is" without any warranties.</li>
          <li>NightTrader Exchange is not liable for any indirect, incidental, or consequential damages.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">13. Governing Law and Jurisdiction</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>These Terms are governed by the laws of reason and moral.</li>
          <li>Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts in
            Switzerland.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">14. Changes to Terms</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>We may update these Terms from time to time.</li>
          <li>Continued use of the Platform after changes constitutes acceptance of the new Terms.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">15. Contact Information</h2>
        <p className="mb-6">For any questions regarding these Terms, please contact us at <a
          href="mailto:admin@nighttrader.org" className="text-blue-600">admin@nighttrader.org</a>.</p>

        <p className="text-sm text-gray-600">By using NightTrader Exchange, you acknowledge that you have read,
          understood, and agree to be bound by these Terms and Conditions.</p>
      </div>
      <div className="py-14 md:py-28 px-8 md:px-16">
        <h1 className="text-3xl font-bold mb-4">What Are Cookies</h1>
        <p className="mb-6">Cookies are small text files that are placed on your device when you visit our website. They
          allow us to recognize your device and store certain information about your preferences or past actions on our
          site.</p>

        <h2 className="text-2xl font-semibold mb-3">How We Use Cookies</h2>
        <p className="mb-6">NightTrader Exchange uses cookies to enhance your experience on our platform and to provide
          essential functionality for our decentralized multi-signature exchange. We use the following types of
          cookies:</p>

        <h2 className="text-xl font-semibold mb-3">Essential Cookies</h2>
        <p className="mb-6">These cookies are necessary for the operation of our website and cannot be switched off.
          They are usually set in response to actions you take, such as setting your privacy preferences, logging in, or
          filling in forms.</p>

        <h2 className="text-xl font-semibold mb-3">Functional Cookies</h2>
        <p className="mb-6">These cookies enable enhanced functionality and personalization. They may be set by us or by
          third-party providers whose services we have added to our pages.</p>

        <h2 className="text-xl font-semibold mb-3">Performance and Analytics Cookies</h2>
        <p className="mb-6">These cookies allow us to count visits and traffic sources so we can measure and improve the
          performance of our site. They help us know which pages are the most and least popular and see how visitors
          move around the site.</p>

        <h2 className="text-xl font-semibold mb-3">Marketing Cookies</h2>
        <p className="mb-6">These cookies may be set through our site by our advertising partners. They may be used to
          build a profile of your interests and show you relevant ads on other sites.</p>

        <h2 className="text-xl font-semibold mb-3">Third-Party Cookies</h2>
        <p className="mb-6">Some cookies may be set by third parties when you visit our site. These third parties may
          collect information about your online activities over time and across different websites. We do not control
          these third-party cookies and recommend reviewing the privacy policies of these companies for more
          information.</p>

        <h2 className="text-2xl font-semibold mb-3">Your Cookie Choices</h2>
        <p className="mb-6">You can control and/or delete cookies as you wish. You can delete all cookies that are
          already on your device and you can set most browsers to prevent them from being placed. However, if you do
          this, you may have to manually adjust some preferences every time you visit nighttrader.exchange, and some
          services and functionalities may not work. To modify your cookie settings, please visit the "Cookie Settings"
          option in our site footer.</p>

        <h2 className="text-2xl font-semibold mb-3">Changes to This Cookie Policy</h2>
        <p className="mb-6">We may update this Cookie Policy from time to time to reflect changes in our practices or
          for operational, legal, or regulatory reasons. We encourage you to review this policy periodically.</p>

        <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
        <p className="mb-6">If you have any questions about our use of cookies, please contact us at [contact
          email].</p>

        <p className="text-sm text-gray-600">By using nighttrader.exchange, you consent to our use of cookies as
          described in this policy.</p>
      </div>
    </>
  );
}