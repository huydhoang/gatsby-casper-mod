import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

import { ReactECharts, ReactEChartsProps } from '../components/React-ECharts';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

// Chart styling & data
const ChartStyle = {
  height: '500px',
};

const option: ReactEChartsProps['option'] = {
  // title: {
  //   text: 'My skills',
  // },
  // legend: {
  //   data: ['Skill Level'],
  // },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: 'Backend Development', max: 100 },
      { name: 'Web Frontend', max: 100 },
      { name: 'Mobile Development', max: 100 },
      { name: 'Written Communication', max: 100 },
      { name: 'Verbal Communication', max: 100 },
      { name: 'Project Management', max: 100 },
    ],
  },
  series: [
    {
      name: 'Skill chart',
      type: 'radar',
      data: [
        {
          value: [80, 50, 40, 90, 30, 60],
          name: 'Skill Level',
        },
      ],
    },
  ],
};

const Profile: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>Profile</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">Profile</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <p>
                  A software engineer with extensive experience in backend development, reasonable
                  frontend capabilities, and just enough management skills.
                </p>

                <div className="skill-chart">
                  <ReactECharts option={option} cssProps={ChartStyle} />
                </div>
              </div>
              <h5>Projects</h5>
              <h3>#Production</h3>
              {/* */}
              <h6>
                <a
                  href="https://community.quantszone.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  community.quantszone.com (Current)
                </a>
              </h6>
              <p>
                A community website for quants deployed using Dokku on a DigitalOcean Droplet (VM)
                with images hosted on AWS S3.
              </p>
              {/* */}
              <h6>
                <a
                  href="https://github.com/huydhoang/huydhoang.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  huydhoang.com (Current)
                </a>
              </h6>
              <p>
                I&apos;ve built this blog using Gatsby (React.js/Node.js) and a Github workflow to
                automatically build and deploy to Github Pages.
              </p>
              {/* */}
              <h6>
                <a
                  href="https://github.com/huydhoang/octobots"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Octobots (Previous)
                </a>
              </h6>
              <p>
                A multi-threaded data pipeline written in Python that provided updates to a terabyte
                of customer data monthly.
              </p>

              {/*  */}
              <h3>#Prototypes / WIP</h3>
              {/*  */}
              <h6>
                <a
                  href="https://github.com/bbudtech/chessbud-web"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chessbud
                </a>
              </h6>
              <p>
                A full-stack chess website which includes a Python backend to serve the
                state-of-the-art chess engines Stockfish 14 and LeelaChessZero 0.28, a kid-friendly
                client-side JavaScript bot, and a static front-end to let users play with the bots.
              </p>
              {/*  */}
              <h6>
                <a
                  href="https://github.com/huydhoang/pxt-bbudkids"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  pxt-bbudkids
                </a>
              </h6>
              <p>
                A MakeCode extension that I built to let my students use Vietnamese code blocks to
                visually program Microbit robots.
              </p>
              {/*  */}
              <h6>
                <a
                  href="https://github.com/bbudtech/kidznet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kidznet
                </a>
              </h6>
              <p>
                An AI-moderated photo gallery that blocks sensitive photos from being uploaded to
                it. This was a web app that I created in 2 days to apply for a UNICEF programme.
              </p>
              {/*  */}
              <h6>
                <a
                  href="https://github.com/huydhoang/gatsby-notion-ghpages"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gatsby-Notion-GhPages
                </a>
              </h6>
              <p>
                A previous iteration of this blog that employed Python to automatically fetch my
                composed blog posts from Notion.so via its Python API wrapper.
              </p>
              {/*  */}
              <h6>
                <a
                  href="https://github.com/huydhoang/next-typescript-template"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Next.js TypeScript Template
                </a>
              </h6>
              <p>
                A ready-to-use Next.js template which I created for my own use. It features strict
                TypeScript support and automatic code formatting using ESLint+Prettier.
              </p>
              <h5>What to expect</h5>
              <p>
                I can cover a wide range of tasks, from managing a cloud-based virtual machine and
                writing server-side code to handling a minimal frontend workload.
              </p>
              <p>
                However, most of my works were solo / independent. I have not had much experience
                collaborating on a large scale project with others. That said, I will need relevant
                orientation to start working on a multiplayer project.
              </p>
              <p>
                I&apos;m confident in my written English skills, but not so much in my verbal
                communication.
              </p>
              <h5>Further info</h5>
              <p>
                More details about my background are available on{' '}
                <a
                  href="https://linkedin.com/in/huydhoang"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  my LinkedIn profile.
                </a>
              </p>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default Profile;
