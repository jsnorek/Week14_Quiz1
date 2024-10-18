## Week 14 Quiz - Debugging, Git, & GitHub

You have just joined your favorite company and have been tasked with printing new data to a webpage. However, the existing files/directories are all jumbled up, and the code seems to have errors. Fix the bugs and sile structure. 

1. Debug the broken code so that it's working
2. Correct the file architecture using command line
3. node_modules are committed, remove them from repo on GitHub
4. Correct the server file’s directory by moving it to the appropriate directory
5. Update README with
    - screenshot of the app's webpage, 
    - document errors you encountered and how you fixed them, 
    - detail the git commands you used to remove the node_modules, and
    - detail the git commands you used to correct the file structure
## Corrections

![Screenshot 2024-10-18 at 7 45 47 AM](https://github.com/user-attachments/assets/8c031f5f-9b1f-49f7-88c9-f16894f177bf)

- There was an erorr in App.js on lines 16 & 17. It referenced items instead of item (which was implemented during mapping on line 13)
- I also moved the app.listen in the server.js file to the bottom of the page to make sure it was formatted properly
- I added node_modules to the .gitignore file and combined the .gitignore file in the client, server, and root folder to just the root
- I tried using mv server / command to move the server file out to the root but it didn't work so I dragged it
