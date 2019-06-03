import gql from 'graphql-tag'

export const ALL_POSTS_QUERY= gql` 
    query AllPostsQuery {
        allPosts {
            id
            title
            slug
            custom_excerpt
            published_at
            feature_image
            primary_tag {
                id
                name
                slug
            }
            primary_author {
                id
                name
                slug
            }
        }
      }`

      

export const ALL_TAGS_QUERY= gql` 
query AllTagsQuery {
    allTags {
        id
        name
        slug
    }
}`

export const POST_QUERY = gql`
    query PostQuery($slug: String!) {
        post(slug: $slug) {
            id
            title
            html
            feature_image
            published_at
            custom_excerpt
            primary_tag {
                id
                name
                slug
            }
            primary_author {
                id
                name
                slug
            }
        }
    }`