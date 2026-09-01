import { Button } from '@base-ui/react/button'
import { Toast } from '@base-ui/react/toast'
import styles from './ContactSection.module.css'

interface CopyEmailButtonProps {
  email: string
}

async function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text)
    return
  }

  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.append(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
}

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const toastManager = Toast.useToastManager()

  const handleCopy = async () => {
    await copyText(email)
    toastManager.add({
      title: 'Email address copied.',
      timeout: 3000,
    })
  }

  return (
    <Button type="button" className={styles.copyButton} onClick={handleCopy}>
      Copy email
      <svg aria-hidden="true" viewBox="0 0 20 20">
        <rect x="6.5" y="6.5" width="9" height="9" />
        <path d="M13.5 6.5V4.5h-9v9h2" />
      </svg>
    </Button>
  )
}
