import * as React from "react"
import Button from "../Button/Button"
import { PostItemStyles, PostItemStylesNonLink } from "./PostStyles"

const BlogItem = ({ node, isLink = true }, key) => {
  const { title, gatsbyPath, introduction, createdAt } = node

  return isLink ? (
    <PostItemStyles key={key} to={gatsbyPath}>
      <h4>{title}</h4>
      {introduction && <p>{introduction}</p>}
      <div className="blogitem__meta">
        <Button as="span" text="Read More" arrow={true} />
        <p>{createdAt}</p>
      </div>
    </PostItemStyles>
  ) : (
    <PostItemStylesNonLink key={key} to={gatsbyPath}>
      <h4>{title}</h4>
      {introduction && <p>{introduction}</p>}
      {/* <div className="blogitem__meta">
    <Button as="span" text="Read More" arrow={true} />
    <p>{createdAt}</p>
  </div> */}
    </PostItemStylesNonLink>
  )
}

export default BlogItem
