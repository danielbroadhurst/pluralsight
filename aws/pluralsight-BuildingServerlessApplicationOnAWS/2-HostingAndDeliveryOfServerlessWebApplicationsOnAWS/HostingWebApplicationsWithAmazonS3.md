# Hosting Web Applications with Amazon S3

## Uploading a React App in Amazon S3

1. ``` npx create-react-app react-name```
1. ``` yarn build ```
1. Create a bucket on AWS Console and upload the ```/build``` folder.

## Hosting a React App in Amazon S3

1. Navigate to Propertie tab of the S3 Bucket and Edit
1. Enable
1. IndexDocument=**index.html**
1. ErrorDocument=**index.html** and Save
1. Change Permissions of the Bucket to be open to the Public
1. Change the Bucket Policy on the permissions tab to add S3 Get Object

## Amazon S3 Hosting Performance

- Edit the metadata of files. By adding Cache-Control to files can improve the loading of files.
