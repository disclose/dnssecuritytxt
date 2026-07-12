# DNS Security TXT — IETF submission notes

## Prepared artifact

The proposed initial individual Internet-Draft is:

`draft-ellis-dns-security-contact-00.xml`

Title: **Discovering Security Contact and Policy Information Using the Domain Name System (DNS)**

Intended status: **Standards Track**

Likely initial venue: **DNSOP**, with an early cross-review request to **SAAG** and the authors/implementers of RFC 9116.

The RFCXML was rendered successfully with `xml2rfc` 3.34.0 into both plain-text and HTML forms with no formatter warnings. Internal cross-references were also checked for unresolved targets.

## Decisions made for the -00 draft

| Topic | Draft decision | Reason |
| --- | --- | --- |
| Normative owner name | `_security.<Reference Domain>` | Explicit protocol scoping and compatibility with RFC 8552. |
| Apex fallback | Removed from the normative protocol | Apex TXT RRsets are crowded and ambiguous. A migration appendix preserves the history. |
| TXT format | One field per TXT resource record: `security_contact=URI`, `security_policy=URI`, or `security_expires=date-time` | Retains compatibility with the published 2021 contact and policy forms while adding explicit freshness. |
| Expiration | Exactly one required `security_expires` UTC timestamp applies to the entire RRset | Aligns with RFC 9116: stale information is not used, the timestamp follows RFC 3339, and publishers should keep it less than one year ahead. |
| Version tag | None in -00 | The registered underscore label and field names already identify the protocol. This is worth testing with DNSOP reviewers. |
| Parent walking | Prohibited without a separately known administrative boundary | The DNS does not identify organizational boundaries, and walking can reach unrelated parents or public suffixes. |
| security.txt precedence | No universal winner | The mechanisms have different scopes and authentication properties. Conflicts are surfaced rather than resolved by a brittle precedence rule. |
| Authorization | Explicitly not conveyed by the TXT record itself | A linked policy may provide authorization or safe-harbor terms; a contact pointer does not. |
| DNSSEC | Recommended; Bogus data must not be used | Unsigned data remains useful for discovery, while validation failure cannot safely degrade to unsigned. |
| IANA action | Register TXT + `_security` | Required by RFC 8552 for globally scoped underscored names. |

## Metadata still to confirm before upload

- Confirm that John Carroll wants to remain a named co-author rather than be acknowledged as an originator/contributor.
- Add each author's preferred public email address and current affiliation. The XML intentionally does not guess them.
- Confirm the draft filename. `draft-ellis-dns-security-contact-00` is descriptive and follows the usual individual-draft convention.
- Decide whether the initial intended status should remain Standards Track or begin as Experimental. Standards Track is currently selected.

## Technical questions to take to DNSOP early

1. Should the wire format keep the deployed `security_contact=` / `security_policy=` records plus `security_expires=`, or adopt a versioned single-record grammar such as `v=SECURITY1; contact=...; expires=...`?
2. Should an initial specification define any parent-domain discovery at all, or only discovery for an application-supplied Reference Domain?
3. Is a TXT RRset the preferred representation, or would separate URI RRsets under subordinate names provide better typing at the cost of compatibility?
4. Should consumers be required to support contact URI schemes beyond `https` and `mailto`?
5. Is a 2048-octet minimum parser limit appropriate, and should the draft place a tighter total RRset recommendation around common DNS response sizes?
6. What implementation evidence is available: published records, resolvers, scanners, browser extensions, security platforms, or disclose.io tooling?
7. Should the one-year freshness limit remain a `SHOULD`, matching RFC 9116, or be made a stricter `MUST` for DNS publication?

## Submission sequence

1. Resolve the author metadata above.
2. Render the RFCXML with the current `xml2rfc` tool and fix all errors and warnings.
3. Run `idnits`, `rfclint`, and the IETF Author Tools validator.
4. Send the -00 concept and key design questions to the DNSOP list before or immediately after submission.
5. Upload the XML through the IETF Internet-Draft submission tool and complete both author approvals.
6. Request agenda time only after collecting list feedback and at least one independent implementation or deployment report.

## Suggested DNSOP list introduction

Subject: `New individual draft: DNS discovery of security contacts and policies`

> We have prepared an individual draft that specifies how a domain operator can publish vulnerability-reporting contacts and policy links in TXT records at `_security.<domain>`. It develops the DNS Security TXT proposal first published by the disclose.io Project in 2021 and complements RFC 9116 for domain-wide and non-HTTP discovery.
>
> The -00 draft intentionally makes `_security` the sole normative owner name, requires an RFC 3339 `security_expires` field aligned with RFC 9116 freshness semantics, removes the earlier apex fallback, does not infer authorization to test, and requests the corresponding RFC 8552 registry entry. We would especially value DNSOP feedback on the TXT grammar, expiration handling, Reference Domain selection, whether any constrained parent lookup belongs in the protocol, and the treatment of pre-standard deployments.

## Source basis

- DNS Security TXT proposal: https://dnssecuritytxt.org/
- RFC 9116 (`security.txt`): https://www.rfc-editor.org/rfc/rfc9116.html
- RFC 8552 (underscored DNS node names): https://www.rfc-editor.org/rfc/rfc8552.html
- IETF Internet-Draft submission guidance: https://authors.ietf.org/submitting-your-internet-draft
- IETF document validation guidance: https://authors.ietf.org/document-validation
