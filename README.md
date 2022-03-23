
![Logo](https://bigcornercreative.com/wp-content/uploads/2019/08/contact-big-corner-creative-logo.png)


# BCC New Project




## Authors

- [@Alexander](https://www.github.com/Alexander-Yarnell)
- [@Ian](https://www.github.com/iroseberry)


## Prerequisites
- Make sure you have Node v14.x Installed
- Make sure you have npm v6.x Installed
- Make sure you have a working terminal (Zsh, Terminator, Git Bash, etc...) 
    Note: Window's default terminal will not work.
- Make sure you have git Installed


## Local Setup

**Build Project Files**

Go to the project directory

```bash
cd /Your/Project/Location
```
Make new directory

```bash
mkdir New-Project-Name
```
Go to new project directory

```bash
cd New-Project-Name
```

Make required folders

```bash
mkdir frontend && mkdir backend
```

**Prep Frontend**

Go to frontend directory

```bash
cd frontend
```
Create React App

```bash
npx create-react-app .
```
**Clean Up Files**

Remove .git and .gitignore
```bash
rm -rf .git .gitignore
```

Go to src folder

```bash
cd src
```
Remove files

```bash
rm App.css App.test.js index.css logo.svg reportWebVitals.js setupTests.js
```
Go to public folder
```bash
cd ../public
```
Remove files
```bash
rm favicon.ico logo192.png logo512.png manifest.json robots.txt  
```

**Note :** Do not run this yet! We need to setup the backend & pull the custom settings before we run this app.

**Prep backend**

Go to your backend folder
```bash
cd ../../backend
```
Create strapi app
```bash
npx create-strapi-app@latest . --quickstart
```
After the app is build ^C to stop the installer

**Pull config**

Go to your project file
```bash
cd ..
```
Pull New Project Config
```bash
git pull https://github.com/Alexander-Yarnell/New-Project.git
```


## Setup New Github Project
 **Create new Github Repository**

**Note :** Do not add a README.md or License Yet.

 
Add Github Remote
```bash
git remote add your-remote-name https://github.com/Your-Github/Your-Repo-http.git
```

Push to your new Repo
```bash
git push your-remote-name
```