# dnssecuritytxt 
A standard allowing organizations to nominate security contact points and policies via DNS TXT records.  

> This proposal was first made public on March 25, 2021 and is is currently a draft. We welcome comments and feedback! To make suggestions please submit a PR via Github or [submit a ticket](https://github.com/disclose/dnssecuritytxt/issues). Thanks for your interest!  

Find us on Twitter: [https://twitter.com/dnssecuritytxt](https://twitter.com/dnssecuritytxt).  

## Summary  

When people find security issues in Internet-facing systems, the correct channel to report security issues isn't always clear. The relevant vulnerability reporting and disclosure policy for the system isn't always apparent. The DNS Security TXT standard extends the work done by security.txt to simplify answering this question by taking advantage of DNS, arguably the most ubiquitous system on the Internet.

When deployed, it provides security researchers, Internauts, and concerned Internet citizens with clear and authoritative direction towards the correct channels for reporting security issues and the governing policies set out by an organization for all systems under a domain.  

![DNS Text Screencap for disclose.io](https://github.com/disclose/dnssecuritytxt/raw/main/docs/dnssecuritytxt.png)

## Why?  

### Authoritative  

It is common practice to use DNS TXT to establish authorization from a domain. A typical example is when a company shows domain ownership to a third-party SaaS platform by placing a TXT record in their DNS zone.

DNS records speak on behalf of the organization and not just an individual server or application owner. Pairing security reporting and policy information with the authoritative nature of DNS creates confidence in the information provided. 

This attribute of DNS TXT records makes them a suitable place to confirm, on behalf of the organization, good-faith towards security reports or authorization for testing - This permission to authorize is a core enabler for safe harbor for security researchers.

### Centralized  

Management of DNS records is centralized, making these records simple to deploy, update, maintain, and remove if required. It also eliminates reliance on individual owners to deploy and maintain separate files.

### Visible  

DNS is core to the Internet's operation, and interrogating DNS is a fundamental footprinting activity in penetration tests, automated scans, and fee-form security research, meaning the correct contact details and policy information are less likely to be missed 


## Fields  

- **security_contact (Required)**
  - A link to a web form or e-mail address for people to contact you about security issues. 
  - Please include ''https://'' for URLs and ''mailto:'' for e-mails.
  - If both a web form and an e-mail are required, you can create two separate records.
  - Examples:
    - https://domain.com/report-security-issue
    - https://bugcrowd.com/domain/report
    - mailto:security@domain.com
- **security_policy (Optional)**
  - A link to a policy detailing what finders should expect when reporting via the contact channels, and what security researchers should do when searching for security issues. Remember to include ''https://''. 
  - Examples:
    - https://domain.com/security
    - https://bugcrowd.com/domain
- _Note:_ The maximum number of characters in a TXT record is 255 characters per https://www.freesoft.org/CIE/RFC/1035/9.htm.

## Frequently Asked Questions
**Is this a replacement for [security.txt](https://securitytxt.org)?**  
- It can be, but it doesn't need to be - security.txt can work well for individual hosts or hosts which are only addressable via an IP address, with DNS Security TXT providing directions from the parent domain.
- If there is a discrepancy between a parent DNS Security TXT records and a security.txt file, and DNS Security TXT record should prevail.
Since DNS is typically more permanent than individual web hosts and the text files they hold, a DNS Security TXT record is more authoritative.

**Is this giving anyone permission to hack my organization?**  
- No, this provides a place for people to send security reports if they find something. 
- We recommend creating and pointing to a security_policy in combination with the security_contact to lay out expectations and rules of engagement for security researchers who wish to conduct proactive research. 
- [The disclose.io dioterms repository](https://github.com/disclose/dioterms) provides simple boilerplates with a variety of options to get you started.

**Can I deploy this on a subdomain?**  
- Yes! While we strongly recommend assigning the TXT record to the root domain of an organization, we've created the standard in a way that supports subdomains and even hosts if required. 
- This is useful if contact or policy details are different across different departments, or if a specific department has a vulnearbility disclosure policy but the parent organization does not.  

**Who in my organization do I need to engage with to get these records in place?**
- This will depend on the size of your organization and who is responsible for maintaining DNS. 
- Typically, the engineering or IT team is a good place to start, and the information security team will understand the reason for adding these records.

**Will adding an email address expose me to spam bots?**  
- Email is optional as a field. 
- If you are worried about unsolicited email, set a URI as the value and link to your security policy and web form for issue reporting.

**Where do I put these entries?**  
- In your DNS… :) 
- Searching "how to add TXT records to DNS" in combination with your DNS provider or system will help you.

---

Copyright disclose.io 2021.  
Created with <3 by [John Carroll](https://twitter.com/yosignals) and [Casey Ellis](https://twitter.com/caseyjohnellis) for [The disclose.io Project](https://disclose.io).   
