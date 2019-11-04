import { app } from 'electron'

const mainMenuTemplate = [
  {
    label: 'file',
    submenu: [
      {
        label: 'quite',
        accelerator: process.platform === 'darwin' ? 'command+q' : 'cntrl+q',
        click() {
          app.quit()
        }
      }
    ]
  }
]

export default mainMenuTemplate
