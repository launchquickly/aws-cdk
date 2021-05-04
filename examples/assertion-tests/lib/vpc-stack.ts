import { App, Stack, StackProps } from "@aws-cdk/core";
import { Vpc } from "@aws-cdk/aws-ec2";

export class VpcStack extends Stack {
    constructor(scope: App, id: string, props?: StackProps) {
      super(scope, id, props);

      new Vpc(this, "AssertionTestsVPC", {
          enableDnsHostnames: false,
          maxAzs: 2
      });
    }

    get availabilityZones(): string[] {
        return ['eu-west-2a', 'eu-west-2b'];
    }
}