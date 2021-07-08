>note: some of the websites linked here are only in polish

# V1
## discovery

around march 2021 I was looking around the gov open data website and discovered that the city of Warsaw (Which is where i live) has an open [API](http://api.um.warszawa.pl/).

Resource that I found the most interesting was obviously [buses and trams online](https://api.um.warszawa.pl/files/9fae6f84-4c81-476e-8450-6755c8451ccf.pdf).

## first app

The first thing I did was creating a NodeJS app that f.tches the API for buses then logs in console links to their positions on google maps 

It worked fine, but I thought that websites are way cooler than console applications and that maps are cooler than links to maps, so I started making.

## first website

I decided to use Express in which i had almost no experience at the time,
so i started watching tutorials.

After some time I've finally made the first website.

![first website](/images/ztmgeo1.png)

It definitely wasn't much, but I had to start somehow.

## adding maps

The best way to display a list of geographical coordinates is a map, so that's what I added.

I went with mapbox, mainly because of [this video](https://youtu.be/OySigNMXOZU).

after some time, I finally got the data onto maps!

## adding features

One of the first thigs I added was searching for lines

Another one was a dropdown list of all the results found

The most challanging feature i added was getting bus details

### Getting bus details
The most challanging part of this was that there's no API for that details, so i had to scrape, i used jsdom.
To get bus details, I had to:

>do a GET request to https://www.ztm.waw.pl/en/vehicle-database/ searching for a bus of a certain id

>get the first results href

>do a GET request to the href 

>read the tables

## End of V1

V1 got finished

here's how it looks
![](/images/ztmgeo2.png)

I wouldn't disagree with you if you said that it's ugly

# V2


### Why?

Because I wanted to learn TypeScript

### When? 

around end of June 2021

## Redoing

redoing ZtmGeo in typescript was pretty simple, mainly because programming is mostly about thinking, not about writing code

## Improving

This time I made it so you can also track trams,
decided to make it dark themed,
removed unnecessary things,
making points on map clickable,
making it a PWA

## Finished (for now) V2

here's how V2 looks

![just the map](/images/ztmgeo_v2-1.png)
![map with a tram selected](../../images/ztmgeo_v2-2.png)

I think it looks much better than V1

if you disagree, then :'(