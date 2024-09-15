Slide 1: Digital Channel Overview & Key Highlights
Digital Channel Overview
Our Digital Channel is designed to support a broad array of applications, ensuring robust functionality and seamless user experiences. Here’s a snapshot of what we manage:

Application Support: We handle over 18 diverse applications.
Core Functions:
Quality Assurance (QA): Ensuring the highest standards of performance and reliability.
Change Request (CR) Management: Efficiently managing and implementing changes.
Enhancements: Continuously improving functionality based on user feedback and evolving needs.
Support: Providing ongoing assistance to address issues and optimize performance.
Major Highlights
MATA (Multi Asset Trade Analytics):

Purpose: MATA is a global analytics platform created by RBC to assist traders and clients in navigating complex financial markets. It provides insights that support better trading decisions.
Features: Offers analytics for various financial instruments, including Equities, Futures, FX (Foreign Exchange), and Indexes.
Currency Support: Handles major currencies such as CAD, EUR, USD, and GBP.
WSS (Web Security Services):

Role: Ensures that applications and API gateways are accessible from outside the RBC network, while providing secure external authentication.
F5 Load Balancer:

Function: Balances the load of web applications across multiple data centers and handles SSL termination to secure data transmission.
MATA Web Server:

Purpose: Delivers Single Page Applications (SPA) and assets, supports server-side rendering and prerendering to enhance performance and user experience, and routes API requests effectively.
Apigee Edge:

Service: Manages API services with comprehensive features, including load balancing, orchestration, authentication, and analytics.
Microservices:

PDF Reports Service: Responsible for generating and managing user reports in PDF and Excel formats.
User Preference Service: Manages and retrieves user preferences.
QTK: Provides in-depth trade analytics.
Platform AI: Delivers AI-driven recommendations and personalization.
CM Entitlements: Handles user access and entitlements.
Azure AD: Manages internal user authentication and access.
Slide 2: QA, Automation, and Future Roadmap
Quality Assurance and Automation
Automated Deployment:

Pipeline: Our deployment process is automated from code commit to production, utilizing Helios and Compute Fabric across DEV, QA, and PROD environments.
Testing and Quality Assurance:

Robot Framework with Compute Fabric: We use a Dockerized test suite integrated with Compute Fabric, removing dependencies on virtual machines and browsers for consistent and reliable test execution.
Lighthouse for MATA: Implements accessibility and performance assessments, offering insights similar to those used by major tech companies to ensure the application meets high standards of usability and speed.
JMeter with Compute Fabric: Conducts performance testing for MATA, integrated uniquely with Compute Fabric, setting us apart from other projects that rely on OpenShift or virtual machine environments.
Future Roadmap
MATA Phase 3: We are actively working on Phase 3 enhancements, which will further expand the platform's capabilities and features.
Data Quality Checks: Ongoing efforts to ensure data integrity and accuracy using Python for comprehensive quality assessments.
