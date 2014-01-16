j-zoom-scale-pgb-helloworld
======

Bad News:

Sorry to say but presently Jan 16, 2014 I can not get Phonegap Build to zoom on my Android Galaxy S3, even though it looks like it should be easy by just changing the meta tag to user-scalable=yes and setting a maximum-scale=5



Good News:
Seems to work fine on Phonegap Client. You need to only change 2 files, see them in this repository

1.  myAppName.java file located at  APPFOLDER\platforms\android\src\com\WEBSITE\APPNAME\myAppName.java
2.  In the index.html file you need to change the meta tag that gets auto generated to: 
 
```

<meta name="viewport" content="user-scalable=yes, initial-scale=1, maximum-scale=5, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi" />

```

I did find one gotcha. You can set the initial-scale and minimum scale to a value less than one, but after zooming out then in again it only returns to a scale value of 1, not to the scale that is less than one.

Generally I would not set the initial-scale less than one so this should not be an issue.

###************************************************************************************************************

Disclaimer: I spend my time getting complex things working in simple ways. I have no idea if I am doing anything correctly so please beware if you use my work. My website is at http://www.rocksetta.com

