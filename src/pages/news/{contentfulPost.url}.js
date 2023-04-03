import React from "react"
import { graphql } from "gatsby"
import PostTemplate from "../../templates/post-template"
import Seo from "../../components/SEO"
import Layout from "../../components/Layout"

const Post = () => {
  return (
    <>
      {/* <Seo title={contentfulPost.title} /> */}
      <Layout>
        post should go here
        {/* <PostTemplate {...contentfulPost} /> */}
      </Layout>
    </>
  )
}

// export const data = graphql`
//   query postQuery($id: String) {
//     contentfulPost(id: { eq: $id }) {
//       title
//       introduction
//       content {
//         raw
//         references {
//           ... on ContentfulAsset {
//             contentful_id
//             gatsbyImageData(
//               width: 800
//               placeholder: BLURRED
//               formats: [AUTO, WEBP, AVIF]
//             )
//             description
//             __typename
//           }
//         }
//       }
//       createdAt(formatString: "DD MMMM, YYYY")
//     }
//   }
// `

export default Post
