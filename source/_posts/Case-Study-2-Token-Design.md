---
title: '[Case Study] Token Design'
date: 2017-12-30 10:48:34
thumbnail: https://s3-us-west-2.amazonaws.com/fireteam-alpha/https-decentral-solutions-cdn/howto.png
tags:
- Case Studies
- Projects
- Proof of Concept
category: "Projects"
author: Ling Qing Meng
---


### Overview
A US based security startup, commissioned Decentral Solutions to design an end-to-end digital identity solution that would enable customers to validate and share identity information. Traditionally this would involve sending ID documents over insecure channels (e.g. email) and expensive KYC and compliance processes. The client had a very tight timeframe for development.
  
### Solution
Within a few months Decentral Solutions developed an end-to-end solution supporting KYC providers, issuers, 3rd party application developers, and end-users. Our team started by designing a backend for issuers allowing them to validate individual information and generate digital certificates. The backend relied on an HSM (Hardware Security Module) for digital signing of certificates. 
<!-- more -->
  

Our team then integrated the solution with different KYC providers enabling document recognition, and basic validation. The final solution supported a variety of IDs from over 190 countries. Finally Decentral Solutions built end user portals that focused on digital identity wallet for iOS and Android devices. The wallets leveraged mobile phone secure element processors to sign all transactions in hardware ensuring high levels of security. 
  

The Client's Application also had additional restrictions for age and region. They reserved the right to withhold funds on accounts that violated the policy agreeement. This aspect of the token was designed and tested fully prior to the ICO, to meet those requirements without interfering with the Token's core functionality.
  

From ongoing developments on the business and engineering front, a new engagement was initiated as we adapted to the shifting requirements. We made a key realization that a 3 party escrow contract was integral in the MVP product. The MVP was a DApp, a user interface that serves as a platform for predictions and market making. The Escrow facilitates deals between disjoint parties while still maintaining a key criteria for permsionless access. 