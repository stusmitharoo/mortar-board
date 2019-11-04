import { app } from 'electron'

const mainMenuTemplate = [
  {
    label: 'file',
    submenu: [
      {
        label: 'quite',
        accelerator: process.platform === 'darwin' ? 'command+q' : 'ctrl+q',
        click() {
          app.quit()
        }
      }
    ]
  }
]

if (process.platform === 'darwin') {
  mainMenuTemplate.unshift({})
}

if (process.env.NODE_ENV !== 'production') {
  mainMenuTemplate.push({
    label: 'dev tools',
    submenu: [
      {
        label: 'Toggle devtools',
        accelerator: process.platform === 'darwin' ? 'command+i' : 'ctrl+i',
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools()
        }
      },
      {
        role: 'reload'
      }
    ]
  })
}

export default mainMenuTemplate
