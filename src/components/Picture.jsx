/**
 * Renders a <picture> with a WebP source and a JPG fallback.
 * Pass the .jpg path; the WebP twin is assumed to share the same stem.
 */
export default function Picture({ src, alt = '', className, width, height, loading = 'lazy', fetchpriority }) {
  const webp = src.replace(/\.jpg(\?.*)?$/, '.webp$1')
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchpriority}
        decoding="async"
      />
    </picture>
  )
}
