# Common [Commands](https://docs.aws.amazon.com/cdk/latest/guide/cli.html#cli-ref)

## Create

Create a new CDK project from a specified template:
```
cdk init [TEMPLATE]
```

Bootstrap a CDK stack into an AWS environment:
```
cdk bootstrap [ENVIRONMENTS...]
```

## Deploy

Deploy the named stacks:
```
cdk deploy [STACKS...]
```

## Destroy

Destroy the named stacks:
```
cdk destroy [STACKS...]
```

## Compare

List the stacks:
```
cdk list [STACKS...]
```

Compare the specified stacks with the deployed stack:
```
cdk diff [STACKS...]
```

Synthesizes and prints the CloudFormation templte for the named stacks:
```
cdk synth [STACKS...]
```