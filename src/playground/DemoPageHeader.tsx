import { PageDescription, PageHeader, PageTitle } from "@/components/PageHeader"
export default function DemoPageHeader() {
  return (
    <PageHeader>
      <PageTitle>Example Page</PageTitle>
      <PageDescription>
        This is a header that can be used for non-landing pages.
      </PageDescription>
    </PageHeader>
  )
}
