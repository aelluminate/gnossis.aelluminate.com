import { computerScience } from "@/lib/source"
import type { Metadata } from "next"
import { DocsPage, DocsBody, DocsTitle, DocsDescription } from "fumadocs-ui/page"
import { notFound } from "next/navigation"
import { MDXContent } from "@content-collections/mdx/react"
import { components } from "@/components/shared/mdx-components"
import { getGithubLastEdit } from "fumadocs-core/server"

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params
  const page = computerScience.getPage(params.slug)
  if (!page) notFound()

  const filePath = `content/computer-science/${page.file.flattenedPath}.mdx`

  const time = await getGithubLastEdit({
    owner: "aelluminate",
    repo: "gnossis",
    sha: "main",
    path: filePath,
  })

  return (
    <DocsPage
      lastUpdate={time ? new Date(time) : new Date()}
      tableOfContent={{
        style: "clerk",
        single: false,
      }}
      editOnGithub={{
        repo: "gnossis",
        owner: "aelluminate",
        sha: "main",
        path: filePath,
      }}
      toc={page.data.toc}
      full={page.data.full}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDXContent code={page.data.body} components={components} />
      </DocsBody>
    </DocsPage>
  )
}

export function generateStaticParams() {
  return computerScience.generateParams()
}

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params
  const page = computerScience.getPage(params.slug)
  if (!page) notFound()

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata
}
