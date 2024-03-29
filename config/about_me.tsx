/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React from "react";

import Anchor from "components/Anchor";
import { companyUrls } from "./base";

const aboutMe = (
  <>
    Hello. My name is Vighnesh and I enjoy creating things that live mostly on
    the web. My interest in software development started a few years back when I
    first learnt about Javascript. Since then, I have been building teeny-tiny
    projects for the web and cli for fun.
    <br />
    <br />
    Fast-forward to today, and I have had the privilege to work for{" "}
    <Anchor href={companyUrls.Google} openInNewTab className="inline-link">
      Google
    </Anchor>
    ,{" "}
    <Anchor href={companyUrls.Amazon} openInNewTab className="inline-link">
      Amazon
    </Anchor>
    ,{" "}
    <Anchor
      href={companyUrls.SmarterCodes}
      openInNewTab
      className="inline-link"
    >
      an AI startup
    </Anchor>{" "}
    and{" "}
    <Anchor href={companyUrls.Tavisca} openInNewTab className="inline-link">
      a loyalty rewards company
    </Anchor>
    .
    <br />
    <br />
    My Main focus these days is building next-gen developer tools for GoogleTV at{" "}
    <Anchor href={companyUrls.Google} openInNewTab className="inline-link">
      Google
    </Anchor>.
  </>
);

export default aboutMe;
