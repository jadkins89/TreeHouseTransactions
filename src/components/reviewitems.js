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
      data.allReviewsJson.edges.sort(function(a,b) {
        let dateA = new Date(a.node.date), dateB = new Date(b.node.date);
        return dateB - dateA;
      });
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