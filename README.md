metadata-scraping

## A NodeJS scraper to extract the OpenGraph parameters.


#### **Usage**
- Clone the repo
- Run npm install
- To run test cases in development, run **npm test**
- To start the server run **npm start** either specify the port as an env variable or use the default port 3000

#### What does it do ?
- Scrapes the given url for OG tags and returns them
- In the absence of OG tags, returns the next best thing
- The request is made via a POST call, with a **url** key in the object in the body
- Still not clear go ahead and fire up a POST call to **https://shrouded-brook-86083.herokuapp.com/metadata** with post body
          {
              "url": "https://www.flipkart.com"
          }


