# Video Audition SFDX/Heroku App



This is the sfdc side of the audition application located here: https://github.com/cowie/auditionFormApp 

## Dev, Build and Test

1) First, pull this down and deploy via SFDX.

2) Now, in your sfdx project directory, do a happy 
sfdx force:user:password:generate 
This will give you the credentials you need to set up Heroku Connect.


3) Next, go here - https://github.com/cowie/auditionFormApp and hit the button to create your Heroku app...or just click this button now that I think about it - [![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/cowie/auditionFormApp)


4) Once the Heroku app is live, go into Heroku Connect. Authorize using your username/password from the sfdx command you did earlier (you did DO that right). Remember to set the endpoint as a sandbox/test endpoint to work with a scratch org. 
5) Add the following mapping:
Object: Candidate__c
Fields: Email_Address__c, First_Name__c, Last_Name__c, Twitter_Handle__c, Video_ID__c

6) Write Database Updates to Salesforce using *video_ID__c* as the unique identifier - CHECKED.

7) Ok - go into the cdgEmbedViewer.cmp and change the domain on the iframe to your heroku domain. I was gonna automate this but got tired.

8) Now you do you.
 
Open your heroku app's main page ('/') and hit the record button. Make a dumb video, and then when it finishes verifying, the button for the submit will activate. Punch in some details, esp Email (unique) and hit submit. Then flip to your SF app and find the record in your Candidate table.


## Resources


## Description of Files and Directories


## Issues

only my mental ones afaik
