import React from 'react';
import Head from 'next/head';
 

const Header = (props) => {
  let { title, desc, keywords,headhesive, matchHeight, custom } ='';
   
  if (props.title === 'home') {
      title = 'The Greatest Movie Database WebSite'; 
      desc  = 'Movie Database Website Which Gets Data From API , it can search and show movies and TV shows informations.';
      keywords='Movies, TV Shows, Reviews, React, NExtjs, IMDB, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast';
   
      headhesive='/static/js/headhesive.min.js';
      matchHeight='/static/js/headhesive.min.js';
      custom='/static/js/custom.js';
    
    }else{
      title = props.title;
      desc=props.description;
      keywords=props.keywords;
      
  }

 
    return (
        <Head>
   
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:locale" content="en_EU" />
         
        <meta property="og:type" content="website"/>
        <meta property="og:description" content={desc} />
        <link rel="icon" type="image/ico" href="/static/images/fav.png"/>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"></link>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <script src="/static/js/jquery-2.2.4.min.js"></script>
        <script src="/static/js/jquery-ui.min.js"></script>
        <script src="/static/js/bootstrap.min.js"></script>
        <script src={headhesive}></script>
        <script src={matchHeight}></script>
        <script src={custom}></script>
       
    
         
      </Head>
    )
}
export default Header;