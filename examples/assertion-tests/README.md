# Assertion tests

CDK assertion tests allow verification of certain construct behaviour and attributes. This includes, checking a resources:

* existance: [Vpc Created](/examples/assertion-tests/test/vpc-stack.test.ts#L24)
* values of some of its properties: [Vpc Created](/examples/assertion-tests/test/vpc-stack.test.ts#L30)
* number: [Number of NatGateways matches number of AZs](/examples/assertion-tests/test/vpc-stack.test.ts#L36)

Sometimes these checks allow the verification of other properties. e.g. checking the number of NatGateways is 2 confirms that the effect of the maxAz property.

You can also use normal jest assertions to verify attributes and values of constructs: 

* test [VpcStack availability zones as expected](/examples/assertion-tests/test/vpc-stack.test.ts#L17) asserts the number and values of AZs.

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