import { useScrollReveal } from '../hooks/useScrollReveal.js'

export default function Reveal({
  as: Tag = 'div',
  children,
  className = '',
  delay = 0,
  threshold = 0.15,
  style,
  ...rest
}) {
  const [ref, visible] = useScrollReveal(threshold)

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...(style || {}) }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
