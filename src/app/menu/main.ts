import Terminal from '@/app/utils/terminal'
import fundamentals from '@/app/menu/fundamentals'

export default async function main() {
  Terminal.title('Main Menu')
  const [index] = await Terminal.menu(['1 - Fundamentos', 'Sair'])

  switch (index) {
    case 0:
      await fundamentals()
      break
    case 1:
      process.exit(0)
  }

  main()
}
