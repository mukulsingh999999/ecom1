import React from 'react'
import {Helmet} from "react-helmet";

const meta = () => {
  return (
    <> 
     <Helmet>
    <meta charSet="utf-8" />
    <title>My Title</title>
    <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
</>
  )
}

export default meta