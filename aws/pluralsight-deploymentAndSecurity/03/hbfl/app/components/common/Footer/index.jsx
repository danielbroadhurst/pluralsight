import React from 'react'
import styles from './index.less'

class Footer extends React.Component {
  render () {
    const year = (new Date()).getFullYear()
    return (
      <footer className={styles.footer}>
        &copy; HBFL &amp; Ryan Lewis 2017-{year}
      </footer>
    )
  }
}

export default Footer
