import React from 'react';

const CyberSecurityIq = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100 text-gray-800 p-6">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Cybersecurity Interview Preperation</h1>
          <p className="text-gray-600">A complete list of beginner to advanced cybersecurity & ethical hacking questions</p>
        </div>

        {/* Basic Level */}
        <section className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">🔰 Basic-Level Questions</h2>

          <QuestionBlock title="✅ General Understanding" questions={[
            "What is penetration testing?",
            "What are the different types of penetration testing?",
            "What is the difference between vulnerability assessment and penetration testing?",
            "What is the penetration testing lifecycle/stages?",
            "What is the scope and rules of engagement in a pen test?",
            "What are common tools used in penetration testing?"
          ]} />

          <QuestionBlock title="✅ OSI Model & Networking" questions={[
            "Explain the OSI model.",
            "What are common ports and their associated services? (e.g., 80, 443, 22, 21)",
            "What is the difference between TCP and UDP?",
            "What is ARP poisoning?",
            "What is DNS spoofing?"
          ]} />
        </section>

        {/* Intermediate Level */}
        <section className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">🔧 Intermediate-Level Questions</h2>

          <QuestionBlock title="✅ Phases & Techniques" questions={[
            "What are the five phases of a penetration test?",
            "What is passive vs active reconnaissance?",
            "What is privilege escalation? Types?",
            "What is lateral movement in penetration testing?",
            "How do you maintain access after initial compromise?",
            "How do you cover your tracks during a penetration test?"
          ]} />

          <QuestionBlock title="✅ Tools & Usage" questions={[
            "What is Metasploit and how is it used?",
            "How do you use Nmap in pen testing? Examples?",
            "What is Burp Suite and how is it used?",
            "How do you use Nikto, Dirb, Gobuster?",
            "What is the purpose of Hydra or Medusa?"
          ]} />

          <QuestionBlock title="✅ Web Application Testing" questions={[
            "How do you perform SQL Injection testing?",
            "What is XSS? How do you test for it?",
            "What is CSRF and how can it be exploited?",
            "What is directory traversal?",
            "How do you test for authentication bypass?",
            "What is SSRF? How do you detect it?"
          ]} />
        </section>

        {/* Advanced Level */}
        <section className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">🧐 Advanced-Level Questions</h2>

          <QuestionBlock title="✅ Exploitation & Scripting" questions={[
            "How do you craft a custom payload?",
            "How do you bypass antivirus or endpoint protection?",
            "How do you perform buffer overflow attacks?",
            "What is shellcode and how do you generate it?",
            "How do you escalate privileges in Linux vs Windows?"
          ]} />

          <QuestionBlock title="✅ Reporting & Ethics" questions={[
            "What should be included in a penetration testing report?",
            "How do you communicate risk to a non-technical audience?",
            "What are the legal considerations during penetration testing?",
            "What is the difference between red teaming and pen testing?",
            "What’s the difference between compliance-based and risk-based pen testing?"
          ]} />
        </section>

        {/* Real World Scenarios */}
        <section className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">⚙️ Real-World Scenario Questions</h2>

          <QuestionBlock title="✅ Scenario-Based" questions={[
            "If you find an open port 21 (FTP), what do you do?",
            "You found a login page—how would you try to bypass it?",
            "You have RCE access—what’s your next step?",
            "How would you pivot from one machine to another inside a network?",
            "How would you test an IoT device for vulnerabilities?",
            "You exploited a web app but can’t get a reverse shell—what do you do?"
          ]} />
        </section>

        {/* Hands-on Section */}
        <section className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">🧪 Hands-On / Practical Tasks</h2>

          <QuestionBlock title="✅ Practical Tasks You Might Face" questions={[
            "Use Nmap to scan a host and identify open services.",
            "Find an XSS vulnerability in a given HTML form.",
            "Exploit a SQL injection to retrieve the admin password.",
            "Escalate privileges on a Linux box with a known kernel vulnerability.",
            "Write a basic Python script to brute-force a login.",
            "Analyze and exploit a sample vulnerability in a CTF-style machine."
          ]} />
        </section>

        {/* OS Internals */}
        <section className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">🔐 Linux/Windows Internals</h2>

          <QuestionBlock title="✅ System Internals Knowledge" questions={[
            "How are SUID binaries exploited in Linux?",
            "What’s the use of the `/etc/shadow` file?",
            "How do you capture credentials in Windows (Mimikatz, LSASS)?",
            "What is SAM, and how do you extract passwords from it?",
            "How do you use PowerShell for enumeration or exploitation?"
          ]} />
        </section>

        {/* Vulnerability Assessment */}
        <section className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">🛡️ Vulnerability Assessment Interview Questions</h2>

          <QuestionBlock title="🔰 Basic-Level Vulnerability Assessment Questions - ✅ General Concepts" questions={[
            "What is vulnerability assessment?",
            "How does vulnerability assessment differ from penetration testing?",
            "What are the goals of a vulnerability assessment?",
            "What are the types of vulnerabilities (e.g., software, hardware, human)?",
            "What is the difference between internal and external vulnerability assessment?",
            "What are the phases of a vulnerability assessment?"
          ]} />

          <QuestionBlock title="🔰 Basic-Level Vulnerability Assessment Questions - ✅ Tools & Usage" questions={[
            "What tools are commonly used for vulnerability assessment? (e.g., Nessus, OpenVAS, Qualys, Nexpose)",
            "How does a vulnerability scanner work?",
            "What is an authenticated vs unauthenticated scan?",
            "What is the role of CVE, CVSS, and NVD in vulnerability assessment?"
          ]} />

          <QuestionBlock title="🛠️ Intermediate-Level Vulnerability Assessment Questions - ✅ Scanning & Analysis" questions={[
            "How do you perform a network vulnerability assessment?",
            "How do you scan web applications for vulnerabilities?",
            "What is a false positive in vulnerability scanning? How do you verify it?",
            "How do you prioritize vulnerabilities after scanning?",
            "What is a zero-day vulnerability? Can it be detected by VA tools?"
          ]} />

          <QuestionBlock title="🛠️ Intermediate-Level Vulnerability Assessment Questions - ✅ Vulnerability Lifecycle & Management" questions={[
            "What is vulnerability management?",
            "How do you track and report vulnerabilities in a large organization?",
            "What is a vulnerability remediation plan?",
            "How do you ensure vulnerabilities are fixed after patching?",
            "What is patch management, and how is it tied to vulnerability assessment?"
          ]} />

          <QuestionBlock title="🧐 Advanced-Level Vulnerability Assessment Questions - ✅ Technical Depth" questions={[
            "How does CVSS (Common Vulnerability Scoring System) work? Explain its components.",
            "What is the difference between risk, threat, and vulnerability?",
            "How do you integrate vulnerability assessment into a DevSecOps pipeline?",
            "How would you automate vulnerability scanning in a CI/CD workflow?",
            "What is container security? How do you assess Docker/Kubernetes vulnerabilities?"
          ]} />

          <QuestionBlock title="🧪 Hands-On / Practical Tasks in Interviews" questions={[
            "Run a basic scan using Nessus and explain the report.",
            "Use Nmap scripts to detect outdated services.",
            "Analyze a sample CVE and describe the vulnerability.",
            "Show how you’d validate a reported SQL Injection.",
            "Walk through the steps to secure a vulnerable web server after assessment."
          ]} />

          <QuestionBlock title="🔐 Bonus: Compliance & Governance Angle" questions={[
            "What role does vulnerability assessment play in ISO 27001 / SOC2 compliance?",
            "How do you document and present vulnerabilities for auditors or executives?",
            "What’s the difference between a security audit and a vulnerability assessment?",
            "How often should vulnerability assessments be conducted?",
            "What are SLAs for vulnerability remediation in critical vs non-critical environments?"
          ]} />
        </section>

        {/* Kali Linux Section */}
        <section className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-black mb-4">🐉 Kali Linux Interview Questions</h2>

          <QuestionBlock title="✅ Basic-Level Kali Linux Questions" questions={[
            "What is Kali Linux and what is it used for?",
            "Who developed Kali Linux and what was its predecessor?",
            "What are some common tools pre-installed in Kali Linux?",
            "What is the default username and password for Kali Linux?",
            "What’s the difference between Kali Linux and other Linux distributions?"
          ]} />

          <QuestionBlock title="✅ Intermediate-Level Kali Linux Questions" questions={[
            "How do you update and upgrade Kali Linux?",
            "What are some package managers used in Kali Linux?",
            "Explain the use of APT and how it works in Kali.",
            "How do you add a custom tool or repository in Kali Linux?",
            "What is the role of `sources.list` in Kali Linux?"
          ]} />

          <QuestionBlock title="✅ Advanced-Level Kali Linux Usage & Configuration" questions={[
            "How do you configure persistence in a Kali Live USB?",
            "How do you secure your Kali installation before using it on real infrastructure?",
            "What are some best practices when using Kali Linux for penetration testing?",
            "Explain how to run Kali Linux on WSL2 (Windows Subsystem for Linux).",
            "How do you create and configure a custom ISO in Kali Linux?"
          ]} />

          <QuestionBlock title="✅ Kali Linux Tools & Practical Scenarios" questions={[
            "How do you use Nmap in Kali Linux for advanced scanning?",
            "What is the purpose of Burp Suite and how do you use it in Kali?",
            "Explain how to perform wireless attacks using Aircrack-ng suite.",
            "How do you use Metasploit in Kali Linux for exploitation?",
            "What are some tools in Kali Linux for privilege escalation?",
            "How do you use Netcat in Kali Linux to set up a reverse shell?"
          ]} />

          <QuestionBlock title="✅ Troubleshooting & Administration" questions={[
            "Kali Linux is not detecting your Wi-Fi adapter—how would you troubleshoot?",
            "How do you fix 'Unable to locate package' errors in Kali?",
            "How do you monitor system resources and running processes in Kali?",
            "How do you set up a non-root user in Kali Linux securely?",
            "What steps would you take if Metasploit fails to start in Kali?"
          ]} />
        </section>

      </div>
    </div>
  );
};

const QuestionBlock = ({ title, questions }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      {questions.map((q, index) => (
        <li key={index}>{q}</li>
      ))}
    </ul>
  </div>
);

export default CyberSecurityIq;