<h1>Installing WAMP on Windows</h1>
WAMP is providing the MySQL database connection...

```Wamp website

https://wampserver.aviatechno.net/

```
![image](https://github.com/user-attachments/assets/961ce85a-9a45-4b78-85b9-32060987898b)

<p>
After clicking the link and saving the installer <br>
Click on the installer and follow the simple steps, it adds to path by default <br> 
After install is completed - you should have a pink Wamp icon <br>
<h3>Clicking the WAMP icon will boot up WAMP</h3>
After bootup - web companion icon in your tool menu <br>
will turn from orange to green.
**PLEASE NOT WE WILL KEEP HOST AS ROOT WITH NO PASSWORD**
</p>

![image](https://github.com/user-attachments/assets/f72a7a30-8f71-478d-a9b6-2070f17a42e1)

<h4>When green icon is available, #1-click green icon, #2-click PhpMyAdmin, #3-click PhpMyAdmin *with the version number*</h4> 

<br>

![image](https://github.com/user-attachments/assets/4c8ee9b0-2745-49e3-86d4-bd2af5207b01)

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

The dowload insrtuctions are straight forward  <br>
and will install in your path for it to be available for use
![image](https://github.com/user-attachments/assets/809b1242-3ef6-4fa8-8f13-47788c2387e8)

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






