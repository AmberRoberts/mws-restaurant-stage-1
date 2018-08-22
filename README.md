#### FEND Project 5
---

## Project Overview: Stage 1

The purpose of this project was to convert a static webpage to a mobile-ready web application. The static design lacked accessibility, so the goal was to convert the design to be responsive on different sized displays and accessible for screen reader use. A service worker was added to begin the process of creating a seamless offline experience for users.

### Specification

Starter code was provided for a restaurant reviews website. The code had a lot of issues. I updated the code to resolve the following issues: Usability on a desktop browser and a mobile device, standard accessibility features, and offline functionality.

### How do I view the application?

1. Fork or clone the [repository](https://github.com/AmberRoberts/mws-restaurant-stage-1) so you can access it.

2. Replace <YOUR TOKEN HERE> on restaurant_info.js line 25 and main.js line 94 with your own access token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

3. In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

4. With your server running, visit the site: `http://localhost:8000`

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

### Resources Used

* ARIA color combinations chosen using the amazing [Colorsafe color picking tool](http://colorsafe.co/)
* [ARIA map research](https://stackoverflow.com/questions/50503677/proper-use-of-aria-role-for-google-maps)
* Chat and reference via the FEND_Project_5 slack channel for the Udacity/Grown With Google Scholarship program
* [Udacity](https://www.udacity.com) lessons on Accessibility, Service Workers, and Responsive Web Design
