import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer>
      <div>
        <h3>Statically Generated with Next.js.</h3>
        <div>
          <a href="https://nextjs.org/docs/basic-features/pages">
            Read Documentation
          </a>
          <a
            href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
          >
            View on GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
