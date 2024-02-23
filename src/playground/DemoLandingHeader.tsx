import {
  LandingActions,
  LandingDescription,
  LandingHeader,
  LandingTitle,
  MotionLandingHeader,
} from "@/components/LandingHeader"
import { Button, Link } from "@nextui-org/react"

export default function DemoLandingHeader() {
  return (
    <div>
      <LandingHeader>
        <LandingTitle>This is a header for your landing page</LandingTitle>
        <LandingDescription>
          It's a nice looking way to introduce yourself.
        </LandingDescription>
        <LandingActions>
          <Button variant="flat">Link</Button>
          <Button
            href="/"
            as={Link}
            color="primary"
            showAnchorIcon
            variant="flat"
          >
            External Link
          </Button>
        </LandingActions>
      </LandingHeader>
      <MotionLandingHeader>
        <LandingTitle>This header has a fade in animation</LandingTitle>
        <LandingDescription>Powered by Framer Motion.</LandingDescription>
        <LandingActions>
          <Button variant="flat">Link</Button>
          <Button
            href="/"
            as={Link}
            color="primary"
            showAnchorIcon
            variant="flat"
          >
            External Link
          </Button>
        </LandingActions>
      </MotionLandingHeader>
    </div>
  )
}
