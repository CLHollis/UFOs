# OVERVIEW
Take a Javascript file on UFO sighting information and display it as a table. Sifting thru it would be challenging, so we will add filters (thanks to Javascript) to make this table fully dynamic, meaning that it will react to user input. We’ll put it on an HTML page for easy viewing.  You'll customize your webpage using Bootstrap, and equip your table with several fully functional filters that will allow users to interact with our visualizations.
 
- Software: Python 3.7.6, JavaScript 1.7, Bootstrap 4.0.0
- Data Source: [static/js/data.js](static/js/data.js)
- Module Javascript: [static/js/appMod.js](static/js/appMod.js)
- Module HTML: [indexMod.html](indexMod.html)
- Bootstrap components: [static/css/style.css](static/css/style.css)

<image src="images/Module.PNG" width="800" height="700">


# CHALLENGE
Provide a more in-depth analysis of UFO sightings by allowing users to filter for multiple criteria at the same time. In addition to the date, you’ll add table filters for the city, state, country, and shape.

- Challenge Files: [static/js/app.js](static/js/app.js)
- Challenge HTML: [index.html](index.html)

<image src="images/final.PNG" width="800" height="850">

# RESULTS
Type in the search fields which criteria you want to filer by. You can use one or all of the fields. Use the provided examples to aid in formatting of the search. For example, to see Oregon type in "or" in the state field & push [enter].
  
<image src="images/oregon search.PNG" width="800" height="350">

# SUMMARY
- One drawback of this webpage is the exxample guides in the filter search are too dark and may get confused with actial data someing is trying to filter by. I would make them more grey-ed out to not look so much like actual search criteria. 
- Another improvement that could be made is adding a date range and some drop downs instead of fill-in-the-blank search fields so that you can get more results from your search given the availble data parameters. For example, a memo of "data available from 1/1/2010 thru 1/13/2021" above the dates field, and a dropdown for the available shapes would save someone a lot of time trying to guess the parameters without looking at eh entire data set first. 
- I would also recommend pulling in the most recently published photo of a UFO sighting with caption and link to the source article (maybe from MUFON.com). This would really draw people to the page. Fresh content keeps people coming back! And of course I would also update that data. Only using 13 days of data from the thousands of years of UFO sightings in human history is an extramaly small and makes the filtering almost unnecessary. 
- But overall, I am super proud of the progress I've made turning a boring data set into a usable, filterable, client-facing website!  
