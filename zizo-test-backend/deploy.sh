#!/bin/bash

set -e

echo "Starting Serverless Deployment..."

if [[ -z "$AWS_ACCESS_KEY_ID" || -z "$AWS_SECRET_ACCESS_KEY" ]]; then
  echo "AWS credentials not found! Set AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY."
  exit 1
fi

if ! command -v serverless &> /dev/null; then
  echo "Serverless Framework is not installed. Installing it now..."
  npm install -g serverless
fi

echo "Installing dependencies..."
npm install

echo "🚀 Deploying to AWS Lambda..."
serverless deploy --verbose

DEPLOY_STATUS=$?

if [ $DEPLOY_STATUS -eq 0 ]; then
  echo "✅ Deployment successful!"
else
  echo "Deployment failed. Check logs for errors."
  exit 1
fi
