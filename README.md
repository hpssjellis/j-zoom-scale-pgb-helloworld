j-zoom-scale-pgb-helloworld
======


May 15, 2014 Today I am going to try to make the Android zoom ability a bit more useful by making it into a .js file that can be used by any page in your project.

this is not yet successful, just ignore advanceZoom.html and androidzoom.js for now









May 11, 2014

It really really really bugs me that I can't get a simple viewport working in Phonegap Build for Android when it works by default on the iPad.  So.... I made a hacked version of pinch zoom for Android Phonegap Build. It uses touchStart, touches array, clientX to get the difference in the distances between 2 fingers touching the screen. It then uses webkittransform  to scale the entire page.


I had huge issues with scale and translate until I used this javascript command

document.getElementById('myDiv1').style.WebkitTransformOrigin = '0px 0px';

Then everything zoomed great.

I have included regular zoom which only increases the page and my own special zoom which allows you to shrink a page to see the entire web page.

I tried using the body tag id for zooming, which works but when the page shrinks the body also shrinks so that you can not touch the page to zoom in. The solution was to have a div tag just below the body but filling the entire page.




To DO list: Now make this turn itself off when compiling for iOS. I think it can be conditionally compiled using device == android but will have to look into it. Will use a statement kind of like  (but will have to make a donfig.xml file to use the device)
  var document.myPath = (device.platform == "Android") ? "/android_asset/www/" : "/";









----------------------------------------------------





Old Readme file when I did not have it working
Jan 16, 2014

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

On regular installed phonegap it is reasonably easy to edit the myAppName.java file to include the following:


        super.loadUrl(Config.getStartUrl());
        //super.loadUrl("file:///android_asset/www/index.html")



        super.appView.getSettings().setBuiltInZoomControls(true);
        super.appView.getSettings().setDefaultZoom(ZoomDensity.MEDIUM);
        super.appView.getSettings().setSupportZoom(true);











************************************************************************************************************

###Disclaimer: I spend my time getting complex things working in simple ways. I have no idea if I am doing anything correctly so please beware if you use my work. If you like this App and can hum, play or sing, please help the musically illiterate, use a flash capable computer to add your favorite song at http://www.rocksetta.com      twitter @rocksetta 


