This repository contains two main parts:

Frontend: The client-facing application.
Serverless Lambda Function: A serverless function deployed to AWS Lambda.
Table of Contents
Frontend Setup
Serverless Lambda Function Setup
Frontend Setup
Prerequisites:
Node.js (v14 or higher)
npm (or yarn)
Vercel (or another deployment platform)
Steps to Set Up the Frontend:
Clone the Repository:

bash
Copy
Edit
git clone https://github.com/yourusername/your-repo.git
cd your-repo
Navigate to the Frontend Directory:

bash
Copy
Edit
cd frontend
Install Dependencies: Install the necessary dependencies for the frontend project using npm or yarn:

bash
Copy
Edit
npm install
Or, if you're using yarn:

bash
Copy
Edit
yarn install
Run the Frontend Locally: To start the development server and run the frontend locally, use:

bash
Copy
Edit
npm run dev
Or, with yarn:

bash
Copy
Edit
yarn dev
This will start the frontend on http://localhost:3000.

Deploy Frontend to Vercel (or your preferred platform):

If you haven't already, sign up for Vercel at vercel.com.
Link your GitHub repository to Vercel and choose the frontend directory during the deployment setup.
Vercel will automatically handle the build process, and your frontend will be live on the URL provided by Vercel.
Serverless Lambda Function Setup
Prerequisites:
AWS CLI installed and configured
Node.js and npm (for Serverless deployment)
Serverless Framework installed
Steps to Set Up the Lambda Function:
Navigate to the Lambda Directory: Go to the serverless folder:

bash
Copy
Edit
cd serverless
Set Your AWS Credentials: The deployment script requires AWS credentials. Set them up in your environment as follows:

Option 1: Using AWS CLI (recommended):

bash
Copy
Edit
aws configure
This will prompt you to enter your AWS Access Key ID, AWS Secret Access Key, Region, and Output Format.

Option 2: Manually Set Environment Variables (temporary session):

bash
Copy
Edit
export AWS_ACCESS_KEY_ID="your-access-key-id"
export AWS_SECRET_ACCESS_KEY="your-secret-access-key"
This method works only for the current terminal session.

Install Dependencies: Install the necessary dependencies for the Lambda function project:

bash
Copy
Edit
npm install
Deploy Lambda Function: Once dependencies are installed, you can deploy the Lambda function to AWS using the provided deploy script:

Run the deploy script:

bash
Copy
Edit
./deploy.sh
This script will:

Check for AWS credentials.
Install the Serverless Framework if not already installed.
Deploy the function to AWS Lambda using the Serverless Framework.
During deployment, you will see detailed logs, and once successful, you'll get a message confirming the successful deployment.

If there’s any issue with the deployment, you’ll see the error message in the logs and the script will exit with a failure message.

Additional Information:
Serverless Framework Configuration: The serverless.yml file in the serverless directory contains configuration for deploying the Lambda function to AWS. You can customize settings like the function name, memory, timeout, and more in this file.

Important Note for AWS Permissions: Ensure your AWS IAM user has the correct permissions for deploying resources (e.g., Lambda, API Gateway, IAM roles). At a minimum, your IAM user needs the following AWS IAM policies:

AWSLambda_FullAccess
IAMFullAccess
APIGatewayAdministrator
Alternatively, you can assign more specific permissions as required.

Troubleshooting:
If you see any issues with AWS credentials, make sure you have run aws configure or set the environment variables correctly.
If the Serverless Framework is not installed, the script will attempt to install it. Ensure you have npm installed and have network access.
