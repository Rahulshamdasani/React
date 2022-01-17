# My github learnings
Git is a free opensource version control system that we will learn today

## clone - Copy a git repository to your machine



## add - track changes in git



## commit - save files to git




## push - push to repo



## pull - pull from a repo





## SSH
- run command <code>ssh-keygen</code>
- This will ask for some name
- Once you enter the name, it will create 2 files with that name one with extension of .pub and other one normal
- Open the .pub file with vscode and copy the content
- Go to github then on top right corner where ur profile is displayed, click on settings
- Go to ssh 
- Add the new ssh key, you can give any name you want preferrably device name you are working on
- Key should be accurate
- Once that is done return to your terminal
- ```eval ssh-agent``` this command should tell you if the key was added properly to git
- It should give some output like agent pid ..
- Then write command ```ssh-add rahzz/YOUR_FILE_PATH```
- Once this is done that means your ssh is done



