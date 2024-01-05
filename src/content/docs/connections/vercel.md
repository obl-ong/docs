---
title: Vercel
description: Connecting your domain to Vercel
---

This guide will demonstrate how to connect your domain to Vercel hosting. 

We assume you already have configured a site on Vercel, and that your Obl.ong domain request has been granted.

## Vercel configuration

1. Navigate to the `Domains` section of your project's settings panel. Your screen should look like this:

![Vercel domains settings](/src/assets/vercel-domains.png)

2. Enter your Obl.ong domain into the input field

3. Once entered, you should see your domain pop up, and the records that you must add to your Obl.ong domain

![Vercel domains settings with Obl.ong domain showing that a CNAME pointing to cname.vercel-dns.com](/src/assets/vercel-domains-oblong.png)

## Domain configuration

1. Click on your domain from the Obl.ong admin homepage

2. From the DNS panel, remove all existing `A`, `CNAME`, `ALIAS`, `URL` or any other web record at the root (@) of your domain. This includes the default `URL` record to `parking.obl.ong`.

3. Add the records from the Vercel settings, being sure to place all records at the root of your domain (i.e. removing your subdomain from the name of the record). Using the records from above, your screen should look like so:

![Obl.ong domain DNS panel showing a CNAME record on the root pointing to cname.vercel-dns.com](/src/assets/oblong-records.png)

:::caution
Vercel thinks that you own the root domain `obl.ong` and not a subdomain. You must put all records starting at the *root* of your domain (@) and not a subdomain of it.

For example, put the `CNAME` record at `@` (the root) and not `nextjs-demo[.@]`. Or put any subdomain at `subdomain[.@]` and not `subdomain.nextjs-demo[.@]`.
:::

4. You're done! - your site should now be viewable from your Obl.ong domain. 

To check that you completed the connection properly, go to your Vercel domain settings and check that your domain has a "Valid Configuration" (you may need to hit Refresh)

![Vercel domain dashboard showing "Valid configuration" for nextjs-demo.obl.ong](/src/assets/vercel-domains-completed.png)





