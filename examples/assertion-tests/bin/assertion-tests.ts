#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { VpcStack } from '../lib/vpc-stack';

const app = new cdk.App();
new VpcStack(app, 'AssertionTestsVpcStack');
