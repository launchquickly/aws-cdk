#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { ValidationTestsStack } from '../lib/validation-tests-stack';

const app = new cdk.App();
new ValidationTestsStack(app, 'ValidationTestsStack');
