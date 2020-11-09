import * as React from "react"
import * as Constants from "~/common/constants"
import "bootstrap/dist/css/bootstrap.min.css"
import History from "../components/History"
import SidebarContainer from "../components/SidebarContainer"
import Cindy from "../components/Cindy"

import Head from "next/head";
import myDocument from "./_document.js"

import { css } from "@emotion/react";

const STYLES_LAYOUT_LEFT = css`
  height: calc(100vh - ${Constants.sizes.navigation}px);
  width: ${Constants.sizes.sidebar}px;
  ${'' /* background: red; */}
  font-size: 2rem;
  overflow-y: scroll;

  scrollbar-width: none;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const STYLES_LAYOUT_RIGHT = css`
  ${'' /* display: inline-block; */}
  height: calc(100vh - ${Constants.sizes.navigation}px);
  min-width: 20%;
  width: 100%;
  ${'' /* background: blue; */}
  font-size: 2rem;
  overflow-y: scroll;

  scrollbar-width: none;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const STYLES_NAVIGATION = css`
  height: ${Constants.sizes.navigation}px;
  ${'' /* background: green; */}
  font-size: 1rem;
`;

const STYLES_LAYOUT = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export default class IndexPage extends React.Component {
  
  render() {
    // console.log('document', document)
    const title = "cindywu.org";
    const description =
      "a website about me";
    const url = "https://cindywu.org";

    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
          <meta name="title" content={title} />
          <meta name="description" content={description} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content="/static/social.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={url} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
          <meta property="twitter:image" content="/static/social.png" />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/static/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />

          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <nav className='p-4' css={STYLES_NAVIGATION}></nav>
        <div className='p-3' css={STYLES_LAYOUT}>
          {/* <span css={STYLES_LAYOUT_LEFT}>
            <SidebarContainer />
          </span> */}
          <div id="right" css={STYLES_LAYOUT_RIGHT}>
            <div className="col-md-3">
              <History/>
            </div>
            <div className="col-md-9">
              <div className="pb-3">hi, i am a cindy.</div>
              <Cindy/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
