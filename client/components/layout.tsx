import PreviewAlert from './preview-alert'
import Footer from './footer'
import Meta from './meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div>
        {preview && <PreviewAlert />}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
