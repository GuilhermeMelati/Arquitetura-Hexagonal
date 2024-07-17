import {terminal} from 'terminal-kit'

export default class Terminal {
  static title(title: string) {
    terminal.clear()
    terminal.magenta(`${title}\n`)
    terminal.magenta('='.repeat(title.length) + '\n\n')
  }

  static async confirmation(message: string): Promise<boolean> {
    terminal.yellow(`${message} (y/n) `)
    const response = await terminal.yesOrNo().promise
    return response === true
  }

  static clear() {
    terminal.clear()
  }

  static async menu(options: string[]): Promise<[number, string]> {
    const response = await terminal.singleColumnMenu(options).promise
    return [response.selectedIndex, response.selectedText]
  }

  static async selection(
    message: string,
    options: string[]
  ): Promise<[number, string]> {
    terminal.yellow(`${message} (y/n) `)
    const response = await terminal.singleColumnMenu(options).promise
    return [response.selectedIndex, response.selectedText]
  }
}
