---
title: DNS Records
description: Explanation of the supported types of DNS records.
---

This is a high-level overview of the different types of supported DNS records.

Additionally, DNSimple has excellent documentation on DNS records & more: https://support.dnsimple.com/categories/dns/

## Basics
- A: The most basic record. Points your domain at an IPv4 address.
- AAAA: The A record’s sibling: it points at an IPv6 address. Adding one is strongly encouraged if your hosting provider supports IPv6. (And if they don’t, ask them to!)
- CNAME: Short for “canonical name”, it tells whatever’s looking up your domain “look at this domain instead”. You’ll frequently see hosting providers tell you to use it.
- ALIAS (Unique to our current nameserver provider): Similar to a CNAME, but it’s never sent to your client. The nameservers resolve it in the backend and return an A and/or AAAA record.
- MX: Short for “mail exchange”, it tells servers sending you email where your email servers are.
- URL (Unique to our current nameserver provider): Sends an HTTP redirect to the URL you specify. Behind the scenes, it publishes A records pointing to a redirector server.
- TXT: Contains human-readable data about your domain. Typically, you’ll see this used when other services want to verify you control a domain, or for implementing email authentication standards such as DMARC and SPF.

## Service-specific
- SRV: Defines the location of a server of a given protocol, like a more general MX record. Usage depends on the protocol in question.
- SSHFP: Contains the SSH key fingerprint for the server on the corresponding domain.

## Advanced/rare
- CAA: Specifies who can issue TLS (i.e. HTTPS) certificates for the domain.
- PTR: Pointer to a common name. Unlike a CNAME record, resolvers don’t continue to search when they see a PTR record.
- NS: Delegates a domain to a different nameserver.
- SPF: Deprecated form of storing data for the SPF email security standard.
- HINFO: Structured form of showing data about the server behind a site.
- NAPTR: Maps from a resource name to a unique identifier. Often used as part of the SIP telephony protocol.
