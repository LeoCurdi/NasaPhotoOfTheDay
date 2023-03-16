
# this is a shebang line. it lets vscode know this is a python file
#!/usr/bin/env python3

import urllib.request # this is what well send our request with
import json
import webbrowser
import urllib

from flask import Flask, render_template
from PIL import Image
import base64
import io

# make the application. flask is a web framework
app = Flask(__name__)

# define APOD (astronomy pic of day)
apodurl = 'https://api.nasa.gov/planetary/apod?' # double quotes and single quotes are interchangeable when it comes to strings
mykey = 'api_key=vmq7SyshdUvHyl9B2XsUj0C3N1fNSH34c1mvG4fu' # set up the api key

# call the webservice
apodurlobj = urllib.request.urlopen(apodurl + mykey) # the plus is a concattonation so we're concattonating strings here

# read the file-like object
apodread = apodurlobj.read() # read is going to take the object that was returned and convert it to a json

# decode the json to a python data structure
decodeapod = json.loads(apodread.decode('utf-8')) # loads will load in the content of the json, and decode converts it to a python object

# display the python object
print('\n\nConverted python data')
print(decodeapod)

# use firefox to open the https url
#input('\nPress enter to open NASA picture of the day in Firefox') # input will wait for you to type something
#webbrowser.open(decodeapod['url'])

image_url = str(decodeapod['url'])
name = decodeapod['explanation']
title = str(decodeapod['title']) # convert it to a string

@app.route('/')

# a function
def image():
    return render_template("index.html", image_url=image_url) # use flask to pass the url to an html page

@app.route('/description')
def des():
    return render_template("description.html", explanation=name, title=title)

if __name__ == '__main__':
    app.run()
