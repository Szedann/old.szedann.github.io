>note: some of the websites linked here are only in polish

## discovery

around march 2021 I was looking around the gov open data website and discovered that the city of Warsaw (Which is where i live) has an open [API](http://api.um.warszawa.pl/).

Resource that I found the most interesting was obviously [buses and trams online](https://api.um.warszawa.pl/files/9fae6f84-4c81-476e-8450-6755c8451ccf.pdf)

## first app

The first thing I did was creating a NodeJS app that f.tches the API for buses then logs in console links to their positions on google maps 

It worked fine, but I thought that websites are way cooler than console applications and that maps are cooler than links to maps, so I started making.

## first website

I decided to use Express in which i had almost no experience at the time,
so i started watching tutorials.

After some time I've finally made the first website.

![first website](/images/ztmgeo-1.png)

It definitely wasn't much, but I had to start somehow.

## adding maps

The best way to display a list of geographical coordinates is a map, so that's what I added.

I went with mapbox, mainly because of [this video](https://youtu.be/OySigNMXOZU).

after some time, I finally got the data onto maps!

## adding features

