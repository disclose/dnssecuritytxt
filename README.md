<div align="center">

<a href="https://disclose.io"><img src="docs/marquee.png" alt="dnssecuritytxt — publish your security contact in DNS · disclose.io" width="820"></a>

# dnssecuritytxt

### A standard for nominating security contact points & policies via DNS TXT records — discoverable before a researcher even loads your site.

<p>
<a href="LICENSE"><img src="https://img.shields.io/github/license/disclose/dnssecuritytxt?color=5B3AB6&label=license" alt="MIT license"></a>
<img src="https://img.shields.io/badge/status-draft%20standard-5B3AB6" alt="Draft standard">
<a href="https://twitter.com/dnssecuritytxt"><img src="https://img.shields.io/badge/%40dnssecuritytxt-follow-5B3AB6" alt="@dnssecuritytxt on Twitter"></a>
<a href="https://github.com/disclose/dnssecuritytxt/issues"><img src="https://img.shields.io/badge/feedback-welcome-5B3AB6" alt="Feedback welcome"></a>
</p>

*Part of **[the disclose.io Project](https://disclose.io)** — the open, vendor-neutral infrastructure for vulnerability disclosure. [Browse the ecosystem →](https://github.com/disclose)*

</div>

---

**A standard allowing organizations to nominate security contact points and policies via DNS TXT records.**  

> This proposal was first made public on March 25, 2021 and is currently a draft. We welcome comments and feedback! To make suggestions please submit a PR via Github or [submit a ticket](https://github.com/disclose/dnssecuritytxt/issues). Thanks for your interest!  

## IETF Internet-Draft

The proposed Standards Track Internet-Draft is maintained in [`ietf/`](ietf/):

- [RFCXML source](ietf/draft-ellis-dns-security-contact-00.xml)
- [Rendered text](ietf/draft-ellis-dns-security-contact-00.txt)
- [Rendered HTML](ietf/draft-ellis-dns-security-contact-00.html)
- [Submission and review notes](ietf/SUBMISSION-NOTES.md)

The draft makes `_security.<domain>` the normative owner name, requires an RFC 3339 `security_expires` timestamp, and requests registration of the `_security` TXT node name under RFC 8552.

Find us on Twitter: [https://twitter.com/dnssecuritytxt](https://twitter.com/dnssecuritytxt).  

Created with <3 by [John Carroll](https://twitter.com/yosignals) and [Casey Ellis](https://twitter.com/caseyjohnellis) for [The disclose.io Project](https://disclose.io).
