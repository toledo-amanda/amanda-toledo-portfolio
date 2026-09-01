import { Toast } from '@base-ui/react/toast'
import styles from './ToastRegion.module.css'

export function ToastRegion() {
  const { toasts } = Toast.useToastManager()

  return (
    <Toast.Portal>
      <Toast.Viewport className={styles.viewport}>
        {toasts.map((toast) => (
          <Toast.Root key={toast.id} toast={toast} className={styles.toast}>
            <Toast.Content className={styles.content}>
              <Toast.Title className={styles.title} />
              <Toast.Close className={styles.close} aria-label="Dismiss notification">
                <svg aria-hidden="true" viewBox="0 0 16 16">
                  <path d="M3 3l10 10M13 3 3 13" />
                </svg>
              </Toast.Close>
            </Toast.Content>
          </Toast.Root>
        ))}
      </Toast.Viewport>
    </Toast.Portal>
  )
}
