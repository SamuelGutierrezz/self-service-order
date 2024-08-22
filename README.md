<h1>This is an interactive self service UI/UX project</h1> <br>

![servicemachine2](https://github.com/user-attachments/assets/8a74136c-587d-4628-9375-971586bcfe9d)


<ol>
  <li>HighLight items</li>
  <li>DeHighlight items</li>
  <li>Populate a total counter as your highlighting</li>
  <li>Calculate as you are selecting and changing quantity amount for units</li>
</ol>

<h1>Installing WAMP on Windows</h1>
<h3><mark>WAMP is providing the MySQL database connection...</mark></h3>

```Wamp website

https://wampserver.aviatechno.net/

```
<img width="400" alt="wampLink2" src="https://github.com/user-attachments/assets/fdb0e911-f869-468a-b502-99b7e7a4a9ec">


<p>
After clicking the link and saving the installer <br>
Click on the installer and follow the simple steps, it adds to path by default <br> 
After install is completed - you should have a pink Wamp icon <br>
<h3>Clicking the WAMP icon will boot up WAMP</h3>
After bootup - web companion icon in your tool menu <br>
will turn from orange to green.<br>
  
![image](https://github.com/user-attachments/assets/f72a7a30-8f71-478d-a9b6-2070f17a42e1)

<br>
<br>

**PLEASE NOTE WE WILL KEEP HOST AS ROOT WITH NO PASSWORD** <br><br>
  OUR MAIN OBJECTIVE IS TO WITNESS THE ICON TURN GREEN - <br>
  IF YOU WISH TO SEE THE DATABASE THROUGH THE PHP MYADMIN <br>
  UI - YOU CAN DO THE FOLLOWING
</p>



<h4>When green icon is available, #1-click green icon, #2-click PhpMyAdmin, #3-click PhpMyAdmin *with the version number*</h4> 

<br>

<img width="250" alt="greenwamp2" src="https://github.com/user-attachments/assets/c7d964c9-9996-4941-889c-2b35c38beddf">


<br>



<h1>While WAMP server is running - we can run our server script and it will be live on localhost:3000</h1>
<br>
<br>
<br>
<h1>Installing Node.JS on your machine</h1>

```Node Website
https://nodejs.org/en
```
<br>

<img width="200" alt="nodejswebsite2" src="https://github.com/user-attachments/assets/1eff4314-6f2e-4d0b-9f76-61f736d1757c">

The dowload insrtuctions are straight forward  <br>
and will install node.js and the npm(NodePackageManager)<br>
in your path for it to be available for use


<h4>After installing Node.js on computer</h4>
<h2>Lets copy the Repository</h2>
Make a brand new folder on your desktop <br>
Name it however you'd like <br><br>
Using a gitbash terminal for windows

```
cd yourfoldername  *assuming your in you desktop directory where you can see your new folder*
```
now type 
```
git clone "https://github.com/SamuelGutierrezz/self-service-order.git"
```
Now go into cloned repo
```
cd self-service-order
```
IN THIS DIRECTORY WE'll INSTALL NECESSARY DEPENDENCIES
```
npm install express
```
```
npm install mysql2
```
Now making sure WAMP is enabled and icon is green
```
node server.js
```
Now we can open up a browser and type localhost:3000 and see the webapp

![image](https://github.com/user-attachments/assets/05b5848a-9143-47fd-9533-0e03642dee7d)






