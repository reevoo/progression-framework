// @flow
import * as React from 'react'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Layout from '../components/layout'
import {
  Subtitle,
  Title,
  DescriptionView,
  Description,
  DescriptionText,
  DescriptionTitleGroup,
} from '../components/styles'
import '../css/main.min.css'

type Props = {
  data: Object,
}

export default class Index extends React.Component<Props> {
  render() {
    return (
      <Layout data={this.props.data}>
        <DescriptionView>
          <DescriptionTitleGroup>
            <Subtitle>Welcome To</Subtitle>
            <Title>Progression at Reevoo 🎉</Title>
          </DescriptionTitleGroup>
          <Description>
            <DescriptionText>
              This is where we keep the progression frameworks we use at Reevoo.
            </DescriptionText>
            <DescriptionText>
              Progression frameworks are tools that help us evaluate  our
              staff consistently, and help people understand how to progress in
              their work.
            </DescriptionText>
            <DescriptionText>
              We&apos;ve put them here for everyone at Reevoo (and anyone in the
              world!) to use.
            </DescriptionText>
            <DescriptionText>
              We&apos;ll be adding more frameworks as we build them, and
              updating existing ones as we grow, so expect things to change
              around here!
            </DescriptionText>
            <DescriptionText>
              This site, along with all our progression frameworks, are open
              source. That means you can contribute to the development of this
              site or our progression frameworks, and use both as inspiration
              for your own projects!
            </DescriptionText>
            <DescriptionText>
              To get involved, go to{' '}
              <a href="https://github.com/reevoo/progression-framework">
                <FontAwesomeIcon icon={faGithub} />{' '}
                @reevoo/progression-framework.
              </a>
            </DescriptionText>
            <DescriptionText>
              The Reevoo Progression Framework is based on the excellent work 
              done by Monzo and you can take a look at the thinking behind it
              in this{' '}
              <a href="https://monzo.com/blog/2019/01/07/progression">
                blog post.
              </a>
            </DescriptionText>
            <DescriptionText>
              Take a look around and let us know what you think! 🚀
            </DescriptionText>
          </Description>
        </DescriptionView>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            sidebarTitle
            sidebarGroup
          }
        }
      }
    }
  }
`
