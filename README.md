# BloodConnect — React frontend demo

Premium responsive UI prototype for BloodConnect, built with React, TypeScript, Vite, React Router, Framer Motion-ready dependencies and Lucide icons.

## Run locally
1. Install Node.js 20+.
2. Extract this folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed by Vite.

## Included pages
- Landing page
- Donor discovery with filters and sample profiles
- Emergency blood request form with validation and generated demo reference
- User dashboard and local availability toggle
- Blood bank directory (illustrative entries)
- Login and sign-up demo forms
- Notifications
- About

## Important demo limitations
This is a frontend prototype. Donor profiles, platform statistics and blood bank directory entries are illustrative mock data. Request creation is held in an in-memory mock service and is not sent to real donors, hospitals or blood banks. Authentication forms do not authenticate users. No live map, SMS, OTP, inventory, or notification provider is connected.

Before production, integrate the provided `src/services/mockApi.ts` boundary with the Java Spring Boot REST API, add real authentication/session handling, map provider integration, consent workflows, institutional verification and privacy/security review. Blood-group compatibility, donation eligibility and transfusion decisions must be confirmed by qualified medical professionals.
