#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { AssertionTestsStack } from '../lib/assertion-tests-stack';

const app = new cdk.App();
new AssertionTestsStack(app, 'AssertionTestsStack');
