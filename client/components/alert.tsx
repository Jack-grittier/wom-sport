import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link'

export default function Alert({ preview }) {
  return (
    <div>
      <Container>
        <div>
          {preview ? (
            <>
              This is a page preview.{' '}
              <Link href="/api/exit-preview">Click here</Link> to exit preview
              mode.
            </>
          ) : (
            <>
              The source code for this blog is{' '}
              <a
                href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
