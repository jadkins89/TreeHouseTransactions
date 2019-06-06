import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import ReadMoreReact from 'read-more-react'

const ReviewItems = ({data}) => (
  <StaticQuery
    query={graphql`
      query ReviewItemsQuery {
        allReviewsJson {
          edges {
            node {              
              name
              date
              body
            }
          }
        }
      }
    `}
    render={data => {
      return (<> 
        {data.allReviewsJson.edges.map((review, index) => ( 
          <div className="review-container">  
            <hr/> 
            <p><strong>{review.node.name}</strong> {review.node.date}</p>
            <ReadMoreReact text={review.node.body} />
          </div>
        ))}
        </>
      )}
    }
  />
); 

export default ReviewItems