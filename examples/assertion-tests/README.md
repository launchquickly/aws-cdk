# Assertion tests

You should explore the contents of this project. It demonstrates a CDK app with an instance of a stack (`AssertionTestsStack`)
which contains an Amazon SQS queue that is subscribed to an Amazon SNS topic.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

## References

* [@aws-cdk/assert - Testing utilities and assertions for CDK libraries](https://www.npmjs.com/package/@aws-cdk/assert)
* [Typescript Reference - aws-cdk/assert](https://docs.aws.amazon.com/cdk/api/latest/typescript/api/assert.html)
* [Testing Constructs](https://docs.aws.amazon.com/cdk/latest/guide/testing.html)
* [CDK Workshop - Assertion Tests](https://cdkworkshop.com/20-typescript/70-advanced-topics/100-construct-testing/1000-assertion-test.html)