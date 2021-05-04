import { expect as expectCDK, haveResource, countResources } from '@aws-cdk/assert';
import { App, Stack } from '@aws-cdk/core';
import { VpcStack } from '../lib/vpc-stack';

let stack: Stack;

beforeEach(() => {
  const app = new App(); 
  stack = new VpcStack(app, 'MyVpcStack');
});

test('VpcStack availability zones as expected', () => {
  // WHEN
  const actualAzs = stack.availabilityZones

  // THEN
  expect(actualAzs.length).toBe(2);
  expect(actualAzs).toContain("eu-west-2a");
  expect(actualAzs).toContain("eu-west-2b");
});

test('Vpc Created', () => {
  // THEN
  expectCDK(stack).to(haveResource("AWS::EC2::VPC"));
});

test('Vpc DNS hostnames not supported', () => {
  // THEN
  expectCDK(stack).to(haveResource("AWS::EC2::VPC", {
    EnableDnsHostnames: false
  }));
});

test('Number of NatGateways matches number of AZs', () => {
  // THEN
  expectCDK(stack).to(countResources("AWS::EC2::NatGateway", 2));
});
